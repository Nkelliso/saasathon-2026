# Original machine manuals

The `.md.gz` files preserve the exact bytes of each full Markdown manual before installation and programming sections were excluded from Torque's retrieval sources.

These archives are outside `src/machines`, so the existing manual retrieval code does not load them. They are compressed for storage, not intended for LLM input. Source URLs remain inside the archived Markdown and the curated manuals.

Each `docs/manual-curation/<machine-id>.json` records the archived original's SHA-256 and reviewed line ranges to exclude. Original line numbers are 1-based and inclusive. Rebuild the curated manual with:

```sh
python scripts/curate-machine-manuals.py <machine-id>
```

Verify the current manual exactly matches the original plus reviewed exclusions:

```sh
python scripts/curate-machine-manuals.py --check <machine-id>
```

To inspect or restore a full original, decompress the corresponding `.md.gz` with any gzip-compatible tool. Retained excerpts in the active manuals are verbatim; page and section numbering intentionally has gaps.
