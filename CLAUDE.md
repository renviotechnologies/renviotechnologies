# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
npm test         # Vitest (test suite is minimal)
```

## Architecture

**Stack:** Next.js 16 (App Router) / React 19 / TypeScript / Tailwind CSS v4 / Framer Motion

**Path alias:** `@/*` maps to `./app/*` (e.g., `@/components/Navbar`, `@/lib/utils`)

### App structure (`app/`)

- `(pages)/` — All routes live here. Dynamic routes use `[slug]` or `[id]` params for services, projects, and blogs.
- `components/` — Organized by feature: `services/`, `projects/`, `contact/`, `about/`, `awards/`, `careers/`, `blogs/`, `ui/`, `magicui/`. Shared components (Navbar, Footer, HeroSection) are at the top level.
- `lib/` — Static data files and utilities. `servicesData.tsx`, `projects.ts`, `blogData.ts` contain all content as TypeScript objects (no CMS/database). `utils.ts` exports `cn()` (clsx + tailwind-merge).

### Key patterns

- **No backend:** Content is static TypeScript data. Contact form submits via WhatsApp deep links. Google Reviews fetched client-side.
- **Client components:** Most components use `'use client'` for Framer Motion animations and interactivity.
- **Animations:** Framer Motion for entrance/scroll/hover animations. Custom CSS keyframes in `globals.css` for marquees, floats, and pulses.
- **Fonts:** Montserrat (headings) and Roboto (body), loaded via `next/font/google` in `layout.tsx`.
- **Images:** Next.js `<Image>` with remote patterns configured for marktaleworld.com, unsplash.com, and Instagram CDN.

### Adding content

- **New service:** Add entry to `lib/servicesData.tsx` — the dynamic route `services/[slug]` picks it up automatically.
- **New project:** Add entry to `lib/projects.ts` — displayed via `projects/[id]`.
- **New blog:** Add entry to `lib/blogData.ts` — displayed via `blogs/[slug]`.

## Conventions

- Commit messages: present tense, imperative mood, max 72 chars first line.
- Prefer `const` over `let`; avoid `var`.
- Follow existing ESLint/Prettier rules.
