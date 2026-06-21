function About() {
  return (
    <section className="page about-page">
      <div className="about-intro">
        <p className="eyebrow">About RouteHub</p>
        <h1>Why client-side routing matters</h1>
        <p className="lead">
          RouteHub showcases a polished React SPA where URL-driven navigation,
          protected routes, and session-aware components work together smoothly.
        </p>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>Fast navigation</h2>
          <p>
            Client-side routing eliminates repeated page reloads and keeps the
            experience fluid. Each route change is handled inside the browser,
            so page transitions feel immediate.
          </p>
        </article>

        <article className="about-card">
          <h2>Structured routes</h2>
          <p>
            The app uses nested routes, protected route guards, and a shared
            layout to keep the UI organized and easy to extend.
          </p>
        </article>

        <article className="about-card">
          <h2>Session-aware features</h2>
          <p>
            Authentication state persists across reloads, and users can choose to
            keep their session active using browser storage.
          </p>
        </article>
      </div>

      <div className="about-details">
        <section>
          <h3>Architecture</h3>
          <p>
            RouteHub keeps routeable pages in a dedicated folder and uses a
            single top-level router in App.jsx. Shared components such as the
            navigation layout and auth context are reused across pages.
          </p>
        </section>

        <section>
          <h3>Features</h3>
          <p>
            The app includes dynamic route parameters, nested dashboard tabs, a
            login page with redirect handling, and a 404 fallback route for
            unknown paths.
          </p>
        </section>

        <section>
          <h3>Design goals</h3>
          <p>
            The focus is on clear route structure, visible page sections, and
            smooth hover and transition effects that feel modern and responsive.
          </p>
        </section>
      </div>
    </section>
  )
}

export default About
