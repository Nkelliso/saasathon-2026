# Five CNC machines prepared for Torque

Verified against manufacturer downloads on 2026-09-26. These are five additional machines; the existing PCNC 1100, UR5e, and ABB IRB 120 assets are retained.

All five have actual manufacturer CAD converted to standalone GLB and a substantial official manual converted to Markdown. All five selected manuals are **English**. The full source collection contains **1,351 PDF pages**. The mix supports milling, turning, routing, and plasma-cutting demos.

**Later curation:** active `manual.md` files now exclude installation and programming documentation. The page counts, extraction checks, and original Markdown hashes in these preparation records describe the full originals, preserved in `docs/manual-archives/`. See [manual curation](manual-curation/README.md) for current sizes and exclusions.

| Machine / asset folder | Type | Manual | CAD source |
| --- | --- | --- | --- |
| `tormach-1100mx` | CNC mill | [UM10586, 0626A — 329 pages](https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf) | [Official 1100M/MX STEP + IGES](https://tormach.com/support/mill/1100mx-solid-models-and-drawings) |
| `tormach-770mx` | CNC mill, MF serial family | [UM10587, 0626A — 319 pages](https://tormach.com/media/asset/u/m/um10587_770mx_mf_0626a.pdf) | [Official 770M/MX STEP + IGES](https://tormach.com/support/mill/770mx-mf-solid-models-and-drawings) |
| `tormach-15l-slant-pro` | CNC lathe | [UM10225, 0626A — 199 pages](https://tormach.com/media/asset/u/m/um10225_15l_slant-pro_manual_0626a.pdf) | [Official STEP assembly](https://tormach.com/support/lathe/15l-slant-pro-lathe-solid-models-and-drawings) |
| `tormach-24r` | CNC router | [UM10564, 0826A — 292 pages](https://tormach.com/media/asset/u/m/um10564_24r_0826a.pdf) | [Official Rev A IGES + Parasolid assembly](https://tormach.com/support/router/24r-cnc-router-solid-models-and-drawings) |
| `tormach-1300pl` | CNC plasma table | [UM10720, 0725A — 212 pages](https://tormach.com/media/asset/u/m/um10720_1300pl_0725a_web.pdf) | [Official STEP assembly](https://tormach.com/support/plasma/1300pl-plasma-table-solid-models) |

Each folder follows the existing structure exactly:

```text
src/machines/<manufacturer-model>/
  model.glb
  manual.md
```

The five models are registered in `src/lib/machines.ts`, available in `/add_machine`, and served through `/api/models/<machine-id>`. The model route derives its static paths from the same registry. Registering a machine makes its manual available to the existing diagnosis retrieval code.

## Final verification

Five fresh-context agents prepared one machine each, in batches of three and two. All five GLBs were imported and rendered in Blender, and their source manual covers and troubleshooting pages were inspected. Per-machine checks compared all extracted page bodies with the source PDFs. The shared asset validator passed for all eight machine folders, including the three existing machines.

In Torque, all five model endpoints returned HTTP 200 with valid GLB data; all five selection previews were opened and desktop screenshots inspected. Mobile screenshots were also inspected. No browser errors occurred. Existing Three.js Clock deprecation and headless GPU readback warnings remain. `npm run check` passed with four existing unused-import warnings in landing-page files and no errors.

## Recommended pitch examples

The prompts below are grounded in the manuals, not invented fault histories. Page references are the `PDF Page` markers in the Markdown.

| Machine | Demo prompt | Source |
| --- | --- | --- |
| 1100MX | “The spindle motor sounds like it is running, but the spindle does not turn. What should I inspect?” | PDF p264, spindle troubleshooting |
| 1100MX | “The power drawbar cannot load or unload a tool. What is the first high-probability cause?” | PDF p269, drawbar troubleshooting |
| 770MX (MF) | “The spindle stopped with Oht.I on the VFD. What does the manual say to check?” | PDF p265, VFD trip reference |
| 15L Slant-PRO | “Both home switches appear actuated even though only one seems damaged. How can that happen?” | PDF p173, home/limit switch troubleshooting |
| 15L Slant-PRO | “The lathe loses Z-axis position while drilling a large hole. Could cutting load be the cause?” | PDF p168, lost position |
| 24R | “Our router spindle stops with Oht.I. What does the manual say this means?” | PDF p227, VFD trip reference |
| 24R | “The touchscreen ignores touches. Is there a PathPilot sensitivity setting?” | PDF p228, controller troubleshooting |
| 1300PL | “The torch shuts off in the middle of a cut. What should I check?” | PDF p172, torch troubleshooting |
| 1300PL | “Why does ohmic probing trigger early when the torch cap is wet?” | PDF p169, ohmic probing |

Detailed preparation reports in `docs/machine-research/` include additional prompts, exact source files, hashes, and visual verification. Keep the manuals' safety and applicability context with troubleshooting answers.

## Conversion tools

- `scripts/convert-machine-cad.mjs`: STEP/IGES tessellation with OpenCascade (`occt-import-js` 0.0.23), meter output, available CAD colors, self-contained glTF 2.0 binary export through Three.js. Defaults to Z-up source coordinates; **these Tormach assemblies need the explicitly verified source-up argument in their reports**. All output uses glTF Y-up, centered horizontally, grounded at Y=0.
- `scripts/extract-machine-manual.py`: PyMuPDF extraction, page markers, source attribution, all extractable text. Uses PDF authored order (`sort=False`), which preserves these manuals' two-column paragraphs better than sorting all text by coordinates.
- `scripts/verify-machine-assets.mjs`: validates binary headers, actual Three.js loading, finite vertex data, triangle indices, bounds, embedded resources, manual attribution, and sequential PDF pages.

Example preparation commands (Node and Python must be on PATH):

```sh
npm install --no-save --package-lock=false occt-import-js@0.0.23
python -m pip install pymupdf
node scripts/convert-machine-cad.mjs machine.STEP src/machines/tormach-1100mx/model.glb y
python scripts/extract-machine-manual.py manual.pdf src/machines/tormach-1100mx/manual.md "Tormach 1100MX Operator's Manual" "https://tormach.com/media/asset/u/m/um10586_1100mx_0626a.pdf"
node scripts/verify-machine-assets.mjs tormach-1100mx
```

On this Windows workstation, Node lives under `C:/Program Files/Microsoft Visual Studio/2022/Community/MSBuild/Microsoft/VisualStudio/NodeJs/`; Python and Blender under `C:/Program Files/Blender Foundation/Blender 5.2/`. PyMuPDF was installed locally in `.agent/python-libs`. The extraction script also supports a normal PyMuPDF install. Downloaded PDFs/CAD, rendered inspection images, and scratch conversion files remain under ignored `.agent/`; application folders contain only the two required assets.

## Scope of the source assets

- The 1100MX and 770MX downloads are manufacturer-supplied shared M/MX geometry. They are useful visualization assemblies, not exact representations of every current MX configuration. The 770MX manual is specifically for MF serial numbers.
- The 24R assembly has a Rev A vacuum table; the manual may describe newer options. The original ZIP's IGES file was converted directly, so no proprietary Parasolid converter is needed.
- CAD geometry is static and simplified, without rigs, internal service-level detail, decals, or photorealistic textures. Missing material appearance is represented with neutral materials.
- Markdown preserves extractable text and page references. Illustrations, electrical diagrams, and some table relationships require the linked PDF; blank/sparse pages are retained rather than silently omitted.
- Source attribution records provenance; it does not assert that manufacturer downloads carry an open redistribution license.

## Other candidates investigated

[Haas VF-2](https://www.haascnc.com/machines/vertical-mills/vf-series/models/small/vf-2.html), [UMC-750](https://www.haascnc.com/machines/vertical-mills/universal-machine/models/umc-750.html), and [ST-20](https://www.haascnc.com/sk/machines/lathes/st/models/standard/st-20.html) list official downloadable 3D models and operator documentation. Haas also lists [Chinese mill](https://www.haascnc.com/content/dam/haascnc/additional-languages/zh/service/manual/supplement/Chinese---mill-operator%27s-manual---2023.pdf) and [Chinese lathe](https://www.haascnc.com/content/dam/haascnc/additional-languages/zh/service/manual/supplement/Chinese---lathe-operator%27s-manual---2023.pdf) manuals.

They would be strong multilingual follow-ups. The VF-2 CAD ZIP returned a Cloudflare challenge/HTTP 403 in both PowerShell and Python download attempts here, so these were not counted as prepared machines. Tormach's accessible source files allowed the five selected machines to be delivered and checked end to end.
