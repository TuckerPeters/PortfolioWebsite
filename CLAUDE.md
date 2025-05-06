# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- **Start the development server:**
  ```bash
  npm run dev
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

- **Preview the production build:**
  ```bash
  npm run preview
  ```

- **TypeScript checking:**
  ```bash
  npm run check
  ```

## Architecture

This is a Svelte-based website with TypeScript, built using Vite. The project follows a component-based architecture with routing handled by svelte-routing.

### Key Components

- **App Structure:**
  - `main.ts`: Entry point that initializes the Svelte application
  - `App.svelte`: Root component that sets up routing and global layout
  - `index.html`: Basic HTML shell with the app mount point

- **Routing:**
  - Uses svelte-routing for client-side navigation
  - Routes are defined in `App.svelte` and point to components in the `routes/` directory
  - Main routes: Home, About, Features, Contact

- **Layout Components:**
  - `Header.svelte`: Navigation and header actions
  - `Footer.svelte`: Page footer
  - `Sidebar.svelte`: Collapsible sidebar with secondary navigation
  - `Toast.svelte`: Notification component
  - `ThemeToggle.svelte`: Toggle for switching between light and dark mode

- **Styling:**
  - Uses SCSS for styling (via svelte-preprocess)
  - Global CSS variables handle theming
  - Dark/light mode toggle functionality
  - Responsive design with mobile-first approach

- **Build System:**
  - Vite for fast development and optimized production builds
  - TypeScript for type safety
  - SCSS preprocessing for styling

### State Management

- State is primarily managed through Svelte's built-in reactive declarations and stores
- Theme state (dark/light mode) and sidebar state (open/closed) are managed at the App level

## File Organization

- `src/`: Main source code
  - `components/`: Reusable UI components
  - `routes/`: Page components for different routes
  - `app.css`: Global styles
- `public/`: Static assets
- `photos/`: Image assets