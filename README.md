# AgentLoadout (MVP)
Static Astro 5 site. Data: `src/data/tools.json` (28 listings, all `score.status: "pending-tests"`).
- `npm install && npm run build` → `dist/`  (Node 20 OK with Astro 5; Astro 6 needs Node ≥22.12)
- `npm run preview` to serve locally.

## Deploy (free)
**Cloudflare Pages:** push this folder to a GitHub repo → Cloudflare dashboard → Pages → Connect to Git → build command `npm run build`, output `dist`, env `NODE_VERSION=20`. Free URL: `<project>.pages.dev`.
**GitHub Pages:** add a workflow using `withastro/action`; if served at `user.github.io/<repo>/`, build with `BASE_PATH=/<repo>`.
