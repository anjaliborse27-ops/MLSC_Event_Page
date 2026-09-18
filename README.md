# MLSC PCCOE — Event Journey

Plain HTML/CSS/JS pages for the MLSC PCCOE event roadmap — no build step, no framework.

## Structure

```
index.html            Landing page
events.html           Event roadmap
events/*.html         One page per event
css/style.css         All styles
js/main.js            Typewriter, marquee, sparkles, roadmap scroll animation
assets/images/        Mascots and event photos
server.js             Minimal Express server for local preview only
```

Every page is a self-contained static HTML file. Your team can copy this
folder straight into the main site and serve it however the other pages are
served (nginx, Apache, IIS, Netlify, GitHub Pages, etc.) — no Node.js is
required in production.

## Local preview

```sh
npm install
npm start
```

Then open http://localhost:3000.

## Migration notes (2026-09-18)

This page was originally built in [Lovable](https://lovable.dev) as a
React app (TanStack Start + TanStack Router + Vite + Tailwind CSS +
Radix/shadcn UI). Since the rest of the MLSC site is plain HTML/CSS,
it has been fully rewritten to a static, framework-free site so it
merges in directly:

- **Routes → pages.** The three TanStack routes became real files:
  `src/routes/index.tsx` → `index.html`, `src/routes/events.index.tsx`
  → `events.html`, `src/routes/events.$slug.tsx` → one HTML file per
  event under `events/` (`mlsc-inauguration.html`, `tech-room.html`,
  `praxis.html`, `datathon.html`, `code-sprint.html`,
  `bluebit-hackathon.html`). Event content that used to live in
  `src/data/events.ts` is now written directly into each event's HTML.
- **Tailwind → plain CSS.** `src/styles.css` (Tailwind + custom
  utilities/keyframes) was hand-translated into `css/style.css` with
  regular classes — no Tailwind, no build step, no PostCSS.
- **React components → vanilla JS.** `Typewriter`, `Sparkles`, `Belt`,
  and the roadmap's scroll-driven mascot animation
  (`src/routes/events.index.tsx`) were reimplemented in `js/main.js`
  using plain DOM APIs, driven by `data-*` attributes on the HTML
  elements.
- **shadcn/Radix UI components were dropped.** The old `src/components/ui/*`
  library (accordion, dialog, dropdown, etc.) wasn't used by any of the
  three actual pages — it was unused scaffolding from the Lovable
  template — so none of it was ported.
- **Assets.** Images moved from `src/assets/` to `assets/images/`
  (the `.asset.json` sidecar files were Lovable-only metadata and were
  dropped).
- **Removed entirely:** `src/`, `vite.config.ts`, `tsconfig.json`,
  `components.json`, `eslint.config.js`, `bun.lock`/`bunfig.toml`,
  `.lovable/`, `AGENTS.md`, and the old `public/_redirects*` (SPA
  fallback rules, not needed for a real multi-page site).
- **`server.js`/`package.json`(Express) are new** and only exist for
  local preview (`npm start`) — production does not need Node.js at
  all, just static file hosting.

If you spot any visual difference from the original Lovable version,
check `css/style.css` first — it's a manual translation of the
Tailwind utility classes, not a 1:1 generated equivalent.
