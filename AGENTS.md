# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

Website for **"Who Got Next? Future Engineers – Powered by STEM"**, a mentorship and scholarship program based in New Orleans and Jefferson Parish, Louisiana. The program is directed by Demond Morton and targets high school seniors pursuing engineering degrees at Louisiana colleges/universities.

All website content must be sourced from the `STEM PROGRAM HANDBOOK.pdf` in the project root. The logo is in `Screenshot 2026-03-13 at 3.24.50 PM.png`.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint across all .js/.jsx files

## Architecture

React 19 SPA using Vite 8, with client-side routing via `react-router-dom` (BrowserRouter).

**Routing**: All routes defined in `src/App.jsx`. Each page is a component in `src/pages/`. Page transitions use `framer-motion`'s `AnimatePresence` with `mode="wait"`.

**Layout**: `App.jsx` renders a shared `Navbar` + `Footer` wrapping all routes. `ScrollToTop` resets scroll position on navigation.

**Shared components** (`src/components/`):
- `AnimatedSection.jsx` — Scroll-triggered reveal animations (uses `react-intersection-observer`)
- `PageTransition.jsx` — Framer Motion page wrapper for route transitions
- `Navbar.jsx` / `Footer.jsx` — Site-wide layout with their own CSS files

**Styling**: Each page/component has a co-located CSS file (e.g., `Home.jsx` + `Home.css`). Global design tokens (colors, typography, spacing) are CSS custom properties in `src/index.css`. Fonts: Inter (body) and Playfair Display (headings) loaded from Google Fonts in `index.html`.

**Key dependencies**: `framer-motion` (animations), `react-icons` (icon library), `react-intersection-observer` (scroll triggers)

## Pages

- **Home** (`/`) — Hero/landing with program branding and calls to action
- **Welcome** (`/welcome`) — Program Director's welcome message (Demond Morton bio and letter)
- **STEM Program** (`/stem-program`) — Engineering & technology focus areas (Civil, Mechanical, Electrical, Environmental, AI)
- **Summer Cohort Program** (`/summer-cohort`) — 6-week Summer Engineering Cohort details, components, and eligibility requirements
- **Scholarship** (`/scholarship`) — Scholarship support information
- **Contact** (`/contact`) — Contact form / information for students and parents

## Design Requirements

- **Color scheme**: Black, white, gold, gray as primary palette — supplemented with STEM-inspired accent colors to keep it student-friendly
- **Typography**: Consistent font sizing, heading hierarchy, and text color across all pages
- **Animations**: Smooth transitions and animations; clean, professional, modern UI
- **Responsive**: Must work across mobile, tablet, and desktop
- **SEO**: Optimize content from the handbook for search engines

## Key Program Details (from Handbook)

- **Audience**: High school seniors in Jefferson Parish or Orleans Parish planning to major in engineering at a Louisiana college/university
- **5-Stage Pipeline**: Early Exposure → Mentorship & Preparation → Summer Engineering Cohort → Scholarship Support → Future Engineering Leadership
- **Summer Cohort includes**: Paid internships, 1-on-1 mentorship with professional engineers, weekly guest speakers, engineering college visits across Louisiana, professional development and leadership workshops
- **Mission**: Mentor, inspire, and empower the next generation of engineers
- **Vision**: Build a sustainable pipeline of future engineers who will shape Louisiana and beyond
