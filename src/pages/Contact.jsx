function Contact() {
  return (
    <section className="page contact-page">
      <h1>Contact</h1>
      <p>
        Get in touch to extend this routing demo into a complete SPA with more
        pages, authentication, and data-driven navigation.
      </p>

      <div className="contact-grid">
        <article>
          <h2>Reach our team</h2>
          <p>
            For technical questions, email the RouteHub support team and get a
            detailed response.
          </p>
          <a href="mailto:support@routehub.dev">support@routehub.dev</a>
        </article>

        <article>
          <h2>Request features</h2>
          <p>
            Ask for additional routing concepts like lazy loading, nested dashboards,
            or API-backed route protections.
          </p>
          <a href="mailto:features@routehub.dev">features@routehub.dev</a>
        </article>

        <article>
          <h2>Explore the demo</h2>
          <p>Use the dashboard, activity, and profile tabs to see session-aware UI.</p>
        </article>
      </div>
    </section>
  )
}

export default Contact
