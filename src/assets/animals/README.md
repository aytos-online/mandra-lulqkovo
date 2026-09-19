# Animal engravings

One engraving per milk type, used on the home page category tiles and on the
Products page (filter chips and the milk-type chip on a product). All four are
**public domain** — free to use commercially, no attribution required. The lines
below are kept so the provenance can be checked later.

| File | Source plate | Origin | Licence |
| --- | --- | --- | --- |
| `krave.webp` | *Ayrshire cow*, p. 34 | Brett's Colonists' Guide, 1883 — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ayrshire_cow_%E2%80%A2_p34_%E2%80%A2_Brett%27s_Colonists%27_Guide_1883.tif) | Public domain |
| `ovche.webp` | *Cotswold Sheep*, p. 163 | Brett's Colonist's Guide, 1883 — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cotswold_Sheep_%E2%80%A2_p163%E2%80%A2_Brett%27s_Colonist%27s_Guide_1883.tif) | Public domain |
| `koze.webp` | *Goat* | Pearson Scott Foresman drawing collection — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Goat_(PSF).png) | Public domain (donated) |
| `bivolsko.webp` | *Buffalo3* | Pearson Scott Foresman drawing collection — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Buffalo3_(PSF).jpg) | Public domain (donated) |

## How they were prepared

Each plate was cut off its background, re-inked in the site's `ink` colour
(`#15302C`) as a transparent WebP, and mirrored where needed so all four face
left. The cow and sheep are wood engravings whose backgrounds (hatched sky, the
ground, a barn) had to be separated from the animal; the goat and buffalo were
already line art on clean paper.

To regenerate at a different size or ink colour, the originals can be fetched
again from the Commons links above; the cutout for the cow isolates the animal
by eroding along a vertical run (its sky is drawn in long horizontal lines),
and the sheep by closing the fleece strokes into a mass before stripping the
long horizontal lines outside the body.

Exported at 520px wide, WebP quality 78 — roughly 77–157 KB each, in line with
the product images already in `src/assets/products/`.
