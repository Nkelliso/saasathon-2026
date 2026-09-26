# Tormach 15L Slant-PRO asset preparation

Historical preparation record: manual statistics and hashes below precede [installation/programming exclusions](../manual-curation/README.md). The full original is archived; GLB statistics are unchanged.

Machine ID: `tormach-15l-slant-pro`

## Delivered assets

- `src/machines/tormach-15l-slant-pro/model.glb`: 2,495,496 bytes; glTF 2.0 binary; 70 meshes; 81,688 triangles; 3 materials; no image textures.
- `src/machines/tormach-15l-slant-pro/manual.md`: 339,803 UTF-8 bytes; all 199 PDF pages, sequential `PDF Page` markers; English; full extractable text including safety warnings retained.

## Official provenance

- CAD landing: https://tormach.com/support/lathe/15l-slant-pro-lathe-solid-models-and-drawings
- CAD download (asset 390): https://tormach.com/media/asset/1/5/15lsolidmodel.zip
- CAD input: `15LSolidModel/34444-CAM-A .STEP` from that ZIP. ZIP also contains a reference PNG used for visual comparison.
- Manual (asset 365): https://tormach.com/media/asset/u/m/um10225_15l_slant-pro_manual_0626a.pdf
- Manual cover: `UM10225_15L_Slant-PRO_Manual_0626A`, document part number 34397, copyright 2020 Tormach Inc. Version code retained verbatim; no inferred publication year from filename.

## Conversion and verification

CAD conversion used `scripts/convert-machine-cad.mjs INPUT OUTPUT y`, OCCT meter output, absolute linear deflection 0.001 m and angular deflection 0.35. The source STEP is Y-up. The default Z-up attempt was visually rejected because it laid the lathe sideways; the final Y-up conversion renders upright with all feet at ground level. Exported dimensions X/Y/Z: 1.9240106344 / 1.7363214493 / 1.7276070118 meters. The machine is centered in X/Z and grounded at Y=0.

Blender imported the final GLB successfully and rendered `.agent/15l-model.png`. The image was opened and compared with the supplied CAD reference PNG and PDF cover. It shows the lathe enclosure, stand, feet, side cabinet and control-monitor arm upright. The standard preview camera looks from the opposite side to the official reference PNG, so the control monitor is foreshortened.

PDF pages 1 and 176 were rendered with PyMuPDF and opened as PNGs (`.agent/15l-manual-page-1.png`, `.agent/15l-manual-page-176.png`). The cover matches the model/manual identity; page 176 contains readable controller communications and axis-driver troubleshooting tables. Initial coordinate-sorted extraction interleaved safety table columns; the shared extractor was corrected to PDF-authored order (`sort=False`) and the final manual regenerated. Page 2 warnings and page 176 troubleshooting paragraphs were inspected after regeneration and remain contiguous. A programmatic check confirms every one of the PDF's 199 full authored-order text extractions occurs in the Markdown and page markers are exactly 1 through 199. No page has fewer than 80 extracted characters.

`.agent/15l-verify.py` validates GLB header/version/length, counts primitives through glTF accessors, hashes both outputs, and checks all page text. It passed.

## Grounded demo questions

1. **“PathPilot is loaded, but the Controller LED is dark and Reset keeps flashing. What does the 15L manual say to check?”** PDF page 176, section 8.5.2: flashing Reset establishes controller/machine communications; the page also covers DB-25 port/cable, machine power, and J4 connection causes. Keep electrical work aligned with the manual's safety procedures.
2. **“The 15L loses Z-axis position while drilling a large hole. Could cutting load be the cause?”** PDF page 168, section 8.4.4.2: open-loop steppers can lose position from excessive friction/load; cogging can be audible; the manual specifically discusses a 3/4-inch hole in mild steel and recommends a pilot hole for drill diameters over 1/2 inch.
3. **“Both home switches appear actuated even though only one seems damaged. How can that happen?”** PDF page 173, section 8.4.6: X/Z switches are normally closed and wired in series, so one bad switch or disconnected wire can make both appear actuated; the same passage discusses coolant/chip contamination and the Status display.

## Limitations

- The official STEP import exposes almost no color data: 66 of 70 meshes have no mesh color; four have muted grey/brown-grey colors; all 70 meshes have zero nonnull face colors. The converter retains available colors and applies its neutral material fallback otherwise. The reference PNG's dark panel paint, window transparency, brand markings and screen appearance are absent from the delivered geometry/material data. No appearance was invented.
- This is static tessellated CAD for browser visualization, with no animation or rig. It is not certified collision or maintenance geometry.
- Markdown retains extractable text, not diagrams, electrical schematics, table borders or PDF typography. Diagram-dependent procedures require the linked PDF. The original PDF has not been copied into the machine directory.
- No application or catalog files were changed. Parent task handles app integration and desktop/mobile browser checks.

## SHA-256

| File | SHA-256 |
| --- | --- |
| Source ZIP | `395d39200191f2c2292fafe72006ff85127e78be1b30b55abda346501f4f50e7` |
| Source STEP | `1ccee2ad55540caa66d86e5270b448605d5d6f85c3ba4962263143c6a72f8901` |
| Source PDF | `db69fb48bc7012ee10607464d86ebffaa8e266b53e912de96a17edd1c7e77ec2` |
| Final model.glb | `70652165a8c3c850d84212a642e7a4762d4e0f94198c34f982d7a6cd48963a55` |
| Final manual.md | `892f56fb45d45be411e09205a52a76763403d5d2c550fc6652bc68aa7d3df116` |
