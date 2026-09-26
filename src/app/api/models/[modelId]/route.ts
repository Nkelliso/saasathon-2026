import { readFile } from "node:fs/promises";
import path from "node:path";
import { isMachineModelId } from "@/lib/machines";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
    { modelId: "tormach-pcnc-1100" },
    { modelId: "universal-robots-ur5e" },
    { modelId: "abb-irb-120" },
  ];
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ modelId: string }> },
) {
  const { modelId } = await params;

  if (!isMachineModelId(modelId)) {
    return new Response("Unknown model", { status: 404 });
  }

  const model = await readFile(
    path.join(process.cwd(), "src", "machines", modelId, "model.glb"),
  );

  return new Response(model, {
    headers: {
      "Content-Type": "model/gltf-binary",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
