# Pietro Kucharski — Portfolio

Personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Next.js 16** — App Router, static export (`output: 'export'`)
- **TypeScript** — strict mode
- **Tailwind CSS v4** — custom design tokens via `@theme`
- **Google Fonts** — Syne · Space Grotesk · JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Outputs a fully static site to `out/`, ready to deploy on Vercel or any static host.

## Project Structure

```
app/               — layout, page, global styles, metadata
components/
  layout/          — TopBar, SideNav, ProgressBar, Footer
  sections/        — Hero, About, Skills, Experience, Education, Contact
  ui/              — Reveal, Typewriter, ParticleField, CustomCursor, SectionHeader
  icons/           — SVG icon components
data/              — portfolio content and TypeScript interfaces
hooks/             — useInView
```
