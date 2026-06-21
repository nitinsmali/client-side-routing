function Services() {
  return (
    <section className="page services-page">
      <div className="service-intro">
        <p className="eyebrow">What we build</p>
        <h1>Services for polished route experiences</h1>
        <p className="lead">
          RouteHub demonstrates a set of routing features that make React apps
          easier to navigate, faster to use, and more secure for users.
        </p>
      </div>

      <div className="service-grid">
        <article className="service-card">
          <h2>SPA navigation</h2>
          <p>
            Fast client-side routing keeps the app responsive and preserves browser
            history behavior without full page reloads.
          </p>
        </article>

        <article className="service-card">
          <h2>Persistent sessions</h2>
          <p>
            Sessions are stored in browser storage so users can stay signed in when
            they choose, while maintaining user-specific route access.
          </p>
        </article>

        <article className="service-card">
          <h2>Protected content</h2>
          <p>
            Dashboard tabs and account pages are guarded by auth logic so private
            routes require login before rendering.
          </p>
        </article>

        <article className="service-card">
          <h2>UI polish</h2>
          <p>
            Smooth hover states, subtle motion, and responsive card layout make
            navigation feel modern and comfortable.
          </p>
        </article>
      </div>

      <div className="service-features">
        <section>
          <h3>Modern route patterns</h3>
          <p>
            The app uses nested routes, dynamic parameters, and a shared layout to
            deliver a consistent page structure.
          </p>
        </section>

        <section>
          <h3>State-aware UI</h3>
          <p>
            Auth state is exposed throughout the app so the navigation bar and
            dashboard can update immediately after login/logout.
          </p>
        </section>

        <section>
          <h3>Responsive design</h3>
          <p>
            Every page adapts across devices, and card sections rearrange cleanly
            on smaller screens.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Services
