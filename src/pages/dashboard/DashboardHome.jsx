function DashboardHome() {
  return (
    <section className="page dashboard-home">
      <h2>Dashboard overview</h2>
      <p>
        Your dashboard gives you a snapshot of app activity, user status, and
        quick actions for your account.
      </p>
      <div className="dashboard-grid">
        <article>
          <h3>Active sessions</h3>
          <p>Secure session state is preserved across reloads and login choices.</p>
        </article>
        <article>
          <h3>Navigation health</h3>
          <p>All route links and tabs stay synced with the current URL.</p>
        </article>
        <article>
          <h3>Recent activity</h3>
          <p>Designed for fast route transitions and improved SPA experience.</p>
        </article>
      </div>
    </section>
  )
}

export default DashboardHome
