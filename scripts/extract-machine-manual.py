"""Extract a manufacturer PDF into page-addressable Markdown without rewriting it.

Usage: python scripts/extract-machine-manual.py input.pdf output.md title source_url
PyMuPDF is required. In this workspace it is installed in .agent/python-libs.
"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / '.agent/python-libs'))
import pymupdf

source, target, title, url = sys.argv[1:]
doc = pymupdf.open(source)
parts = [f'# {title}\n\nSource: [{url}]({url})\n\n'
         f'Converted from official manufacturer PDF documentation. {len(doc)} PDF pages. '
         'Language: English. PDF page numbers below include cover and front matter.\n\n'
         'Text extracted in PDF authored order to preserve the two-column paragraphs; diagrams and some table relationships require the source PDF. '
         'This is an extraction, not a verified substitute for the illustrated manual.\n']
sparse = []
for i, page in enumerate(doc, 1):
    text = page.get_text(sort=False).strip()
    if len(text) < 80:
        sparse.append(i)
    parts.append(f'\n---\n\n## PDF Page {i}\n\n{text or "[No extractable text; see original PDF page.]"}\n')
output = pathlib.Path(target)
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text('\n'.join(parts), encoding='utf-8')
print({'output': str(output), 'pages': len(doc), 'characters': sum(map(len, parts)), 'sparse_pages': sparse})
