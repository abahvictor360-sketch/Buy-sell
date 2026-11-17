import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../store.jsx'

const I = {
  home: <path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  heart: <path d="M12 21s-8-5.3-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.7-8 11-8 11z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
  back: <path d="M15 5l-7 7 7 7" />,
  bell: <><path d="M6 16V11a6 6 0 0112 0v5l2 2H4z" /><path d="M10 21h4" /></>,
}
export const Icon = ({ n, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{I[n]}</svg>
)
const links = [['/home', 'Home', 'home'], ['/explore', 'Explore', 'search'], ['/sell', 'Sell', 'plus'], ['/saved', 'Saved', 'heart'], ['/profile', 'Profile', 'user']]
export default function Nav() {
  const { user } = useStore()
  return (
    <>
      <header className="topbar glass">
        <Link to="/home" className="logo">Hunt<b>X</b></Link>
        <nav>{links.map(([to, l]) => <NavLink key={to} to={to}>{l}</NavLink>)}</nav>
        <Link to="/profile" className="avatar"><img src={user?.avatar || '/img/avatar.webp'} alt="Profile" /></Link>
      </header>
      <motion.nav className="tabbar glass" initial={{ y: 90 }} animate={{ y: 0 }} transition={{ type: 'spring', damping: 18 }}>
        {links.map(([to, l, ic]) => (
          <NavLink key={to} to={to} aria-label={l}>
            {({ isActive }) => (<>{isActive && <motion.span layoutId="pill" className="pill" />}<span className="ti"><Icon n={ic} /></span></>)}
          </NavLink>
        ))}
      </motion.nav>
    </>
  )
}
