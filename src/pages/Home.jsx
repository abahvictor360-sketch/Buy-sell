import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { properties } from '../data.js'
import { useStore } from '../store.jsx'
import Card from '../components/Card.jsx'
import { Icon } from '../components/Nav.jsx'

const cats = ['All', 'Apartment', 'Home', 'Office']
export default function Home() {
  const { user, mine } = useStore()
  const nav = useNavigate()
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const all = [...mine, ...properties]
  const list = all.filter((p) => cat === 'All' || p.type === cat)
  return (
    <div className="wrap">
      <div className="hello">
        <div><b>Hello, {user.name.split(' ')[0]}</b><small>📍 Lagos, Nigeria</small></div>
        <motion.button className="glass round" whileTap={{ scale: 0.9 }} aria-label="Notifications"><Icon n="bell" /></motion.button>
      </div>
      <motion.h1 className="h1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Explore <b>Modern Living Spaces</b> Near You</motion.h1>
      <form className="search glass" onSubmit={(e) => { e.preventDefault(); nav(`/explore?q=${encodeURIComponent(q)}`) }}>
        <Icon n="search" size={18} /><input placeholder="Search Lagos, Abuja, Lekki…" value={q} onChange={(e) => setQ(e.target.value)} />
      </form>
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className={'chip' + (cat === c ? ' on' : '')} onClick={() => setCat(c)}>
            {cat === c && <motion.span layoutId="chipbg" className="chipbg" />}<span>{c}</span>
          </button>
        ))}
      </div>
      <div className="sec"><h2>Top Property</h2><Link to="/explore">View All</Link></div>
      <div className="grid">{list.slice(0, 6).map((p, i) => <Card key={p.id} p={p} i={i} />)}</div>
      <div className="sec"><h2>Featured Luxury</h2></div>
      <div className="hscroll">{all.filter((p) => p.mode === 'Buy' && p.price > 4e8).map((p, i) => <Card key={p.id} p={p} i={i} big />)}</div>
    </div>
  )
}
