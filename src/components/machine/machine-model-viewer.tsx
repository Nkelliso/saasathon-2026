"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import type { ThreeEvent } from "@react-three/fiber";
import { Crosshair, RotateCcw } from "lucide-react";
import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";
import {
  Box3,
  Color,
  Mesh,
  PMREMGenerator,
  SRGBColorSpace,
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { MachineModelId } from "@/lib/machines";
import type { Object3D } from "three";

// Serializable selection context for a future diagnosis request. Node paths use
// child indices, since GLB mesh names are not necessarily unique or descriptive.
export type MachinePartSelection = {
  modelId: MachineModelId;
  nodePath: number[];
  meshName: string;
  localPoint: [number, number, number];
  worldPoint: [number, number, number];
  faceIndex: number | null;
};

export type MachineModelViewerProps = {
  modelId: MachineModelId;
  className?: string;
  showGizmo?: boolean;
  autoRotate?: boolean;
  onPartSelect?: (selection: MachinePartSelection | null) => void;
};

class ModelErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Machine model failed to render", error, info);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function LoadedModel({ modelId, onSelect }: {
  modelId: MachineModelId;
  onSelect: (selection: MachinePartSelection) => void;
}) {
  const gltf = useLoader(GLTFLoader, `/api/models/${modelId}?v=materials-1`);

  const model = useMemo(() => {
    const clonedModel = gltf.scene.clone(true);
    const box = new Box3().setFromObject(clonedModel);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const scale = 3.2 / Math.max(size.x, size.y, size.z, 0.001);

    // The GLB owns each part's color and PBR finish. Keep its materials and UVs.
    clonedModel.traverse((object) => {
      if (!(object instanceof Mesh)) return;
      object.castShadow = true;
      object.receiveShadow = true;
    });

    clonedModel.scale.setScalar(scale);
    clonedModel.position.set(
      -center.x * scale,
      -box.min.y * scale - 1.55,
      -center.z * scale,
    );
    return clonedModel;
  }, [gltf.scene]);

  function selectPart(event: ThreeEvent<MouseEvent>) {
    // Orbit/pan gestures must never accidentally select a part.
    if (event.button !== 0 || event.delta > 4) return;
    event.stopPropagation();
    const mesh = event.object;
    if (!(mesh instanceof Mesh)) return;
    const nodePath: number[] = [];
    let node: Object3D = mesh;
    // Keep the original GLB hierarchy; don't depend on runtime-generated UUIDs.
    for (let parent = node.parent; parent && node !== model; parent = node.parent) {
      nodePath.unshift(parent.children.indexOf(node));
      node = parent;
    }
    onSelect({
      modelId,
      nodePath,
      meshName: mesh.name || `Part ${nodePath.join(".")}`,
      localPoint: mesh.worldToLocal(event.point.clone()).toArray(),
      worldPoint: event.point.toArray(),
      faceIndex: event.faceIndex ?? null,
    });
  }

  // Geometry and materials are shared with useLoader's cache across previews.
  return <primitive object={model} dispose={null} onClick={selectPart} />;
}

function StudioEnvironment() {
  const { gl } = useThree();
  const environment = useMemo(() => {
    const generator = new PMREMGenerator(gl);
    const texture = generator.fromScene(new RoomEnvironment(), 0.04).texture;
    generator.dispose();
    return texture;
  }, [gl]);

  useEffect(() => () => environment.dispose(), [environment]);

  return <primitive object={environment} attach="environment" />;
}

function CameraControls({ autoRotate, selection }: {
  autoRotate: boolean;
  selection: MachinePartSelection | null;
}) {
  const { camera, gl } = useThree();
  const controls = useRef<OrbitControls | null>(null);
  const flight = useRef<{
    from: Vector3; to: Vector3; fromTarget: Vector3; toTarget: Vector3;
    elapsed: number; duration: number;
  } | null>(null);

  useEffect(() => {
    const orbit = new OrbitControls(camera, gl.domElement);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.06;
    orbit.enablePan = true;
    orbit.screenSpacePanning = true;
    orbit.panSpeed = 0.75;
    orbit.rotateSpeed = 0.65;
    orbit.zoomSpeed = 0.8;
    orbit.minDistance = 0.6;
    orbit.maxDistance = 14;
    orbit.autoRotate = autoRotate;
    orbit.autoRotateSpeed = 0.55;
    orbit.target.set(0, 0, 0);
    orbit.update();
    orbit.addEventListener("start", () => {
      orbit.autoRotate = false;
      flight.current = null;
      orbit.enableDamping = true;
    });
    controls.current = orbit;

    return () => {
      orbit.dispose();
      controls.current = null;
    };
  }, [autoRotate, camera, gl]);

  useEffect(() => {
    const orbit = controls.current;
    if (!orbit) return;
    // Flush residual orbit momentum before taking over the camera.
    orbit.autoRotate = false;
    orbit.enableDamping = false;
    orbit.update();
    const target = selection ? new Vector3(...selection.worldPoint) : new Vector3();
    const offset = camera.position.clone().sub(target);
    const distance = Math.max(1.2, Math.min(2.4, offset.length() * 0.5));
    flight.current = {
      from: camera.position.clone(),
      to: selection ? target.clone().add(offset.normalize().multiplyScalar(distance)) : new Vector3(4.8, 3.2, 5.8),
      fromTarget: orbit.target.clone(),
      toTarget: target,
      elapsed: 0,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.4,
    };
  }, [camera, selection]);

  useFrame((_, delta) => {
    const orbit = controls.current;
    if (!orbit) return;
    const move = flight.current;
    if (move) {
      move.elapsed += delta;
      const progress = move.duration ? Math.min(move.elapsed / move.duration, 1) : 1;
      const eased = 1 - Math.pow(1 - progress, 4);
      camera.position.lerpVectors(move.from, move.to, eased);
      orbit.target.lerpVectors(move.fromTarget, move.toTarget, eased);
      if (progress === 1) {
        flight.current = null;
        orbit.enableDamping = true;
        orbit.autoRotate = !selection && autoRotate;
      }
    }
    orbit.update();
  });

  return null;
}

function SelectionTarget({ selection, onProject }: {
  selection: MachinePartSelection | null;
  onProject: (point: Vector3, width: number, height: number) => void;
}) {
  const point = useMemo(() => new Vector3(), []);
  // Project the actual hit point each frame: fixed-size reticle, anchored to the
  // surface through orbit, zoom and responsive canvas resizing.
  useFrame(({ camera, size }) => {
    if (!selection) return;
    point.set(...selection.worldPoint).project(camera);
    onProject(point, size.width, size.height);
  });
  return null;
}

function Scene({ modelId, autoRotate, selection, onSelect, onProject }: Pick<MachineModelViewerProps, "modelId" | "autoRotate"> & {
  selection: MachinePartSelection | null;
  onSelect: (selection: MachinePartSelection) => void;
  onProject: (point: Vector3, width: number, height: number) => void;
}) {
  return (
    <>
      <color attach="background" args={[new Color("#0d0d0f")]} />
      <fog attach="fog" args={["#0d0d0f", 10, 22]} />
      <StudioEnvironment />
      <ambientLight intensity={0.15} />
      <hemisphereLight args={["#dbeafe", "#151518", 0.6]} />
      <directionalLight
        castShadow
        position={[4, 7, 5]}
        intensity={1.8}
        color="#fff7ed"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />
      <directionalLight position={[-4, 3, -4]} intensity={0.65} color="#6a9ed8" />
      <spotLight
        position={[0, 5, -3]}
        intensity={4}
        angle={0.5}
        penumbra={0.8}
        color="#ff6b1a"
      />
      <Suspense fallback={null}>
        <LoadedModel modelId={modelId} onSelect={onSelect} />
      </Suspense>
      <mesh position={[0, -1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 22]} />
        <meshPhysicalMaterial color="#151518" roughness={0.78} metalness={0.22} envMapIntensity={0.5} />
      </mesh>
      <gridHelper
        args={[22, 44, "#414147", "#242429"]}
        position={[0, -1.565, 0]}
      />
      <CameraControls autoRotate={autoRotate ?? false} selection={selection} />
      <SelectionTarget selection={selection} onProject={onProject} />
    </>
  );
}

export function MachineModelViewer(props: MachineModelViewerProps) {
  // A model change drops both the selection and camera state immediately.
  return <SelectableModelViewer key={props.modelId} {...props} />;
}

function SelectableModelViewer({
  modelId,
  className = "",
  showGizmo = true,
  autoRotate = false,
  onPartSelect,
}: MachineModelViewerProps) {
  const [selection, setSelection] = useState<MachinePartSelection | null>(null);
  const marker = useRef<HTMLDivElement>(null);

  function projectTarget(point: Vector3, width: number, height: number) {
    if (!marker.current) return;
    marker.current.style.visibility = point.z < -1 || point.z > 1 ? "hidden" : "visible";
    marker.current.style.transform = `translate(${(point.x + 1) * width / 2}px, ${(-point.y + 1) * height / 2}px) translate(-50%, -50%)`;
  }

  useEffect(() => {
    onPartSelect?.(selection);
  }, [onPartSelect, selection]);

  return (
    <div
      className={`relative overflow-hidden bg-bg ${className}`}
      aria-label={`Interactive 3D model: ${modelId}`}
      onKeyDown={(event) => {
        if (event.key === "Escape") setSelection(null);
      }}
      tabIndex={0}
    >
      <ModelErrorBoundary key={modelId}>
        <Canvas
          key={modelId}
          scene={{ environmentIntensity: 0.35 }}
          camera={{ position: [4.8, 3.2, 5.8], fov: 36, near: 0.05, far: 100 }}
          dpr={[1, 1.75]}
          shadows="basic"
          gl={{ antialias: true, alpha: false, outputColorSpace: SRGBColorSpace }}
        >
          <Scene modelId={modelId} autoRotate={autoRotate} selection={selection} onSelect={setSelection} onProject={projectTarget} />
        </Canvas>
      </ModelErrorBoundary>

      {selection && <div ref={marker} data-testid="part-target" className="pointer-events-none absolute left-0 top-0 text-accent" style={{ visibility: "hidden" }} aria-hidden="true">
        <Crosshair className="size-9" strokeWidth={1.5} />
        <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>}
      <div className="absolute inset-x-5 bottom-16 flex items-center justify-between gap-2 sm:inset-x-6">
        <p role="status" className={`pointer-events-none min-w-0 truncate rounded-md border border-line bg-surface/90 px-2.5 py-2 font-mono text-[10px] ${selection ? "text-accent" : "text-fg-muted"}`} title={selection?.meshName}>
          {selection ? "PART SELECTED" : "Click a part to inspect"}
        </p>
        {selection && <button type="button" onClick={() => setSelection(null)} className="flex shrink-0 items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-2 font-mono text-[10px] text-fg-muted transition-colors hover:border-line-strong hover:text-fg focus-visible:outline-2 focus-visible:outline-accent" aria-label="Clear selection and reset view">
          <RotateCcw className="size-3.5" strokeWidth={1.5} />Reset view
        </button>}
      </div>

      {showGizmo && (
        <div className="pointer-events-none absolute bottom-5 right-5 size-16 font-mono text-[9px] text-fg-muted" aria-hidden="true">
          <span className="absolute left-[30px] top-0 h-8 w-px bg-fault" />
          <span className="absolute left-[34px] top-0 text-fault">Y</span>
          <span className="absolute left-[30px] top-[30px] h-px w-8 bg-ok" />
          <span className="absolute right-0 top-[23px] text-ok">X</span>
          <span className="absolute left-[8px] top-[30px] h-px w-6 -rotate-45 bg-info" />
          <span className="absolute left-0 top-[43px] text-info">Z</span>
          <span className="absolute left-[27px] top-[27px] size-2 rounded-full border border-fg-muted bg-surface" />
        </div>
      )}
    </div>
  );
}
