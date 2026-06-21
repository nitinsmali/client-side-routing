# RouteHub - React SPA with Client-Side Routing

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

## Technologies

- React 19
- Vite
- React Router DOM 7
- ESLint

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

## App structure

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

- Live site: `LIVE_URL_HERE`

## Notes

- The project has been linted and built successfully.
- If you want, I can also add a real backend authentication flow or deploy to Vercel/Netlify and set the live URL.
