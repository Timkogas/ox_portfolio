# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for a product designer, built with React 19, TypeScript, Vite, React Router, and Tailwind CSS v4. The site is deployed to Vercel. Content is in Russian (Russian text for names, descriptions, navigation).

## Development Commands

```bash
# Start development server with hot reload
bun dev

# Build for production (runs TypeScript compiler then Vite build)
bun run build

# Run ESLint
bun run lint

# Preview production build locally
bun run preview
```

## Architecture

### Routing & Pages

The application uses React Router v7 with a page-based structure:
- Each page lives in `src/pages/<page-name>/<page-name>-page.tsx`
- Routes are defined in `src/App.tsx` using React Router's `<Routes>` and `<Route>`
- Current pages: home (`/`), stemps (`/stemps/*`), kaspersky (`/kaspersky/*`), bureau-dushi (`/bureau-dushi/*`)
- Pages use wildcard routes (`/*`) for potential nested routing

### Data Management

Pages follow a data-component split pattern:
- Static page content lives in separate data files: `<page-name>-data.ts`
- Example: `src/pages/home/home-data.ts` exports structured data consumed by `home-page.tsx`
- This keeps content separate from component logic and makes internationalization easier

### Styling

- Uses Tailwind CSS v4 with `@tailwindcss/vite` plugin
- Custom design tokens defined in `src/index.css` using CSS variables (oklch color space)
- Includes shadcn/ui configuration (`components.json`) with "new-york" style
- Color theme uses neutral baseColor with CSS variable-based theming
- Dark mode supported via `.dark` class
- Responsive breakpoints use Tailwind's standard `max-md:` prefix for mobile styles

### Path Aliases

TypeScript and Vite are configured with `@/` alias pointing to `src/`:
- Use `@/components`, `@/lib`, `@/pages`, etc. for imports
- Configured in both `tsconfig.json` and `vite.config.ts`
- shadcn/ui components will be in `@/components/ui` when added

### Utilities

- `src/lib/utils.ts` contains the `cn()` helper for conditional className merging using `clsx` and `tailwind-merge`
- This is the standard shadcn/ui utility pattern

### Deployment

- Deploys to Vercel
- Config in `vercel.json` with SPA rewrites for React Router
- Build output directory: `dist`
