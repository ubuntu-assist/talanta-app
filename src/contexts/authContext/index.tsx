import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from 'react'

interface AuthContextType {
  currentUser: User | null
  userLoggedIn: boolean
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: Readonly<AuthProviderProps>) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])

  const initializeUser = async (user: User | null) => {
    if (user) {
      setCurrentUser(user)
      setUserLoggedIn(true)
    } else {
      setCurrentUser(null)
      setUserLoggedIn(false)
    }
    setLoading(false)
  }

  const value = useMemo(
    () => ({
      currentUser,
      userLoggedIn,
      loading,
    }),
    [currentUser, userLoggedIn, loading]
  )

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
