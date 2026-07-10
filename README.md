# GrammarPeak ⛰️

A playful, Duolingo-style web app that climbs you from **B2 to C2 English grammar** — grammar only, no vocabulary drills. Learn cards → practice sets → a boss challenge, wrapped in a mountain-climbing metaphor.

**▶ Live:** https://kiskujab.github.io/fun-fluent/

## What's inside

- **9 modules · 37 lessons · 1,638 exercises**, from the 12 tenses and question tags up to inversion, clefts, ellipsis, the subjunctive and street-smart spoken English.
- **8 interactive exercise types:** multiple choice, gap-fill, sentence building, error hunt, transformation, matching, sorting and timed lightning rounds.
- **Gamification:** XP, combo multipliers, levels, daily streaks, badges, confetti and synthesised sound effects — all progress saved locally (with JSON export/import).
- Syllabus inspired by *English File* 4th edition (Oxford University Press).

## Tech

React 19 · Vite 6 · TypeScript · Tailwind CSS v4. No backend — a single-page app with `localStorage` persistence and code-split lesson content.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy

Every push to `main` builds and publishes to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The production `base` is `/fun-fluent/` (see `vite.config.ts`).
