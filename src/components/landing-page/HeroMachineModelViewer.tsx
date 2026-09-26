"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import type { RootState } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Box3, MathUtils, Mesh, MeshBasicMaterial, Vector3 } from "three";
import type { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { MachineModelId } from "@/lib/machines";

export type HeroMachineModelViewerProps = {
  modelId: MachineModelId;
  /** Target model rotation in radians: [x, y, z]. */
  rotation?: [number, number, number];
  /** Use the viewer's default continuous rotation instead of `rotation`. */
  autoRotate?: boolean;
  /** Stops the WebGL render loop while the viewer is off-screen. */
  isActive?: boolean;
  className?: string;
};

const defaultRotation: [number, number, number] = [0, 0, 0];

/** Warm React Three Fiber's GLTF cache before a model is displayed. */
export function preloadHeroMachineModels(modelIds: MachineModelId[]) {
  for (const modelId of modelIds) {
    useLoader.preload(GLTFLoader, `/api/models/${modelId}`);
  }
}

function dampAngle(
  current: number,
  target: number,
  smoothing: number,
  delta: number,
) {
  const angleDelta =
    MathUtils.euclideanModulo(target - current + Math.PI, Math.PI * 2) -
    Math.PI;
  return current + angleDelta * (1 - Math.exp(-smoothing * delta));
}

function LoadedModel({ modelId }: { modelId: MachineModelId }) {
  const gltf = useLoader(GLTFLoader, `/api/models/${modelId}`);

  const { model, material } = useMemo(() => {
    const clonedModel = gltf.scene.clone(true);
    const bounds = new Box3().setFromObject(clonedModel);
    const size = bounds.getSize(new Vector3());
    const center = bounds.getCenter(new Vector3());
    const largestDimension = Math.max(size.x, size.y, size.z, 0.001);
    const scale = 3.2 / largestDimension;

    clonedModel.scale.setScalar(scale);
    clonedModel.position.set(
      -center.x * scale,
      -bounds.min.y * scale - 1.55,
      -center.z * scale,
    );

    const wireframeMaterial = new MeshBasicMaterial({
      color: "#ffd1a3",
      wireframe: true,
      transparent: true,
      opacity: 0.78,
    });

    clonedModel.traverse((object) => {
      if (object instanceof Mesh) object.material = wireframeMaterial;
    });

    return { model: clonedModel, material: wireframeMaterial };
  }, [gltf.scene]);

  useEffect(() => () => material.dispose(), [material]);

  return <primitive object={model} />;
}

function RotatingModel({
  modelId,
  rotation,
  autoRotate,
}: Pick<HeroMachineModelViewerProps, "modelId" | "rotation" | "autoRotate">) {
  const modelGroup = useRef<Group>(null);
  const targetRotation = rotation ?? defaultRotation;

  useFrame((_, delta) => {
    if (!modelGroup.current) return;

    if (autoRotate) {
      modelGroup.current.rotation.y -= delta * 0.35;
      return;
    }

    modelGroup.current.rotation.x = dampAngle(
      modelGroup.current.rotation.x,
      targetRotation[0],
      4.5,
      delta,
    );
    modelGroup.current.rotation.y = dampAngle(
      modelGroup.current.rotation.y,
      targetRotation[1],
      4.5,
      delta,
    );
    modelGroup.current.rotation.z = dampAngle(
      modelGroup.current.rotation.z,
      targetRotation[2],
      4.5,
      delta,
    );
  });

  return (
    <group ref={modelGroup}>
      <LoadedModel modelId={modelId} />
    </group>
  );
}

function HeroModelScene({
  modelId,
  rotation,
  autoRotate,
}: Pick<HeroMachineModelViewerProps, "modelId" | "rotation" | "autoRotate">) {
  return (
    <>
      <Suspense fallback={null}>
        <RotatingModel
          modelId={modelId}
          rotation={rotation}
          autoRotate={autoRotate}
        />
      </Suspense>
    </>
  );
}

/** A non-interactive, prop-driven model presentation for the landing-page hero. */
export function HeroMachineModelViewer({
  modelId,
  rotation,
  autoRotate = false,
  isActive = true,
  className = "",
}: HeroMachineModelViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const canvasState = useRef<RootState | null>(null);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    function updateCanvasSize() {
      const { width, height } = viewer!.getBoundingClientRect();
      if (width > 0 && height > 0) {
        canvasState.current?.setSize(width, height);
      }
    }

    const observer = new ResizeObserver(updateCanvasSize);
    observer.observe(viewer);
    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      className={`pointer-events-none relative overflow-hidden ${className}`}
      role="img"
      aria-label={`3D model of ${modelId}`}
    >
      <Canvas
        frameloop={isActive ? "always" : "never"}
        camera={{ position: [4.35, 2.9, 5.25], fov: 36, near: 0.05, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        resize={{ debounce: { resize: 0, scroll: 0 } }}
        onCreated={(state) => {
          canvasState.current = state;
          const { width, height } =
            viewerRef.current?.getBoundingClientRect() ?? {};
          if (width && height) state.setSize(width, height);
        }}
      >
        <HeroModelScene
          modelId={modelId}
          rotation={rotation}
          autoRotate={autoRotate}
        />
      </Canvas>
    </div>
  );
}
