# TruVis website redesign

The complete TruVis redesign from the latest published ChatGPT Site (version 15), with editable source, bundled JavaScript, styles, fonts, illustrations, and images.

Preview: https://truvis-platform-redesign.aqua-drake-2463.chatgpt.site

## Run locally

Requires Node.js 20 or newer.

```bash
git clone https://github.com/comlabs-technologies/truvis-redesign.git
cd truvis-redesign
npm ci
npm run build
npm start
```

Open http://127.0.0.1:3000. Use `npm run dev -- --port 8080` for another port. The preview server uses Node built-ins and serves the `dist` folder.

## Edit the design

- `dist/index.html`: page content, inline SVG icons, and isometric hero artwork.
- `dist/styles.css` and `dist/truvis-theme.css`: typography, responsive layouts, buttons, and illustration finishes.
- `dist/app.js`: five-stage regulatory journey, hero rotation, menu behavior, and micro-interactions.
- `dist/hero-shader.js`: subtle animated WebGL hero background.
- `src/hero-tabs.jsx`: editable React and Framer Motion shared-layout tab indicator.
- `dist/hero-tabs.js`: committed production bundle; `npm run build` regenerates it from the JSX source.
- `dist/cta-trail.js`: interactive CTA background trail.

Static HTML, CSS, and the plain JavaScript files are edited directly in `dist`; there is no missing framework scaffold. Only the React indicator needs bundling. The committed output can also be served immediately without building.

## Assets

All rendered image and font files are local:

- Two Inter font files and their license.
- Three news illustrations.
- The semantic graph and verified evidence SVG illustrations.
- TruVis wordmark and four compliance badge images under `dist/assets`.
- Inline SVG artwork, icons, and WebGL shader source.

Brand assets and the original content come from https://www.truvis.ai/. Product, contact, case-study, and news links intentionally lead to TruVis's existing pages. Those destinations are outbound links, not asset dependencies. React, Framer Motion, and their dependencies are pinned by `package-lock.json`; the bundled license notices are preserved in `dist/hero-tabs.js.LEGAL.txt`.

## Deploy

Deploy `dist` on any static host. For Vercel, the included `vercel.json` uses `npm ci`, runs the build, and serves `dist`. No environment variables are required. The ChatGPT Site identity and source-repository credentials are excluded from this export.
