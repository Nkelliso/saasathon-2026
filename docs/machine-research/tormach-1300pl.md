# Tormach 1300PL asset preparation

Historical preparation record: manual statistics and hashes below precede [installation/programming exclusions](../manual-curation/README.md). The full original is archived; GLB statistics are unchanged.

Completed and verified `src/machines/tormach-1300pl/model.glb` and `manual.md`.

## Sources and metadata

- Machine: Tormach 1300PL CNC plasma table, ID `tormach-1300pl`.
- Manual: UM10720, Version 0725A, copyright 2025, official asset 609. https://tormach.com/media/asset/u/m/um10720_1300pl_0725a_web.pdf
- CAD: official asset 611, `50000-a_1.step`. https://tormach.com/media/asset/5/0/50000-a_1.step
- CAD landing page: https://tormach.com/support/plasma/1300pl-plasma-table-solid-models
- Source PDF: 11,823,900 bytes; all 212 pages extracted in authored order, including warnings and front matter. Source version and geometry provenance are included in Markdown header. Diagram and table-layout limitations are explicitly noted.
- Source STEP: 2,909,855 bytes.
- GLB: 627,212 bytes; 3 meshes; 19,926 triangles; dimensions X/Y/Z = 1.96735668 / 1.42454004 / 1.70999998 meters. Source Y-up retained, grounded at Y=0, centered horizontally. Uses manufacturer simplified geometry and source material colors; no invented textures or decals.
- Markdown: 351,016 bytes.

## Verification

- `node scripts/verify-machine-assets.mjs tormach-1300pl` passed: valid standalone GLB, finite indexed geometry, all 212 consecutive PDF pages, official source URL.
- Every page's complete authored-order extracted text was compared against the final Markdown; no mismatches.
- Visually inspected Blender render `.agent/1300pl-model.png`: upright table, feet grounded, gantry and torch above cutting slats, complete recognizable geometry.
- Visually inspected PDF cover `.agent/1300pl-cover.png`: confirms 1300PL and Version 0725A, matches converted table geometry.
- Visually inspected troubleshooting PDF page 172 in `.agent/1300pl-troubleshooting.png`: extracted cause/probability/action text agrees with the source tables. PyMuPDF rendered the PDF because Poppler was unavailable.

## Grounded showcase questions

1. **The torch shuts off in the middle of a cut. What should I check?** PDF page 172, section 11.3.1. The manual lists insufficient air supply and gaps in the material as high-probability causes; it calls for checking compressor CFM and restrictions in hoses/fittings, and describes expanded-metal settings for cutting across gaps.
2. **Why does ohmic probing trigger early or between cuts when the torch cap is wet?** PDF page 169, section 11.1.2. The manual explains that water can create an electrical path between nozzle and cap; its actions include jogging away from the workpiece before using TEST TORCH to purge, blowing water out, and adjusting sensitivity.
3. **The torch is cutting too high after a consumable change. What does the manual say?** PDF page 175, section 11.5.1. The manual covers M210 target voltage, correct material and consumable selection for AutoFS, FineCut versus standard nozzles, workpiece clamp connections, and cut current. It says mixing consumable types can cause a cutting-height error exceeding 1 inch (25 mm).

These are source-grounded demo prompts, not invented alarm codes. Retain the manual's safety context in generated answers, including the page 167 warning against making or disconnecting electrical connections under power.

## SHA-256

| File | SHA-256 |
| --- | --- |
| model.glb | `7bbd8d60cac5ebfa496d147b25bbe6eb3408cdafafae1d784510841f51f04e8b` |
| manual.md | `998ca778d01dd32fdb1a48328b13d9bcd417ebd769c8422dc707e3f0faa9f247` |
| Source STEP | `46f129c71e02fc33e7acb696537af010a1ce2ccd2e6f86ec223303d61044871d` |
| Source PDF | `006a3f38789c0426cf22af1357b3241e60a98c1dae09f16843ee09e9b0e60dcd` |
