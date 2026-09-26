# Tormach 770MX MF asset report

Completed 2026-09-26. Owned production files: `src/machines/tormach-770mx/model.glb` and `src/machines/tormach-770mx/manual.md`. No application, catalog, or shared-script files changed.

## Sources and applicability

- Official CAD listing: https://tormach.com/support/mill/770mx-mf-solid-models-and-drawings
- Official CAD archive (asset 33): https://tormach.com/media/asset/7/7/770m_machine_reva_1_.zip
- Converted archive member: `770M_MACHINE_REVA.STEP` (archive also contains IGS).
- Official manual (asset 537): https://tormach.com/media/asset/u/m/um10587_770mx_mf_0626a.pdf
- Manual title: **770MX Operator's Manual**, document **UM10587**, version **0626A**, copyright **2026**, **319 PDF pages**, English.
- PDF page 3 expressly limits this manual to serial numbers beginning **MF**; ML machines require **UM10864**. This caveat is in the Markdown header.
- Geometry is the shared, simplified 770M/MX model published on the 770MX MF support page. It is not detailed or serial-specific service geometry. The model omits the operator display and detailed internals seen in the manual cover photograph. Geometry provenance and limitations are in the Markdown header.

## Conversion and validation

- Converted using `scripts/convert-machine-cad.mjs` with source up-axis `y`. No rotation required; exported glTF uses Y-up, meters, centered X/Z and grounded at Y=0.
- GLB: **861,176 bytes**, **25 meshes**, **25,816 triangles**, dimensions **1.4150 x 2.2223 x 1.2911 m** (X/Y/Z).
- Blender rendered `.agent/770mx-model.png`; inspected the image. Enclosure, table, column, cable loop, stand, and feet are upright, coherent, and visible. Blender bounds confirm bottom Z=0, top Z=2.2223 m after glTF coordinate conversion.
- Manual extraction uses `get_text(sort=False)` to retain authored paragraph order. All **319** page headings are sequential; every page body was compared against source PDF extracted text and matched exactly (with the documented placeholder for textless pages). No warnings or procedure text intentionally omitted or rewritten.
- Rendered and inspected PDF pages **1, 3, 265, 267, 270** at 1.5x scale: cover/version, MF applicability, VFD fault table, tool-release troubleshooting, touchscreen troubleshooting. Images are `.agent/770mx-page-<number>.png`.
- `node scripts/verify-machine-assets.mjs tormach-770mx`: **PASS**. Valid GLB 2.0, self-contained resources, finite geometry and indices, valid dimensions, linked manual source and 319 sequential pages.
- Exact extraction check: `.agent/770mx-qa.py`: **PASS**.
- Manual caveat retained: diagrams and some table relationships require the illustrated source PDF; extraction is not a verified substitute.

## Grounded showcase questions

1. **"Our 770MX MF spindle stopped with Oht.I on the VFD. What does the manual say to check?"** PDF **page 265**, section 12.9, Spindle VFD Trip Reference. The row identifies excessive heat-sink temperature and possible cabinet/work-location heat; it covers stopping spindle operation while VFD electronics cool, VFD fan operation, cabinet filters, and ambient heat. Pair with troubleshooting safety on **page 246** and electrical-service qualification warning on **page 250**.
2. **"The 770MX MF won't load or unload a tool. What is the highest-probability cause?"** PDF **page 267**, section **12.9.3**: insufficient shop air pressure, with minimum **90 psi** at the machine FRL. Continuation **page 268** distinguishes drawbar-preload and serial-specific three-stack cylinder checks. Retain troubleshooting safety on **page 246**; do not flatten the serial restrictions.
3. **"Our 770MX console ignores touch input in part of the screen. What settings does Tormach recommend?"** PDF **page 270**, section **12.10.1**: low touch-controller sensitivity is the stated cause; requires PathPilot **v2.4.4 or higher**, documents `ADMIN TOUCHSCREEN SENSITIVITY 1000` and subsequent calibration workflow, and notes extreme humidity can affect the resistive touchscreen.

## SHA-256

| File | Bytes | SHA-256 |
|---|---:|---|
| Source CAD ZIP | 1,674,780 | `befb50a0e9ded0409993ec420303c99e20cf3ceedc88d0b0f6126f5fb2be8f9a` |
| Source STEP | 3,610,195 | `0c39c31b4ecc3bccc61e468df15120e62c8df73ef58df46e36e2f785ff450e3b` |
| Source PDF | 21,689,364 | `792e545a22f5dbcd58be607b62da01f5da8bea72facce247a514067afdd5c271` |
| model.glb | 861,176 | `34f6a8758134b47ece0f2c6712f1b56e8201b438db9ef474a059fb901584ed07` |
| manual.md | 627,667 | `d64dbd27cb51ed321acff7d17e90bdb78502ed421323bfd5e9cb9c116baebff6` |
