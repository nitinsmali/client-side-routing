import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

function Login() {
  const { login, isAuthenticated } = useAuth()
  const [email, setEmail] = useState('navigator@routehub.dev')
  const [password, setPassword] = useState('password123')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true })
    }
  }, [from, isAuthenticated, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Email and password are required.')
      return
    }

    const success = login(email, password, remember)
    if (!success) {
      setError('Login failed. Please check your credentials.')
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <section className="page login-page">
      <div className="login-panel">
        <h1>Secure login</h1>
        <p>
          Sign in to access the dashboard and session-aware routing features.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
            />
            Keep me signed in
          </label>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="primary-btn login-submit">
            Login
          </button>
        </form>

        <div className="login-notes">
          <p>Use any non-empty credentials to sign in.</p>
          <p>
            Your session is persisted in localStorage when "Keep me signed in" is
            checked.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login
