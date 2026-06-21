<p align="center">
  <img width="80" src="https://raw.githubusercontent.com/nitinsmali/client-side-routing/main/public/icons.svg" alt="RouteHub logo" />
</p>

<h1 align="center">RouteHub</h1>

<p align="center">
  <strong>React SPA</strong> with client-side routing, protected dashboard access, session persistence, and responsive UI.
</p>

<p align="center">
  <a href="LIVE_URL_HERE" target="_blank">🚀 Live demo</a>
  &nbsp;•&nbsp;
  <a href="#project-setup">Install</a>
  &nbsp;•&nbsp;
  <a href="#architecture">Architecture</a>
</p>

## Overview

RouteHub is a polished React single-page application built with Vite and `react-router-dom`. It demonstrates modern client-side routing, protected dashboard routes, session persistence, responsive cards, and a clean UI design.

## Key features

- SPA navigation with `react-router-dom`
- Nested route layout and shared navigation
- Protected dashboard routes with login redirect
- Session persistence using `localStorage` or `sessionStorage`
- Dynamic product detail routes
- Responsive home page with 8 product cards
- Smooth hover and spacing transitions
- Clean dashboard, activity, profile, and settings pages

## Stack

- **React 19**
- **Vite**
- **React Router DOM 7**
- **ESLint**

## Project setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the app.

## Build and preview

```bash
npm run build
npm run preview
```

## Architecture

RouteHub is built with a clean route-first structure:

- `src/App.jsx` — root routes and shared layout
- `src/components/Layout.jsx` — navbar, auth action, and page wrapper
- `src/components/ProtectedRoute.jsx` — guard for authenticated routes
- `src/context/AuthContext.jsx` — session provider and auth state storage
- `src/context/useAuth.js` — reusable auth hook
- `src/utils/auth.js` — session persistence helpers
- `src/pages/*` — page components for home, about, services, contact, login, and product details
- `src/pages/dashboard/*` — nested dashboard pages for overview, profile, activity, and settings

## Features

- client-side single-page navigation
- dynamic route parameters for product detail pages
- nested protected dashboard routes
- session storage with optional "remember me"
- responsive hero, card grids, and page layout
- smooth hover and motion styling

## Routing overview

- `src/App.jsx` — top-level route definitions and shared layout
- `src/components/Layout.jsx` — navigation bar, auth button, and page wrapper
- `src/components/ProtectedRoute.jsx` — authenticated route guard
- `src/context/AuthContext.jsx` — session provider and auth state
- `src/context/useAuth.js` — shared auth hook
- `src/utils/auth.js` — session persistence helpers
- `src/pages/Home.jsx` — hero section and product card grid
- `src/pages/About.jsx` — route architecture and app goals
- `src/pages/Services.jsx` — app service feature overview
- `src/pages/Contact.jsx` — contact info and feature requests
- `src/pages/Login.jsx` — login form with redirect support
- `src/pages/ProductDetails.jsx` — dynamic route product details
- `src/pages/dashboard/*` — nested dashboard pages

## Routing overview

- `/` — home page with product cards
- `/about` — about page
- `/services` — services overview
- `/contact` — contact page
- `/products/:productId` — product detail page
- `/login` — login page
- `/dashboard` — protected dashboard with nested routes
- `*` — 404 fallback page

## Authentication behavior

- Users can login with any non-empty email and password
- `remember` option persists session in `localStorage`
- otherwise session is stored in `sessionStorage`
- Protected dashboard routes redirect unauthenticated users to `/login`

## Live demo / deployment

Add your deployment URL once available:

- **Live site:** `LIVE_URL_HERE`

## Notes

- The project has been linted and built successfully.
- The app includes a polished home page, dashboard protection, and dynamic product routes.
- I can also add deployment instructions for Vercel, Netlify, or GitHub Pages.
