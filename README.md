npm ru
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

## Structure

- `src/config/site.config.js` — business info (name, contact details, nav)
- `src/config/content.js` — all copy: hero, about story, product catalog, store list
- `src/config/placeholderImages.js` — stand-in Unsplash photos (credited) for sections without real photography yet
- `src/pages/` — one file per route (`/`, `/products`, `/about`, `/stores`, `/contact`)
- `src/components/layout/` — Header, Nav, Footer
- `src/components/sections/` — page sections (Hero, product catalog, about teaser, stores, etc.)
- `src/components/ui/` — Button, Card, Badge, PhotoCredit building blocks

## Known placeholders to replace before launch

- Product catalog (`content.js` → `products`) — names/weights are placeholders pending the real catalog.
- Contact details and store addresses (`site.config.js`, `content.js` → `stores`) — placeholder phone/email/addresses.
- Product, hero, and store photos — credited Unsplash placeholders; swap for real photography in
  `placeholderImages.js` (hero/products/stores) or `src/assets/images/mandra/` (about/process photos, already real).
- Favicon/logo — currently a plain "M" circle mark; swap in a real logo if one is designed.

## Deployment

Deploys to Vercel; `vercel.json` includes the SPA rewrite needed for client-side routing.
