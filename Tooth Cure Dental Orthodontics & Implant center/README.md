# Tooth Cure Dental Orthodontics & Implant center

Astro + TypeScript + Tailwind CSS v4, with Motion (small React island), Lenis smooth scroll and Astro View Transitions.
Output is fully static (`dist/`), served by Cloudflare Workers static assets (or Vercel).

## Run locally (Node.js 20+)

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # creates ./dist

## Edit content
Everything editable is in ONE file: `src/data/site.ts`
(brand, phone, WhatsApp number, hours, treatments, doctor section, FAQ, SEO, footer).
Items marked `TODO` there are placeholders to replace before launch.
Colors and fonts: `src/styles/global.css` (`@theme` block).
Images: `public/assets/img` (AVIF + WebP at 640 / 960 / 1400 or 1200 px). Social share image: `public/images/og-share.jpg`.
When you get your domain, set it in BOTH `src/data/site.ts` (`url`) and `astro.config.mjs` (`site`).

## Deploy

**Cloudflare (Workers & Pages, connected to Git)**
- Root directory: the folder that contains `package.json` (the project root)
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- The Cloudflare project name must match `name` in `wrangler.jsonc` (`tooth-cure-dental`), or change one to match the other.

**Cloudflare (CLI)**: `npx wrangler login` once, then `npm run deploy`

**Vercel**: import the repo. It detects Astro and runs `npm run build` automatically (`vercel.json` is included).
Set Root Directory to the folder that contains `package.json` if the repo has extra parent folders.
