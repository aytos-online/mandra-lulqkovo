# Aytos Site Starter — New Client Setup

This template provides a complete, branded client website foundation. New projects should require only configuration and content edits, not code changes.

## Quick Start

1. **Clone or use this as a template**
   ```bash
   npm install
   npm run dev
   ```

2. **Configure your business info**
   - Edit `src/config/site.config.js` with business name, phone, email, social links, and services
   - Configure EmailJS credentials if you want contact forms

3. **Add your content**
   - Edit `src/config/content.js` with hero copy, testimonials, and CTA text
   - Replace images in `src/assets/images/` with client photos
   - Update `src/assets/logo/` with client branding

4. **Deploy to Vercel**
   - Connect your GitHub repo to Vercel
   - Analytics auto-enables on deployment

## File Structure

```
src/
├── config/
│   ├── site.config.js        ← EDIT THIS: business info, services, EmailJS
│   └── content.js             ← EDIT THIS: copy text, testimonials
├── components/
│   ├── layout/               (Header, Footer, Nav — driven by site.config)
│   ├── sections/             (Hero, Services, Gallery, etc.)
│   └── ui/                   (Button, Card, Badge — building blocks)
├── lib/
│   ├── emailjs.js            (contact form, owner notification + auto-reply)
│   ├── analytics.js          (Vercel Analytics — zero config)
│   └── supabase.js           (optional: client image self-service)
├── admin/                    (optional: magic-link auth + image upload)
├── assets/
│   ├── images/               ← PUT CLIENT PHOTOS HERE
│   └── logo/                 ← PUT CLIENT LOGO HERE
└── styles/
    └── theme.css             (Tailwind setup, brand colors)
```

## Customization

### Business Info
All dynamic content flows from `site.config.js`:
- Business name, phone, email, address
- Social links
- Services list with descriptions
- EmailJS credentials (optional)
- Brand color overrides (optional)

### Content
All text lives in `content.js`, separate from components:
- Hero headline/subheading/CTA
- Testimonial quotes and authors
- CTA section copy

### Brand Colors
Brand colors are baked into `tailwind.config.js`:
- `ink`: `#14213D` (primary background)
- `gold`: `#D9A441` (primary accent, CTAs)
- `rust`: `#B4540A` (secondary accent, hover)
- `cream`: `#F5EFE6` (light text on dark)

Override with `site.config.js` `colors.accent` if a client needs a different look.

### EmailJS Setup (Contact Forms)
1. Create a free account at [emailjs.com](https://emailjs.com)
2. Create two email templates:
   - **Owner notification**: Receives form submission details
   - **Auto-reply**: Sends confirmation email to client
3. Copy Service ID, Template IDs, and Public Key into `site.config.js`
4. Test a submission end-to-end before launch

### Optional: Supabase Self-Service Admin

For clients who purchased the image self-service add-on:

1. Set `siteConfig.supabase.enabled = true` in `site.config.js`
2. Add Supabase credentials (URL, Anon Key)
3. Implement the admin flow in `src/admin/`:
   - Magic-link auth
   - List available image slots
   - Upload and replace images
   - Update `images` table with new URLs

Stubs are in place; see comments for implementation details.

## Deployment

### Vercel
1. Push to GitHub
2. Import repo into Vercel
3. Deploy — analytics auto-activate
4. Use Porkbun DNS → Vercel custom domain

### Environment Variables
Set in Vercel project settings:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_SUPABASE_URL` (if using self-service admin)
- `VITE_SUPABASE_ANON_KEY`

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## Notes

- **Zero hardcoded client strings**: No business name, email, phone in components — all flow through `site.config.js`
- **Dumb components**: All content is props-driven; components never assume client-specific data
- **No unused dependencies**: Supabase is optional; lean launch projects don't carry it
- **Carlito font**: Loaded via `@font-face`, Cyrillic-safe by default
- **Responsive**: Mobile-first Tailwind + mobile menu included
- **Accessibility**: Semantic HTML, ARIA labels, sufficient contrast

## Common Tasks

### Add a new service
Edit `site.config.js` services array and the Services component will auto-update.

### Change brand colors
Edit `tailwind.config.js` theme colors, or use `site.config.js` `colors.accent` for single-project overrides.

### Add testimonials
Edit `content.js` testimonials array; Testimonials component renders them.

### Change contact form fields
Edit `src/components/sections/ContactForm.jsx` form inputs and EmailJS template field mapping.

### Add a new page
Create a new component in `src/pages/`, add a route section, import into `App.jsx`.

## Support

This is a template. Customize freely, but keep the config-driven pattern for maintainability across projects. Future template improvements won't break client repos — they're independent after first "Use This Template" clone.
