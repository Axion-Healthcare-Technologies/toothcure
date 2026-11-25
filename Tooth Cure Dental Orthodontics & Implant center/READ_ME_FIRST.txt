Tooth Cure Dental Orthodontics & Implant center - website source (Astro)

1. Install Node.js 20 or newer
2. Open a terminal in this folder (the one with package.json) and run: npm install
3. Edit src/data/site.ts  (replace everything marked TODO: phone, WhatsApp number, address, domain)
4. Preview: npm run dev  (http://localhost:4321)
5. Build: npm run build  (creates the "dist" folder)

DEPLOYING FROM GIT (Cloudflare or Vercel)
Push the CONTENTS of this folder to the repository root, so package.json is at the top level.
(Do not push a parent folder that contains this folder - that is what broke the Axion deploy.)
  Cloudflare: Build command "npm run build", Deploy command "npx wrangler deploy"
  Vercel:     auto-detects Astro, nothing to configure

Also set your real domain in astro.config.mjs ("site") and in src/data/site.ts ("url").
