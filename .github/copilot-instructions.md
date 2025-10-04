# IM.Barber Next.js – Agent Guide

## Quick facts
- Barber training landing page for IM Academy, built with Next.js and deployed to GitHub Pages.
- Next.js 15 pages router with static export (`next.config.mjs` sets `output: "export"`); treat it as a single-page marketing site rendered from `src/pages/index.js`.
- Global state lives entirely in React components—there is no server/API layer, so every integration happens client-side.
- Path alias `@/*` resolves to `src/*` (see `jsconfig.json`).

## Page assembly
- `src/pages/index.js` stitches together the landing page: `Header`, `Introduction`, `Lessons`, `Contact`, optional `FourthSection`, and `Footer`.
- `Header` relies on `Navbar` for the sticky top bar and loads hero media from `public/assets`.
- `Introduction`, `Lessons`, and `FourthSection` mix long-form RTL copy with responsive media blocks; keep new sections consistent with those patterns.

## Styling system
- Authoritative styles live in `App.scss`; the compiled artifact `App.min.css` is imported globally from `_app.js`.
- After editing SCSS, run `npx sass App.scss App.min.css --style=compressed` (or `--watch` while iterating) so Next.js picks up changes.
- `DESIGN_IMPROVEMENTS.md` documents the high-contrast blue/black theme—reuse the defined tokens (electric blue gradients, glow effects, bold Rubik typography).
- Components often add inline overrides for spacing; prefer extending the SCSS to keep look-and-feel centralized when possible.

## Responsive behavior
- `useWindowSize` (in `src/hooks`) is the canonical way to branch on viewport width; common breakpoints: `<550px` for mobile buttons and `<768px` for map/gallery tweaks.
- `Navbar`, `ScrollZoomImage`, `Contact`, and `Slideshow` all depend on browser APIs (`window`, `IntersectionObserver`). Wrap new browser-only logic in `useEffect`/client guards to avoid hydration mismatches.

## Integrations & data
- Email capture uses EmailJS: `Form.jsx` calls `emailjs.sendForm` with service `service_c0mdbl5`, template `template_w3ffrb8`, and the `publickey` from `src/constants/index.js`. Replace secrets via env vars before committing if you rotate credentials.
- `Contact.jsx` embeds Google Static Maps with multiple width-specific URLs. Update all four URLs together when changing the location or API key.
- Media assets live in `public/assets/**`; reference them with `/assets/...` so they survive export.

## Build, lint, deploy
- `npm run dev` launches the Turbopack dev server with hot reload.
- `npm run build` creates the optimized bundle **and** an `out/` folder because of `output: "export"`; inspect that folder before publishing.
- `npm run deploy` runs the build then publishes `out/` to GitHub Pages via the bundled `gh-pages` CLI.
- `npm run lint` wraps `next lint`; there are no Jest/unit tests in this repo today.

## Working tips
- Keep RTL layout in mind—containers default to `direction: rtl` from `.App`; double-check alignment when adding English copy.
- Each section leans on large videos/webp files; compress new media and include `poster` frames for mp4s as in `Introduction.js`.
- When importing third-party UI, favor Material UI (already used in `CourseHeader` and `Form`) for visual parity.
- Document any new design choices alongside the existing notes in `DESIGN_IMPROVEMENTS.md`.
