# lemma-landing

Marketing site for [heylemma.com](https://heylemma.com), migrating off Framer to a self-hosted Next.js project.

## Stack

- **Next.js 16.2** (App Router, Turbopack, static export-friendly)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (using `@theme inline` tokens — no `tailwind.config.js`)
- **Fonts**: Geist + Inter via `next/font/google`
- No CSS-in-JS, no component library, no state management lib — intentionally minimal.

> Heads up: Next 16 introduced breaking changes vs 15 (async `params` / `cookies`, `middleware` → `proxy`, image config defaults). See `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md` before touching server APIs. The current code is a static site with no dynamic params, so none of those apply yet.

## Local development

```bash
npm install
npm run dev
```

The dev server picks the first free port (3000 by default, falls back to 3001+). Open the URL printed in the terminal.

Other scripts:

```bash
npm run build    # production build (catches type errors)
npm run start    # serve the production build locally
```

## Routes

| Path | Purpose | State |
|---|---|---|
| `/` | Home | ✅ Complete |
| `/consultants` | Solutions / Consultants | ✅ Complete |
| `/marketing` | Solutions / Marketing | ✅ Complete |
| `/sales` | Solutions / Sales | ✅ Complete |
| `/pricing` | Pricing + FAQ | ⚠️ FAQ answers were drafted by Claude, need product validation. No prices displayed (intentional — Framer site doesn't show them either). |
| `/contact` | Contact form | ⚠️ Form UI is complete but **not wired to a backend**. See "TODOs" below. |
| `/blog` | Blog | ⏳ Stub. Needs design + content. |

URLs match the Framer site exactly so SEO / external links survive the migration.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Shared <Nav /> + <Footer /> wrap every page
│   ├── globals.css         # Tailwind v4 + design tokens (colors, fonts)
│   ├── icon.png            # Favicon (App Router convention)
│   ├── page.tsx            # Home
│   ├── consultants/page.tsx
│   ├── marketing/page.tsx
│   ├── sales/page.tsx
│   ├── pricing/page.tsx
│   ├── contact/page.tsx
│   └── blog/page.tsx       # stub
└── components/
    ├── Nav.tsx             # Sticky-absolute header, client (dropdown state)
    ├── Footer.tsx
    ├── Hero.tsx            # Home hero
    ├── ProblemStatement.tsx
    ├── Solution.tsx        # Home: 3-step + 3 image cards
    ├── Stats.tsx           # Home: 100+ / 10x / Minutes
    ├── UseCases.tsx        # Home: horizontal scroll-snap carousel
    ├── SolutionPage.tsx    # Template used by /consultants, /marketing, /sales
    ├── BillingToggle.tsx   # Pricing: Monthly/Annually toggle (client)
    ├── PricingPlans.tsx    # Pricing: 3 plan cards
    ├── FAQ.tsx             # Native <details> accordion
    ├── ContactForm.tsx     # Contact form (client, not wired yet)
    └── PageStub.tsx        # Placeholder for /blog
public/
└── assets/                 # All images + the demo video
```

### Design tokens

Defined in `src/app/globals.css` under `@theme inline`:

| Token | Value | Where it's used |
|---|---|---|
| `--color-accent` | `#3d50ff` | Primary CTAs (Sign up, Submit) |
| `--color-ink` | `#0a0a0a` | Body text, headings |
| `--color-muted` | `#4f4f4f` | Sub-headings, descriptions |
| `--color-subtle` | `#868686` | Placeholders, captions |
| `--color-border` | `#e7e7e7` | Dividers, card borders |
| `--font-sans` (`--font-geist`) | Geist | Default body font |
| `--font-display` (`--font-inter`) | Inter | Reserved for display use |

Use them in markup with Tailwind utilities: `text-ink`, `bg-accent`, `border-border`, etc.

### Adding a new page

1. Create `src/app/<slug>/page.tsx`. Export a default React component. Optionally export `metadata`.
2. The shared `<Nav />` and `<Footer />` are added automatically by `src/app/layout.tsx`. Your page should render a `<main>` with `pt-24 md:pt-28` to clear the absolutely-positioned header.
3. If the page is a new "solution" variant, reuse `<SolutionPage>` and pass props (see `marketing/page.tsx` for the cleanest example).

### Working with assets

- Drop files into `public/assets/`. Reference them as `/assets/your-file.png`.
- For PNG/JPG, use `next/image`. Provide intrinsic `width` + `height` or use `fill` with a parent that has explicit dimensions.
- The demo video is a 19 MB MP4 served as a static file. If the site grows, move it to Cloudflare R2 / Mux / Vercel Blob.

## TODOs for hand-off

These are intentional gaps left after the initial migration. Each is small.

1. **Wire the contact form.** Currently `src/components/ContactForm.tsx#handleSubmit` is a no-op that fakes success. Pick one of:
   - **Resend + server action** (cleanest, single dependency, our own infra). Add a Next server action that calls `resend.emails.send(...)`. Needs `RESEND_API_KEY` env.
   - **Formspree** (zero-code, free tier). Replace the `onSubmit` with a `fetch('https://formspree.io/f/<id>', { method: 'POST', body: new FormData(form) })`.
   - **Tally embed** (zero-code, replaces the form entirely with an iframe).
2. **Validate FAQ answers** on `/pricing`. Claude drafted plausible answers from the questions alone — product needs to confirm or rewrite.
3. **Wire prices** on `/pricing`. The current cards have no $ amounts (matches Framer). When pricing is decided, add a `price` field to each plan in `PricingPlans.tsx` and a `useState` in `BillingToggle` consumed via context or lifted state.
4. **Hero backgrounds (cosmetic).** The pink/purple-blur and green-blur backgrounds on `/consultants`, `/marketing`, `/sales` hero cards are CSS gradients approximating Framer's stock background images. To match pixel-perfect, export the real backgrounds from Framer (or pick stock images) and replace `bg-[radial-gradient(...)]` with `<Image fill />` in `components/SolutionPage.tsx`.
5. **Blog.** No design yet. Likely needs an MDX setup (`@next/mdx` or `contentlayer`) once content strategy is decided.
6. **Mobile nav.** The header hides links below `md:` (768px). Need a hamburger drawer.
7. **404 page.** Add `src/app/not-found.tsx` with the same Nav/Footer wrapper.
8. **Analytics.** Vercel Analytics (`@vercel/analytics`) or Plausible — add to `layout.tsx`.
9. **Sitemap + robots.txt.** Add `src/app/sitemap.ts` and `src/app/robots.ts` (Next.js conventions) listing the 7 routes.

## Deployment (Vercel)

1. Push to GitHub.
2. In Vercel: New Project → import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed yet.
4. After first deploy, point `heylemma.com` DNS to Vercel. **Coordinate the DNS cutover** so Framer doesn't keep serving old content.

## Why this exists

Framer's runtime is closed-source: the published site is a thin HTML shell rendered by a proprietary React bundle, with no code-export path. To own the marketing site (and ship copy/design changes without a Framer subscription), we rebuilt it in vanilla Next.js + Tailwind. The visual result targets the live Framer site at the time of migration — section by section.
