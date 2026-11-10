# AGENTS.md — zakaria-portfolio

## Project

Personal portfolio for Zakaria Chelouati — Full-Stack Developer, Génie Logiciel @ High-Tech Rabat. Next.js 16 (App Router, Turbopack), React 19, TypeScript strict, Tailwind CSS 3.4, framer-motion. Deployed on Vercel.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build. Must pass before any commit.
- `npm run lint` — ESLint 9 (flat config in eslint.config.js). If it fails with "next lint" or "no config found", the lint setup is broken — fix the setup, do not skip linting.
- `npx tsc --noEmit` — typecheck.

## Structure

- `src/app/` — App Router: layout.tsx, page.tsx, projects/[slug]/page.tsx
- `src/sections/` — page sections: Hero, Expertise, Services, TechStack, Projects, Testimonials, FAQs, Footer, Header
- `src/components/` — shared: Button, Cursor, ThemeToggle, etc.
- `src/data/` — projects.ts (project data)
- `src/hooks/` — custom hooks
- `src/assets/images/` — images
- `public/` — static assets (resume.pdf lives here)

## Conventions

- TypeScript strict. NO `any`. NO `@ts-ignore` / `@ts-expect-error`. Define proper types.
- Tailwind for styling. No inline styles except dynamic values.
- Visual identity (do NOT change): stone neutrals, purple accent #bc96ec, Archivo + Syne fonts.
- Run `npm run build` after every change. Build must pass before moving on.

## Do NOT

- Do NOT change design, colors, fonts, or layout.
- Do NOT add features, sections, or pages.
- Do NOT change copy/content (testimonials, project descriptions).
- Do NOT nest interactive elements (<button> inside <a>).
- Do NOT use `suppressHydrationWarning` to hide mismatches. Fix the root cause.
- Do NOT commit if the build fails.

## How to work

- One fix at a time. Verify the build after each.
- If a fix needs a design decision, stop and ask.
- Work section by section; do not do everything at once.
