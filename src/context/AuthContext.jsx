import { useEffect, useMemo, useState } from 'react'
import { AuthContext } from './AuthContextStore'
import { clearSession, createSession, loadSession, saveSession } from '../utils/auth'

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() =>
    loadSession() || {
      isAuthenticated: false,
      user: null,
    },
  )

  useEffect(() => {
    if (session.isAuthenticated) {
      saveSession(session, session.remember)
    } else {
      clearSession()
    }
  }, [session])

  const login = (email, password, remember = false) => {
    if (!email || !password) {
      return false
    }

    const newSession = createSession(email, remember)
    setSession(newSession)
    return true
  }

  const logout = () => {
    setSession({ isAuthenticated: false, user: null })
    clearSession()
  }

  const value = useMemo(
    () => ({
      ...session,
      login,
      logout,
    }),
    [session],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
