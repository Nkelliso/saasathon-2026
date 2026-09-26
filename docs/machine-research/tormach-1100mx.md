# Tormach 1100MX asset preparation

Historical preparation record: manual statistics and hashes below precede [installation/programming exclusions](../manual-curation/README.md). The full original is archived; GLB statistics are unchanged.

Prepared 2026-09-26. Asset ID: `tormach-1100mx`.

## Deliverables

- `src/machines/tormach-1100mx/model.glb`: 1,457,436 bytes; glTF 2.0 binary; 47 meshes; 46,438 triangles; 3 materials; 0 textures.
- `src/machines/tormach-1100mx/manual.md`: 638,922 UTF-8 bytes; all 329 PDF pages, with sequential `## PDF Page N` markers and the complete extractable text of each source page.

## Official sources and limitations

- CAD landing: https://tormach.com/support/mill/1100mx-solid-models-and-drawings
- CAD download: https://tormach.com/media/asset/1/1/1100m_machine_reva_1_.zip
- CAD input: `1100M_MACHINE_REVA/1100M_MACHINE_REVA.STEP`, dated July 2018 in ZIP metadata. The archive also contains IGES geometry.
- Manual: https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf
- Manual asset link: https://tormach.com/docs/download/assetlink/asset_id/539
- Manual title/version: Tormach 1100MX Operator's Manual, UM10586, version 0626A, copyright 2026. English.

The CAD is the official shared 1100M/MX geometry, explicitly named 1100M in the archive. It is a simplified untextured visual representation, not evidence of exact current 1100MX internal components or configuration. No claim of matching the manual cover's exact configuration is made. It includes the machine enclosure, base, table and operator-console structure. This limitation is also recorded in the manual header.

The Markdown preserves text rather than PDF illustration or table layout. Refer to the original PDF for diagrams and table relationships. Sparse pages: 1 (illustrated cover), 20, 34, 110, 190, 204, 240, 276, 316. All are retained. No safety text was intentionally removed or rewritten. Source wording and source typographical inconsistencies remain unchanged.

## Conversion and verification

1. Converted official STEP using `scripts/convert-machine-cad.mjs`, `occt-import-js`, and Three GLTFExporter, with the `y` source-up argument. The first Z-up trial visibly lay on its side and was replaced.
2. Final GLB is Y-up, centered in X/Z with its base at Y=0. Bounds span X=2.060188 m, Y=2.395970 m, Z=2.013951 m. Source units were converted to meters.
3. Imported final GLB into Blender and rendered `.agent/1100mx-model.png`; visually inspected upright feet/base, enclosure and console. Import completed successfully; mesh was intact.
4. Extracted all manual pages using the shared `scripts/extract-machine-manual.py`. Reported a `sort=True` two-column interleaving problem to the parent. Shared script was centrally corrected to `sort=False`, and final Markdown regenerated. Original PDF authored content order preserves left and right columns on pages 3 and 38.
5. Rendered and visually inspected PDF cover (`.agent/1100mx-cover.png`), two-column body page 38 (`.agent/1100mx-body.png`), and troubleshooting page 251 (`.agent/1100mx-troubleshooting.png`). Confirmed manual model, version, and full power-off procedure.
6. Automated validation confirmed 329 page markers and that every page's complete `get_text(sort=False).strip()` occurs in its corresponding Markdown page. Validated GLB magic/version/declared length and counted meshes/triangles from JSON accessors.

## Grounded showcase questions

Use PDF page numbers, which include cover/front matter and correspond to the printed page labels here. Troubleshooting safety is on PDF page 248; retain that context in answers.

1. **The spindle motor sounds like it is running, but the spindle does not turn. What should I inspect?** PDF page 264, section 12.9.1: the manual identifies spindle-belt wear, damage, looseness or breakage as relevant to this symptom. This is distinct from a spindle motor that does not run.
2. **Machining has become loud and chattery. What causes does Tormach list?** PDF pages 268-269, section 12.9.2: cutting parameters/CAM settings, tool offsets, worn or broken tools, swarf on spindle/tool contact surfaces, drawbar spring preload, pull-stud torque/type, and damaged disc springs. Keep checks grounded in their listed probabilities and safety context.
3. **The power drawbar cannot load or unload a tool. What is the first high-probability cause?** PDF page 269, section 12.9.3: insufficient shop air pressure; the manual specifies checking for at least 90 psi at the machine FRL. It also lists insufficient/excessive drawbar spring preload as medium probability. Do not omit the serial-number limitation on the piston-bolt adjustment.

## SHA-256

| File | SHA-256 |
| --- | --- |
| Source CAD ZIP | `0a2a608c1bf32405710f432d8cb2abcde9d4b703f85fc14803654d8c77ed684a` |
| Source STEP | `4e49ce75908a4b4586b20a1be9bfe7661fd8638d6e1feb581959c141d9121fd4` |
| Source PDF | `574b74bb10700fa80dff81377d8285df08607658717d0442b4a19bd210ca8856` |
| Final model.glb | `9c83973c25108f008a3049aea7b135be0e93f0fb8fe5e2890272ba14276ef000` |
| Final manual.md | `fd2aef69d7b82e4abb96e685007842dd29f3df719163a54927a5641c7323ca64` |

No application/catalog/shared-script files were edited by this agent. No UI checks were run because this task changed assets only.
