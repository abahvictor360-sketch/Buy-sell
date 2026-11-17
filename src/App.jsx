import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useStore } from './store.jsx'
import Nav from './components/Nav.jsx'
import Welcome from './pages/Welcome.jsx'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Detail from './pages/Detail.jsx'
import Saved from './pages/Saved.jsx'
import Sell from './pages/Sell.jsx'
import Profile from './pages/Profile.jsx'

const Guard = ({ children }) => {
  const { user } = useStore()
  const loc = useLocation()
  return user ? children : <Navigate to="/login" state={{ from: loc.pathname }} replace />
}
const Page = ({ children }) => (
  <motion.main
    className="page"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.main>
)
export default function App() {
  const loc = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  const bare = ['/', '/login', '/signup'].includes(loc.pathname)
  return (
    <>
      <div className="bg"><i /><i /><i /></div>
      {!bare && <Nav />}
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path="/" element={<Page><Welcome /></Page>} />
          <Route path="/login" element={<Page><Auth mode="login" /></Page>} />
          <Route path="/signup" element={<Page><Auth mode="signup" /></Page>} />
          <Route path="/home" element={<Guard><Page><Home /></Page></Guard>} />
          <Route path="/explore" element={<Guard><Page><Explore /></Page></Guard>} />
          <Route path="/property/:id" element={<Guard><Page><Detail /></Page></Guard>} />
          <Route path="/saved" element={<Guard><Page><Saved /></Page></Guard>} />
          <Route path="/sell" element={<Guard><Page><Sell /></Page></Guard>} />
          <Route path="/profile" element={<Guard><Page><Profile /></Page></Guard>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
