# AgentLoadout (MVP)
Static Astro 5 site. Data: `src/data/tools.json` (28 listings, all `score.status: "pending-tests"`).
- `npm install && npm run build` → `dist/`  (Astro 5; builds on Node 20 locally and Node 22 in CI)
- `npm run preview` to serve locally.

## Deploy (free)
**Cloudflare Pages:** push this folder to a GitHub repo → Cloudflare dashboard → Pages → Connect to Git → build command `npm run build`, output `dist`, env `NODE_VERSION=20`. Free URL: `<project>.pages.dev`.
**GitHub Pages:** add a workflow using `withastro/action`; `site` and `base` (`/agentloadout`) are set in `astro.config.mjs`; change `base` there if the repo name changes.

## SEO
Sitemap via @astrojs/sitemap (`/agentloadout/sitemap-index.xml`), `public/robots.txt`, `public/og.png`, landing pages at `/engine/<slug>/` and `/stage/<slug>/`.

## Newsletter
`src/components/Newsletter.astro` is an inactive placeholder; see the comment there for the Buttondown embed.
