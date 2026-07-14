# faiz-portfolio

Next.js 14 (App Router) + Tailwind + Framer Motion. Gruvbox-dark, terminal/systems visual identity.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content

All real content lives in `/data`, not scattered across components:

- `data/projects.ts` — the 4 projects, including status labels and problem/approach/result copy
- `data/experience.ts` — work experience timeline
- `data/skills.ts` — skill groups
- `data/certifications.ts` — certifications

Edit these directly; no need to touch component code for content changes.

## Assets

- `public/resume.pdf` — linked from the hero and contact section
- `public/images/gas-detector-hardware.png` — IoT project photo

To add more project photos/screenshots (e.g. POS app screens, C4N site captures), drop them in `public/images/` and reference the path in the relevant project's `image` field in `data/projects.ts`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Next.js (auto-detected). No env vars needed.
4. Deploy.

## Notes / known trade-offs

- Fonts are self-hosted via `@fontsource` packages rather than `next/font/google`, since this build environment couldn't reach Google Fonts — works identically on Vercel, and arguably more robust (no runtime dependency on Google's CDN).
- Case-study depth is inline expand/collapse per project card (not separate routes), per your call. If you later want dedicated `/projects/[slug]` pages, the data shape already supports it — it's a routing change, not a content rewrite.
- `Kelola Kasir` and the PPOB module are intentionally left out of the POS "working features" list — your own KP report states they weren't functioning at time of writing. Don't add them back in without updating that report too, or the two documents will contradict each other if a recruiter reads both.
