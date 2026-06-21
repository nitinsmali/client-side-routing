const STORAGE_KEY = 'routehub-session'

export function loadSession() {
  const stored = localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY)
  if (!stored) return null

  try {
    const session = JSON.parse(stored)
    if (session?.isAuthenticated && session?.user) {
      return session
    }
  } catch (error) {
    console.warn('Failed to parse auth session', error)
  }
  return null
}

export function saveSession(session, remember = false) {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(STORAGE_KEY)
  const target = remember ? localStorage : sessionStorage
  target.setItem(STORAGE_KEY, JSON.stringify(session))
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEY)
  sessionStorage.removeItem(STORAGE_KEY)
}

export function createSession(email, remember = false) {
  return {
    isAuthenticated: true,
    user: {
      name: 'Route Navigator',
      email,
      role: 'member',
      lastLogin: new Date().toISOString(),
    },
    createdAt: Date.now(),
    remember,
  }
}
