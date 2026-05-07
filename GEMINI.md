# Project: Mindful Habit Tracker

## Project Overview
Mindful is a habit-tracking application designed with a "steady path" and "quiet climb" aesthetic. It prioritizes consistent progress and peace over productivity-driven racing, using mountain climbing metaphors (e.g., "Summit Visuals", "Evening Review", "Terms of Ascent").

### Core Technologies
- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Authentication:** 
    - Google OAuth (via `@react-oauth/google`)
    - Telegram Login
- **API Client:** Axios
- **Styling:** Vanilla CSS (component-scoped CSS files)
- **Deployment:** Vercel (configured via `vercel.json`)

## Directory Structure
- `src/`: Main source code.
    - `assets/`: SVGs, PNGs, and other static media.
    - `components/`: Reusable UI components (Header, Footer, Sidebar, Auth forms).
    - `pages/`: Top-level page components (Home, Dashboard, TelegramAuth).
    - `App.jsx`: Main application routing and structure.
    - `main.jsx`: Entry point, providers (Auth, Router) setup.
- `public/`: Static assets served directly (favicon, icons).

## Building and Running
The project uses `npm` for package management and `vite` for the development environment.

- **Development Server:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

## Development Conventions
- **Component Pattern:** Functional components are preferred.
- **Styling:** Each component or page typically has a corresponding `.css` file in the same directory, imported directly (e.g., `import './Home.css'`).
- **Assets:** Icons and images are stored in `src/assets` and imported into components.
- **Authentication:** Managed via `GoogleOAuthProvider` in `main.jsx`. Route-level auth handling is likely in `App.jsx` or specialized auth pages.

## Key Files
- `index.html`: Main HTML template.
- `vite.config.js`: Vite configuration, including CORS headers for auth popups.
- `src/App.jsx`: Defines the routes (`/`, `/login`, `/auth/telegram`, `/dashboard`).
- `vercel.json`: Configuration for Vercel deployment, including routing rewrites.
