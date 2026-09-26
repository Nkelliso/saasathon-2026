# Tormach 24R asset preparation

Final assets: `src/machines/tormach-24r/model.glb` and `manual.md`.

## Provenance

- Manufacturer CAD landing page: https://tormach.com/support/router/24r-cnc-router-solid-models-and-drawings
- Manufacturer CAD archive (asset 580): https://tormach.com/media/asset/3/9/39300_24r_machine_reva.zip
- Converted source: `39300_24R_Machine_RevA.IGS` (the archive also contains a Parasolid `.X_T`). IGES identifies SolidWorks 2016, millimeter units, and a 2020-04-01 export.
- Manufacturer manual (asset 555): https://tormach.com/media/asset/u/m/um10564_24r_0826a.pdf
- Manual: UM10564, 24R Operator's Manual, Version 0826A, 292 PDF pages, English. Source PDF cover and troubleshooting PDF page 227 were rendered and visually inspected.
- Model limitation: manufacturer Rev A simplified assembly with vacuum table, rather than an exact representation of the latest machine configuration pictured in the 0826A manual. CAD assembly lacks photorealistic textures/decals and internal service-level detail.

## Documentation verification

- Preserved all 292 page markers, including sparse or blank pages; source URL and code/version included at top.
- Uses PDF native text order (`sort=False`) to preserve the two-column reading sequence. PDF page 61 was checked: spindle removal steps 8-10 precede new spindle installation steps 1-2 without interleaving.
- Original warnings retained, including qualified-technician electrical cabinet restrictions and power-off/pneumatic isolation guidance on PDF pages 208 and 212.
- Figures are not reproduced; the header explicitly directs readers to the original PDF for diagrams and table relationships.

## Grounded showcase questions

1. **"Our 24R spindle stops with Oht.I. What does that mean, and what should we check?"** PDF page 227, Spindle VFD Trip Reference: heat sink overtemperature; spindle load or excessive workplace heat may contribute. Source directs stopping the spindle while letting powered VFD electronics cool, checking its fan and cabinet filters, and cooling the workplace when needed. Pair troubleshooting with source safety section, PDF pages 208/212.
2. **"The 24R touchscreen ignores touches. Is there a PathPilot sensitivity setting?"** PDF page 228, section 11.10.1: verify PathPilot v2.4.4 or later; `ADMIN TOUCHSCREEN SENSITIVITY 1000` in MDI is the documented initial setting (range 1-2047). If unresolved, the page describes resetting touchscreen calibration and running `ADMIN TOUCHSCREEN` with finger input.
3. **"An axis sounds noisy on our 24R. Could it be loose sheet metal rather than a motor failure?"** PDF pages 219-220, section 11.8.3: loose sheet metal is a high-probability cause and can vibrate at particular motor speeds. Other listed causes include a loose electrical connection, defective axis driver, and DC-BUS capacitor; internal electrical procedures require qualified technicians and the source's safety precautions.

## SHA-256

- CAD ZIP: `04297D71FE8305E72C2117BC20F58DBA2DB0D5EA01D3329E5AEDDA29642A4DB9`
- IGES: `C7289545C8C9DA8004E303538E86C5C0DF42DBDA06624FB9A04BB9257D967071`
- PDF: `D6B0038E89F5E6E7D2799A4B6791A2CC5A0C88616D0800A2D4781B61CAA1B588`

- GLB: `8271E621D83FCF2701D84B7170BE3E3D2303C5C4B7C5330BE5846671030FF28E`
- Markdown: `A1B74CA60A33C85EB98168DE6037F79D1EE745810ABD7BD1763B6F860A18256E`

## Geometry and visual verification

- GLB: 5,607,696 bytes, 22 meshes, 192,590 triangles. Actual tessellated manufacturer geometry, no placeholder objects.
- Dimensions (glTF X/Y/Z): 2.267001 x 1.944224 x 1.638670 meters. IGES source millimeters were converted to meters by OCCT.
- Source axis: **Y-up**, matching final glTF Y-up. Use the converter's `y` argument. Initial default Z-up render put the router on its side; corrected Y-up render visibly has all feet at ground, a horizontal vacuum bed, upright gantry/cable loop, and upright operator monitor.
- Centered horizontally and grounded at Y=0 in glTF. Blender-import bounds (Blender uses Z-up): (-1.133500, -0.819335, 0) to (1.133500, 0.819335, 1.944224).
- Render inspected: `.agent/24r-render.png`; PDF inspection images: `.agent/24r-page-1.png` and `.agent/24r-page-227.png`.
- Markdown file is 539,320 bytes; all 292 PDF pages represented. No app or shared converter files changed by this preparation task.
