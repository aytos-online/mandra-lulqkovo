# Мандра Люляково

Marketing site for Мандра Люляково (Ади Милк ЕООД) — a family dairy in the village of Люляково, producing cow,
sheep, goat, and buffalo milk products since 1994. Informational site only — no online ordering.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # oxlint
```

## Brand system

The visual language is Bulgarian folk embroidery — **шевица** — rendered in code rather than as image assets, so it
scales cleanly and can be recoloured per section.

- `src/components/ui/FolkPattern.jsx` — the motifs, defined as stitch grids (one character per stitch):
  - `FolkBand` — repeating diamond-chain border. Section dividers, card header rules, the hem under the site header.
  - `FolkStar` — the eight-pointed star. Logo mark, list bullets, seals.
  - `FolkWeave` — the same star tiled large and faint as a woven-cloth ground behind a section.
  - Each takes a `threads={{ a, b, c }}` prop so the three thread colours can be retuned per placement.
- `src/components/ui/AnimalMark.jsx` — flat head silhouettes for the four milks (cow, sheep, goat, buffalo), drawn
  with an SVG mask so eyes and nostrils punch through to whatever colour sits behind.
- Palette lives in `tailwind.config.js`: madder red (`maroon`) as the primary, with `honey` / `sky` / `meadow` /
  `sun` / `coral` as the bright folk accents. Each milk owns one accent colour and keeps it everywhere it appears —
  category tile, filter chip, product card wash, product page.
- Component classes (`.btn-primary`, `.eyebrow`, `.photo-frame`, `.texture-linen`) are in `src/styles/theme.css`.

Product illustrations are pale flat art on a cream ground; they are composited over the milk's accent colour with
`mix-blend-multiply`, which drops the flat ground into the tint and makes the catalogue read as one set.

## Structure

- `src/config/site.config.js` — business info (name, contact details, nav, map link)
- `src/config/content.js` — all copy: hero, about story, process steps, product catalog, store list, FAQ, CTA band
- `src/pages/` — one file per route (`/`, `/products`, `/products/:id`, `/about`, `/stores`, `/contact`, 404)
- `src/components/layout/` — Header, Nav, MobileMenu, PageHeader, Footer
- `src/components/sections/` — page sections (Hero, AnimalCategories, FarmBanner, Process, Differentiators,
  ProductCatalog, CtaBand, …)
- `src/components/ui/` — Button, Reveal, DripDivider and the brand primitives above

Every page closes with the shared `CtaBand` (visit us / call us), so there is always a next step — the site sells
nothing online.

## Known placeholders to replace before launch

- **Contact details** (`site.config.js`) — the phone number is still `+359 00 000 000`.
- **Store addresses** (`content.js` → `stores.list`) — the Бургас shop still reads `[уточнете точен адрес]`.
- **Product catalog** (`content.js` → `products`) — names and weights pending confirmation against the real catalog.
  The `serve` lines are suggested copy, safe to rewrite.
- **Photography** — the only real photos are `src/assets/images/mandra/` (production) and `src/assets/hero-page.jpg`
  (Стара планина). Product art is illustration; swap in real product photos when they exist.
- **Logo** — currently the шевица star mark; replace `public/favicon.svg` and the mark in `Header.jsx` if a logo is
  designed.

## Deployment

Deploys to Vercel; `vercel.json` includes the SPA rewrite needed for client-side routing.
