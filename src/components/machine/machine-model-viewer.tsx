"use client";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Component, Suspense, useEffect, useMemo, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import {
  Box3,
  BufferAttribute,
  CanvasTexture,
  Color,
  Mesh,
  MeshPhysicalMaterial,
  NoColorSpace,
  Object3D,
  PMREMGenerator,
  RepeatWrapping,
  SRGBColorSpace,
  Vector3,
} from "three";
import type { BufferGeometry, Texture, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { MachineModelId } from "@/lib/machines";

export type MachineModelViewerProps = {
  modelId: MachineModelId;
  className?: string;
  showGizmo?: boolean;
  autoRotate?: boolean;
};

type SurfaceTextures = {
  powder: Texture;
  powderRoughness: Texture;
  brushed: Texture;
  brushedRoughness: Texture;
};

type MaterialKind =
  | "orange"
  | "white"
  | "blue"
  | "charcoal"
  | "rubber"
  | "iron"
  | "steel"
  | "aluminum";

const materialSettings: Record<MaterialKind, { color: string; metalness: number; roughness: number; brushed?: boolean; clearcoat?: number }> = {
  orange: { color: "#e86119", metalness: 0.12, roughness: 0.46, clearcoat: 0.12 },
  white: { color: "#d7d6cf", metalness: 0.14, roughness: 0.54, clearcoat: 0.08 },
  blue: { color: "#718c98", metalness: 0.28, roughness: 0.44, clearcoat: 0.08 },
  charcoal: { color: "#272b30", metalness: 0.48, roughness: 0.56 },
  rubber: { color: "#111316", metalness: 0.04, roughness: 0.9 },
  iron: { color: "#444a4f", metalness: 0.72, roughness: 0.67 },
  steel: { color: "#b5babd", metalness: 0.94, roughness: 0.25, brushed: true },
  aluminum: { color: "#aeb7bb", metalness: 0.82, roughness: 0.34, brushed: true },
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

function seededNoise(seed: number) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function makeTexture(
  renderer: WebGLRenderer,
  draw: (context: CanvasRenderingContext2D, size: number) => void,
  colorSpace: typeof SRGBColorSpace | typeof NoColorSpace,
) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas textures are unavailable");
  draw(context, size);
  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.colorSpace = colorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  texture.needsUpdate = true;
  return texture;
}

function createSurfaceTextures(renderer: WebGLRenderer): SurfaceTextures {
  const random = seededNoise(0x4649454c);
  const powder = makeTexture(renderer, (context, size) => {
    const image = context.createImageData(size, size);
    for (let index = 0; index < image.data.length; index += 4) {
      const grain = 228 + Math.floor(random() * 25);
      image.data[index] = grain;
      image.data[index + 1] = grain;
      image.data[index + 2] = grain;
      image.data[index + 3] = 255;
    }
    context.putImageData(image, 0, 0);
  }, SRGBColorSpace);

  const powderRoughness = makeTexture(renderer, (context, size) => {
    const image = context.createImageData(size, size);
    for (let index = 0; index < image.data.length; index += 4) {
      const grain = 145 + Math.floor(random() * 80);
      image.data[index] = grain;
      image.data[index + 1] = grain;
      image.data[index + 2] = grain;
      image.data[index + 3] = 255;
    }
    context.putImageData(image, 0, 0);
  }, NoColorSpace);

  const brushed = makeTexture(renderer, (context, size) => {
    const image = context.createImageData(size, size);
    const bands = Array.from({ length: size }, () => 208 + Math.floor(random() * 39));
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const index = (y * size + x) * 4;
        const grain = Math.min(255, bands[y] + Math.floor(random() * 9));
        image.data[index] = grain;
        image.data[index + 1] = grain;
        image.data[index + 2] = grain;
        image.data[index + 3] = 255;
      }
    }
    context.putImageData(image, 0, 0);
  }, SRGBColorSpace);

  const brushedRoughness = makeTexture(renderer, (context, size) => {
    const gradient = context.createLinearGradient(0, 0, 0, size);
    for (let stop = 0; stop <= 16; stop += 1) {
      const value = 90 + Math.floor(random() * 80);
      gradient.addColorStop(stop / 16, `rgb(${value} ${value} ${value})`);
    }
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);
  }, NoColorSpace);

  return { powder, powderRoughness, brushed, brushedRoughness };
}

function addBoxProjectedUvs(geometry: BufferGeometry, density: number) {
  const projected = geometry.clone();
  const positions = projected.getAttribute("position");
  const normals = projected.getAttribute("normal");
  const uvs = new Float32Array(positions.count * 2);

  for (let index = 0; index < positions.count; index += 1) {
    const x = positions.getX(index);
    const y = positions.getY(index);
    const z = positions.getZ(index);
    const nx = Math.abs(normals?.getX(index) ?? 0);
    const ny = Math.abs(normals?.getY(index) ?? 1);
    const nz = Math.abs(normals?.getZ(index) ?? 0);

    if (nx >= ny && nx >= nz) {
      uvs[index * 2] = z * density;
      uvs[index * 2 + 1] = y * density;
    } else if (ny >= nx && ny >= nz) {
      uvs[index * 2] = x * density;
      uvs[index * 2 + 1] = z * density;
    } else {
      uvs[index * 2] = x * density;
      uvs[index * 2 + 1] = y * density;
    }
  }

  projected.setAttribute("uv", new BufferAttribute(uvs, 2));
  return projected;
}

function tormachMaterial(name: string, index: number): MaterialKind {
  const part = name.toLowerCase();
  if (part.includes("guard")) return "orange";
  if (part.includes("motor") || part.includes("gearbox")) return "charcoal";
  if (part.includes("table") || part.includes("spindle") && !part.includes("housing")) return "steel";
  if (part.includes("base") || part.includes("axis") || part.includes("saddle")) return "iron";
  if (part.includes("column") || part.includes("housing")) return "blue";
  if (part.includes("enclosure")) return "white";
  return index < 2 || index > 8 && index < 12 ? "charcoal" : "aluminum";
}

function materialKind(
  modelId: MachineModelId,
  name: string,
  index: number,
  originalColor: number,
  relativeSize: number,
): MaterialKind {
  if (modelId === "tormach-pcnc-1100") return tormachMaterial(name, index);

  if (modelId === "universal-robots-ur5e") {
    if (originalColor < 0x505050) return "rubber";
    if (originalColor > 0xd8d8d8) return "white";
    if ((originalColor & 0xff) - ((originalColor >> 16) & 0xff) > 20) return "blue";
    return originalColor < 0xa0a0a0 ? "charcoal" : "aluminum";
  }

  if (modelId.startsWith("tormach-")) {
    if (originalColor < 0x505050) return "charcoal";
    if (originalColor > 0xd8d8d8) return "white";
    if ((originalColor & 0xff) - ((originalColor >> 16) & 0xff) > 20) return "blue";
    return "aluminum";
  }

  if (index === 15 || index < 2) return "charcoal";
  if (relativeSize > 0.07) return "orange";
  return index % 5 === 0 || index > 82 ? "steel" : "charcoal";
}

function LoadedModel({ modelId }: { modelId: MachineModelId }) {
  const gltf = useLoader(GLTFLoader, `/api/models/${modelId}`);
  const { gl } = useThree();
  const textures = useMemo(() => createSurfaceTextures(gl), [gl]);

  useEffect(() => () => {
    Object.values(textures).forEach((texture) => texture.dispose());
  }, [textures]);

  const model = useMemo(() => {
    const clonedModel = gltf.scene.clone(true);
    const box = new Box3().setFromObject(clonedModel);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const largestDimension = Math.max(size.x, size.y, size.z, 0.001);
    const scale = 3.2 / largestDimension;
    const textureDensity = 11 / largestDimension;
    const materials = new Map<MaterialKind, MeshPhysicalMaterial>();
    let meshIndex = 0;

    function getMaterial(kind: MaterialKind) {
      const cached = materials.get(kind);
      if (cached) return cached;
      const settings = materialSettings[kind];
      const texture = settings.brushed ? textures.brushed : textures.powder;
      const roughness = settings.brushed ? textures.brushedRoughness : textures.powderRoughness;
      const material = new MeshPhysicalMaterial({
        color: settings.color,
        map: texture,
        roughnessMap: roughness,
        bumpMap: roughness,
        bumpScale: settings.brushed ? 0.008 : 0.015,
        metalness: settings.metalness,
        roughness: settings.roughness,
        clearcoat: settings.clearcoat ?? 0,
        clearcoatRoughness: 0.42,
        envMapIntensity: settings.brushed ? 1.35 : 1.05,
      });
      materials.set(kind, material);
      return material;
    }

    clonedModel.traverse((object: Object3D) => {
      if (!(object instanceof Mesh)) return;
      const originalMaterial = Array.isArray(object.material) ? object.material[0] : object.material;
      const originalColor = "color" in originalMaterial && originalMaterial.color instanceof Color
        ? originalMaterial.color.getHex()
        : 0xdddddd;
      object.geometry.computeBoundingBox();
      const meshSize = object.geometry.boundingBox?.getSize(new Vector3()) ?? new Vector3();
      const relativeSize = Math.max(meshSize.x, meshSize.y, meshSize.z) / largestDimension;
      const kind = materialKind(modelId, object.name, meshIndex, originalColor, relativeSize);

      object.geometry = addBoxProjectedUvs(object.geometry, textureDensity);
      object.material = getMaterial(kind);
      object.castShadow = true;
      object.receiveShadow = true;
      meshIndex += 1;
    });

    clonedModel.scale.setScalar(scale);
    clonedModel.position.set(
      -center.x * scale,
      -box.min.y * scale - 1.55,
      -center.z * scale,
    );
    return clonedModel;
  }, [gltf.scene, modelId, textures]);

  useEffect(() => () => {
    model.traverse((object) => {
      if (object instanceof Mesh) object.geometry.dispose();
    });
  }, [model]);

  return <primitive object={model} />;
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
      <StudioEnvironment />
      <ambientLight intensity={0.35} />
      <hemisphereLight args={["#dbeafe", "#151518", 1.25]} />
      <directionalLight
        castShadow
        position={[4, 7, 5]}
        intensity={3.8}
        color="#fff7ed"
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00015}
      />
      <directionalLight position={[-4, 3, -4]} intensity={1.8} color="#6a9ed8" />
      <spotLight
        position={[0, 5, -3]}
        intensity={12}
        angle={0.5}
        penumbra={0.8}
        color="#ff6b1a"
      />
      <Suspense fallback={null}>
        <LoadedModel modelId={modelId} />
      </Suspense>
      <mesh position={[0, -1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[22, 22]} />
        <meshPhysicalMaterial color="#151518" roughness={0.78} metalness={0.22} envMapIntensity={0.5} />
      </mesh>
      <gridHelper
        args={[22, 44, "#414147", "#242429"]}
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
          shadows="basic"
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
