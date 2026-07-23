from pathlib import Path
from PIL import Image, ImageDraw
import sys

src = Path(sys.argv[1])
out = Path(sys.argv[2])
paths = sorted(src.glob('page-*.png'), key=lambda p: int(p.stem.split('-')[-1]))
for group_no, start in enumerate(range(0, len(paths), 3), 1):
    group = paths[start:start+3]
    thumbs = []
    for p in group:
        im = Image.open(p).convert('RGB')
        im.thumbnail((900, 1100))
        canvas = Image.new('RGB', (920, 1140), 'white')
        canvas.paste(im, ((920-im.width)//2, 30))
        ImageDraw.Draw(canvas).text((20, 10), p.name, fill='black')
        thumbs.append(canvas)
    sheet = Image.new('RGB', (920*len(thumbs), 1140), '#dddddd')
    for i, im in enumerate(thumbs):
        sheet.paste(im, (i*920, 0))
    sheet.save(out / f'sheet-{group_no}.png')
