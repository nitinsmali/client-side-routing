import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

function Layout() {
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="brand-wrap">
          <NavLink to="/" className="brand">
            RouteHub
          </NavLink>
          {isAuthenticated && (
            <span className="user-badge">{user?.email}</span>
          )}
        </div>

        <nav className="primary-nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>

        <div className="nav-actions">
          {isAuthenticated ? (
            <button className="auth-button" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="auth-button">
              Login
            </NavLink>
          )}
        </div>
      </header>

      <main className="content-area">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
