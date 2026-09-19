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

## Docker

For development with automatic updates, start Vite in a container:

```bash
docker compose up --build
```

Open <http://localhost:5173>. The source directory is mounted into the container,
so changes—including edits to `src/config/site.config.js`—are applied immediately
through Vite's hot reload. Stop it with `docker compose down`.

Build the production image:

```bash
docker build -t mandra-lulqkovo .
```

Run the container and expose the site at <http://localhost:8080>:

```bash
docker run --rm -p 8080:80 mandra-lulqkovo
```

## Brand system

Cool greens and blues on white — the design language follows flat, hairline-ruled
editorial surfaces rather than anything textured or ornamental.

- **Tokens** live in `tailwind.config.js`: `brand` green `#2E8F6E` as the primary,
  `azure` as the secondary, `mist`/`mist-deep`/`paper` grounds, `line` hairlines,
  and one light shade per milk — `sky` (краве), `meadow` (овче), `mint` (козе),
  `lagoon` (биволско). Each milk keeps its colour everywhere it appears: category
  tile, filter chip, product card wash, product page.
- **Component classes** are in `src/styles/theme.css`: `.btn-primary` /
  `.btn-secondary` / `.btn-light`, `.label` and `.eyebrow`, `.rule`, `.card` and
  `.card-lift`, `.section-container`, `.section-tint`, `.photo-frame`.
- **Type** is Literata 600 for headings and Manrope for everything else, with two
  custom steps below `text-sm`: `text-label` (11.5px, 0.16em) and `text-micro` (10px).
- **Animal engravings** — `src/assets/animals/` holds one public-domain 19th-century
  plate per milk, cut out and re-inked in the site's `ink` colour. See that folder's
  README for sources and licences.

Product illustrations are pale flat art on a cream ground; they are composited over
the milk's accent colour with `mix-blend-multiply`, which drops the flat ground into
the tint and makes the catalogue read as one set.

Full reference, including every hex value and a consistency audit:
`~/Documents/obsidian-vault/mandra-lulqkovo/design-system.md`, with a visual version
as `design-system.html` beside it.

## Structure

- `src/config/site.config.js` — business info (name, contact details, nav, map link)
- `src/config/content.js` — all copy: hero, about story, process steps, product catalog, store list, FAQ, CTA band
- `src/pages/` — one file per route (`/`, `/products`, `/products/:id`, `/about`, `/stores`, `/contact`, 404)
- `src/components/layout/` — Header, Nav, MobileMenu, PageHeader, Footer
- `src/components/sections/` — page sections (Hero, AnimalCategories, FarmBanner, Process, Differentiators,
  ProductCatalog, CtaBand, …)
- `src/components/ui/` — Button, Reveal, DripDivider, DropMark

Every page closes with the shared `CtaBand` (visit us / call us), so there is always a next step — the site sells
nothing online.

## Known placeholders to replace before launch

- **Contact details** (`site.config.js`) — the phone number is still `+359 00 000 000`.
- **Store addresses** (`content.js` → `stores.list`) — the Бургас shop still reads `[уточнете точен адрес]`.
- **Product catalog** (`content.js` → `products`) — names and weights pending confirmation against the real catalog.
  The `serve` lines are suggested copy, safe to rewrite.
- **Photography** — the only real photos are `src/assets/images/mandra/` (production) and `src/assets/hero-page.jpg`
  (Стара планина). Product art is illustration; swap in real product photos when they exist.
- **Logo** — the client's "Ади милк" wordmark is in place (header, footer, mobile drawer, favicons). The supplied
  file `src/assets/images/mandra/adi-milk-logo.jpg` is actually a PNG despite its extension; ask for an SVG if one
  exists, since the favicons are currently built from a raster crop.

## Deployment

Deploys to Vercel; `vercel.json` includes the SPA rewrite needed for client-side routing.
