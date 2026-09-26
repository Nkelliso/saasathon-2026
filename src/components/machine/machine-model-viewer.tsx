"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Component, Suspense, useEffect, useMemo, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import {
  Box3,
  Color,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  SRGBColorSpace,
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { MachineModelId } from "@/lib/machines";

export type MachineModelViewerProps = {
  modelId: MachineModelId;
  className?: string;
  showGizmo?: boolean;
  autoRotate?: boolean;
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

function LoadedModel({ modelId }: { modelId: MachineModelId }) {
  const gltf = useLoader(GLTFLoader, `/api/models/${modelId}`);
  const model = useMemo(() => {
    const clonedModel = gltf.scene.clone(true);
    const box = new Box3().setFromObject(clonedModel);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const scale = 3.2 / Math.max(size.x, size.y, size.z, 0.001);

    clonedModel.position.sub(center);
    clonedModel.scale.setScalar(scale);
    clonedModel.position.y -= (box.min.y - center.y) * scale + 1.55;
    clonedModel.traverse((object: Object3D) => {
      if (!(object instanceof Mesh)) return;
      object.castShadow = true;
      object.receiveShadow = true;
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      for (const material of materials) {
        if (material instanceof MeshStandardMaterial) {
          material.envMapIntensity = 1.1;
          material.needsUpdate = true;
        }
      }
    });
    return clonedModel;
  }, [gltf.scene]);

  return <primitive object={model} />;
}

function CameraControls({ autoRotate }: { autoRotate: boolean }) {
  const { camera, gl } = useThree();
  const controls = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const orbit = new OrbitControls(camera, gl.domElement);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.06;
    orbit.enablePan = true;
    orbit.screenSpacePanning = true;
    orbit.panSpeed = 0.75;
    orbit.rotateSpeed = 0.65;
    orbit.zoomSpeed = 0.8;
    orbit.minDistance = 2.2;
    orbit.maxDistance = 14;
    orbit.autoRotate = autoRotate;
    orbit.autoRotateSpeed = 0.55;
    orbit.target.set(0, 0, 0);
    orbit.update();
    orbit.addEventListener("start", () => {
      orbit.autoRotate = false;
    });
    controls.current = orbit;

    let frame = 0;
    const update = () => {
      orbit.update();
      frame = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(frame);
      orbit.dispose();
      controls.current = null;
    };
  }, [autoRotate, camera, gl]);

  return null;
}

function Scene({ modelId, autoRotate }: Pick<MachineModelViewerProps, "modelId" | "autoRotate">) {
  return (
    <>
      <color attach="background" args={[new Color("#0d0d0f")]} />
      <fog attach="fog" args={["#0d0d0f", 10, 22]} />
      <ambientLight intensity={0.6} />
      <hemisphereLight args={["#dbeafe", "#18181b", 1.8]} />
      <directionalLight
        castShadow
        position={[4, 7, 5]}
        intensity={4.5}
        color="#fff7ed"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />
      <directionalLight position={[-4, 3, -4]} intensity={2.5} color="#5b9dff" />
      <spotLight
        position={[0, 5, -3]}
        intensity={18}
        angle={0.5}
        penumbra={0.8}
        color="#ff6b1a"
      />
      <Suspense fallback={null}>
        <LoadedModel modelId={modelId} />
      </Suspense>
      <mesh position={[0, -1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#111113" roughness={0.92} metalness={0.08} />
      </mesh>
      <gridHelper
        args={[22, 44, "#3a3a40", "#202024"]}
        position={[0, -1.565, 0]}
      />
      <CameraControls autoRotate={autoRotate ?? false} />
    </>
  );
}

export function MachineModelViewer({
  modelId,
  className = "",
  showGizmo = true,
  autoRotate = false,
}: MachineModelViewerProps) {
  return (
    <div
      className={`relative overflow-hidden bg-bg ${className}`}
      aria-label={`Interactive 3D model: ${modelId}`}
    >
      <ModelErrorBoundary key={modelId}>
        <Canvas
          key={modelId}
          camera={{ position: [4.8, 3.2, 5.8], fov: 36, near: 0.05, far: 100 }}
          dpr={[1, 1.75]}
          shadows
          gl={{ antialias: true, alpha: false, outputColorSpace: SRGBColorSpace }}
        >
          <Scene modelId={modelId} autoRotate={autoRotate} />
        </Canvas>
      </ModelErrorBoundary>

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
