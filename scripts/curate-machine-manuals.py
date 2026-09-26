"""Apply reviewed, original-line exclusion ranges to archived machine manuals.

Usage: python scripts/curate-machine-manuals.py [--check] machine-id [machine-id ...]
Plans: docs/manual-curation/<machine-id>.json; ranges are inclusive, 1-based.
Full source: docs/manual-archives/<machine-id>.md.gz (lossless UTF-8 archive).
"""
import gzip
import hashlib
import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
check_only = '--check' in sys.argv[1:]
for machine_id in (arg for arg in sys.argv[1:] if arg != '--check'):
    if not machine_id or any(c not in 'abcdefghijklmnopqrstuvwxyz0123456789-' for c in machine_id):
        raise ValueError('Invalid machine ID')
    plan = json.loads((ROOT / 'docs/manual-curation' / (machine_id + '.json')).read_text(encoding='utf-8'))
    raw = gzip.decompress((ROOT / 'docs/manual-archives' / (machine_id + '.md.gz')).read_bytes())
    if hashlib.sha256(raw).hexdigest() != plan['original_sha256']:
        raise ValueError('Archive does not match reviewed source')
    original = raw.decode('utf-8')
    lines = original.splitlines(keepends=True)
    removed = set()
    previous_end = 0
    for section in plan['exclusions']:
        start, end = section['start_line'], section['end_line']
        if start <= previous_end or end < start or end > len(lines) or not section['reason']:
            raise ValueError(f'Invalid/overlapping range: {section}')
        removed.update(range(start - 1, end))
        previous_end = end
    retained = ''.join(line for i, line in enumerate(lines) if i not in removed)
    # Keep title first and source attribution verbatim. The notice overrides old
    # full-extraction descriptions while preserving source page labels and text.
    title_end = retained.find('\n')
    notice = ('\n\n> Curated reference: installation/commissioning and programming documentation '
              'has been excluded. Remaining manufacturer text is retained verbatim, including '
              'safety, operation, maintenance, repair, and troubleshooting where present. '
              'Original page/section numbering is preserved and may have gaps; any original '
              'page count describes the full source, not this excerpt. Follow references to '
              'excluded sections in the linked original manual.\n')
    result = retained[:title_end] + notice + retained[title_end:]
    result = result.replace('\r\n', '\n')
    target = ROOT / 'src/machines' / machine_id / 'manual.md'
    if check_only:
        if target.read_text(encoding='utf-8') != result:
            raise ValueError(f'Curated file differs from reviewed plan: {machine_id}')
    else:
        target.write_text(result, encoding='utf-8', newline='')
    original_length = len(original.replace('\r\n', '\n'))
    result_length = len(result.replace('\r\n', '\n'))
    print(json.dumps({'machine_id': machine_id, 'verified': check_only, 'original_characters': original_length,
                      'curated_characters': result_length, 'reduction_percent': round(100*(1-result_length/original_length),1),
                      'excluded_ranges': len(plan['exclusions'])}))
