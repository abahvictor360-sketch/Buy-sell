import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../store.jsx'
import Card from '../components/Card.jsx'

export default function Profile() {
  const { user, setUser, saved, mine } = useStore()
  const nav = useNavigate()
  return (
    <div className="wrap narrow">
      <motion.div className="glass box prof" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
        <motion.img src={user.avatar || '/img/avatar.webp'} alt={user.name} initial={{ rotate: -8, scale: 0.7 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', damping: 12 }} />
        <h2>{user.name}</h2><p className="muted">{user.email}</p>
        <div className="stats"><div><b>{saved.length}</b><small>Saved</small></div><div><b>{mine.length}</b><small>Listings</small></div><div><b>4.9</b><small>Rating</small></div></div>
        <button className="btn dark" onClick={() => { setUser(null); nav('/') }}>Log out</button>
      </motion.div>
      <div className="sec"><h2>My listings</h2><Link to="/sell">+ Add new</Link></div>
      {mine.length ? <div className="grid">{mine.map((p, i) => <Card key={p.id} p={p} i={i} />)}</div> : <p className="empty">You haven't listed anything yet.</p>}
    </div>
  )
}
