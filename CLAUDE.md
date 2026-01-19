# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (automatically runs `prebuild` first to copy photos)
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript/Svelte type checking

## Architecture

Svelte + TypeScript portfolio website built with Vite, deployed on Netlify.

### Routing

Routes are defined in `App.svelte` using svelte-routing:
- `/` → Home.svelte
- `/projects` → Projects.svelte
- `/experience` → Experience.svelte
- `/contact` → Contact.svelte

Netlify handles SPA routing via `netlify.toml` redirect rules (all paths → index.html).

### Theming

Dark/light mode is implemented via CSS variables on `:global(html)` and `:global(html.dark)` in `App.svelte`. Theme state persists to localStorage and respects system preference on first visit.

### Layout Structure

`App.svelte` orchestrates the layout:
- `Header.svelte` - Navigation bar with sidebar toggle
- `Sidebar.svelte` - Collapsible side navigation (controlled by `isSidebarOpen`)
- Content wrapper adjusts margin when sidebar opens (768px+ breakpoint)
- `Footer.svelte` - Page footer
- `ThemeToggle.svelte` - Floating theme switcher (positioned outside main container)

### Build Process

The `prebuild` script (`copy-photos.js`) copies images from `/photos` to `/public/photos` before each build. This ensures photos are available as static assets in production.

### Path Alias

`@photos` is aliased to the `/photos` directory in `vite.config.ts`.
