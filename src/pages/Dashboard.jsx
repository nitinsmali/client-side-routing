import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <section className="page dashboard-shell">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back, <strong>{user?.name}</strong>. Your session is active and
            routes are protected.
          </p>
        </div>
        <button className="secondary-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-layout">
        <aside className="dashboard-nav">
          <NavLink to="" end>
            Overview
          </NavLink>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="activity">Activity</NavLink>
          <NavLink to="settings">Settings</NavLink>
        </aside>

        <article className="dashboard-main">
          <Outlet />
        </article>
      </div>
    </section>
  )
}

export default Dashboard
