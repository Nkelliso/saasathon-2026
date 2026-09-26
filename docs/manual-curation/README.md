# Curated machine reference manuals

All eight active `src/machines/<machine-id>/manual.md` files have been reviewed by three fresh-context agents. Initial installation/commissioning and programming documentation were excluded at reviewed chapter/subsection boundaries. Retained source paragraphs are unchanged apart from line-ending normalization; the generated header explains the reduced scope.

## Retained material

- Safety, machine applicability, operating limits, and normal operation.
- Maintenance, repair, replacement, calibration, troubleshooting, fault codes, parts and schematic references.
- Diagnostic ADMIN/MDI commands, loading/running existing programs, restoring settings, and software updates used for maintenance.
- Safety tests required after repairs/modifications and maintenance procedures embedded in installation chapters.

## Excluded material

- Receiving/unpacking, assembly, machine/controller provisioning, initial integration, accessory installation and commissioning instructions.
- First-part tutorials, program authoring/editing, conversational/CAD/DXF program generation, G/M-code language references, canned cycles and subroutines.
- Original contents/index navigation to removed material. Cross-references inside retained manufacturer paragraphs remain and resolve through the original linked manual.

Removal is contextual: replacing a motor still requires fitting its replacement; a diagnostic command still belongs in troubleshooting. These were retained. The ABB manual is primarily service/repair documentation, so its reduction is smaller. The UR5e commissioning chapter is safety validation required after modifications and is deliberately retained; initial setup/integration and authoring instructions elsewhere are excluded.

## Audit and restoration

Every `<machine-id>.json` in this directory records exact 1-based inclusive **original** line ranges, reasons, retained scope and review notes. Full originals are losslessly archived in [`../manual-archives/`](../manual-archives/README.md), outside the application retrieval path. SHA-256 ties each plan to its original. Original PDF page/section numbering is retained; gaps and partial pages are intentional.

```sh
python scripts/curate-machine-manuals.py --check <machine-id>
python scripts/curate-machine-manuals.py <machine-id>
```

The first command verifies the current excerpt against its reviewed plan. The second rebuilds it from the compressed original. To inspect full originals, decompress the corresponding `.md.gz`.

## Validation

- All eight generated manuals checked against their archived originals and exclusion plans.
- Original source URLs and ascending source-page markers retained; GLBs unchanged.
- Known troubleshooting passages checked, including the source-backed pitch examples.
- Existing diagnosis tests pass, and separate retrieval checks return relevant attributed evidence for all eight machines.
- `npm run check` passes with four pre-existing unused-import warnings in landing-page files.

Token estimates in the size table below use normalized text characters / 4, including Markdown; these are estimates, not tokenizer counts. They exclude compressed backups, which retrieval does not read.

| Manual | Before characters | After characters | Reduction | Approx. tokens now |
| --- | ---: | ---: | ---: | ---: |
| `abb-irb-120` | 310,896 | 277,564 | 10.7% | 69k |
| `tormach-1100mx` | 613,646 | 283,685 | 53.8% | 71k |
| `tormach-1300pl` | 336,602 | 178,339 | 47.0% | 45k |
| `tormach-15l-slant-pro` | 327,765 | 142,769 | 56.4% | 36k |
| `tormach-24r` | 516,729 | 272,972 | 47.2% | 68k |
| `tormach-770mx` | 603,131 | 277,686 | 54.0% | 69k |
| `tormach-pcnc-1100` | 427,338 | 239,136 | 44.0% | 60k |
| `universal-robots-ur5e` | 280,801 | 242,251 | 13.7% | 61k |

Total: **3,416,908 → 1,914,402 characters (44.0% smaller)**; approximately **479k tokens** now.
