// Usage: node scripts/verify-machine-assets.mjs [machine-slug ...]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3, Vector3 } from 'three';

const root = path.resolve('src/machines');
const ids = process.argv.slice(2);
for (const id of ids.length ? ids : fs.readdirSync(root)) {
  if (!/^[a-z0-9-]+$/.test(id)) throw new Error(`Invalid slug ${id}`);
  const bytes = fs.readFileSync(path.join(root, id, 'model.glb'));
  if (bytes.toString('utf8', 0, 4) !== 'glTF' || bytes.readUInt32LE(4) !== 2 || bytes.readUInt32LE(8) !== bytes.length) {
    throw new Error(`Invalid GLB header: ${id}`);
  }
  const jsonLength = bytes.readUInt32LE(12);
  const json = JSON.parse(bytes.toString('utf8', 20, 20 + jsonLength));
  if ((json.buffers || []).some(b => b.uri) || (json.images || []).some(i => i.uri && !i.uri.startsWith('data:'))) {
    throw new Error(`External resource dependency: ${id}`);
  }
  const gltf = await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '');
  let meshes = 0, triangles = 0;
  gltf.scene.traverse(object => {
    if (!object.isMesh) return;
    meshes++;
    const geometry = object.geometry;
    const positions = geometry.getAttribute('position');
    if (!positions?.count || !Array.from(positions.array).every(Number.isFinite)) throw new Error(`Invalid positions: ${id}`);
    if (geometry.index && Array.from(geometry.index.array).some(i => i < 0 || i >= positions.count)) throw new Error(`Invalid indices: ${id}`);
    triangles += (geometry.index?.count || positions.count) / 3;
  });
  const bounds = new Box3().setFromObject(gltf.scene);
  const dimensions = bounds.getSize(new Vector3()).toArray();
  if (!meshes || !dimensions.every(n => Number.isFinite(n) && n > 0)) throw new Error(`Empty model: ${id}`);
  const manual = fs.readFileSync(path.join(root, id, 'manual.md'), 'utf8');
  if (!/Source: \[https:\/\//.test(manual) || manual.length < 10000) throw new Error(`Missing manual content/source: ${id}`);
  const pages = [...manual.matchAll(/^## PDF Page (\d+)$/gm)].map(m => Number(m[1]));
  const curated = manual.includes('> Curated reference: installation/commissioning and programming documentation');
  if (pages.length && (curated
    ? pages.some((p, i) => p < 1 || (i > 0 && p <= pages[i - 1]))
    : pages.length < 20 || pages.some((p, i) => p !== i + 1))) throw new Error(`Invalid PDF page sequence: ${id}`);
  console.log(JSON.stringify({id, bytes: bytes.length, meshes, triangles, dimensions,
    pages: pages.length || 'legacy extraction', curated, manualCharacters: manual.length,
    sha256: crypto.createHash('sha256').update(bytes).digest('hex')}));
}
