// Offline asset preparation: npm install --no-save occt-import-js, then run with Node.
// Usage: node scripts/convert-machine-cad.mjs input.step output.glb [z|y]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import * as THREE from 'three';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
const require = createRequire(import.meta.url);
const [input, output, up = 'z'] = process.argv.slice(2);
if (!input || !output || !['z', 'y'].includes(up)) throw new Error('Usage: node scripts/convert-machine-cad.mjs input.step output.glb [z|y]');
globalThis.FileReader = class {
  readAsArrayBuffer(blob) { blob.arrayBuffer().then(result => { this.result = result; this.onloadend?.(); }); }
};
const occt = await require('occt-import-js')();
const readCad = /\.(igs|iges)$/i.test(input) ? occt.ReadIgesFile.bind(occt) : occt.ReadStepFile.bind(occt);
const result = readCad(fs.readFileSync(input), {
  linearUnit: 'meter', linearDeflectionType: 'absolute_value', linearDeflection: 0.001,
  angularDeflection: 0.35,
});
if (!result.success || !result.meshes.length) throw new Error('CAD conversion produced no meshes');
const scene = new THREE.Scene();
const machine = new THREE.Group();
machine.name = path.basename(path.dirname(output));
const materials = new Map();
function material(color) {
  const rgb = color || [0.55, 0.58, 0.60];
  const key = rgb.join(',');
  if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({
    color: new THREE.Color().setRGB(...rgb), metalness: 0.18, roughness: 0.65,
    side: THREE.DoubleSide,
  }));
  return materials.get(key);
}
let triangles = 0;
for (const mesh of result.meshes) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(mesh.attributes.position.array, 3));
  if (mesh.attributes.normal) geometry.setAttribute('normal', new THREE.Float32BufferAttribute(mesh.attributes.normal.array, 3));
  geometry.setIndex(mesh.index.array);
  if (!mesh.attributes.normal) geometry.computeVertexNormals();
  const object = new THREE.Mesh(geometry, material(mesh.color));
  object.name = mesh.name || 'CAD component';
  machine.add(object);
  triangles += mesh.index.array.length / 3;
}
if (up === 'z') machine.rotation.x = -Math.PI / 2;
scene.add(machine);
scene.updateMatrixWorld(true);
const bounds = new THREE.Box3().setFromObject(machine);
const center = bounds.getCenter(new THREE.Vector3());
machine.position.set(-center.x, -bounds.min.y, -center.z);
scene.updateMatrixWorld(true);
scene.userData = { sourceFile: path.basename(input), sourceUpAxis: up, units: 'meter' };
const glb = await new GLTFExporter().parseAsync(scene, { binary: true });
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, Buffer.from(glb));
console.log(JSON.stringify({ output, bytes: glb.byteLength, meshes: result.meshes.length, triangles,
  dimensionsMeters: bounds.getSize(new THREE.Vector3()).toArray() }));
