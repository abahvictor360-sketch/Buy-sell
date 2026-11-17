import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { properties, src, fmt, unit } from '../data.js'
import { useStore } from '../store.jsx'
import { Icon } from '../components/Nav.jsx'

const tabs = ['Facilities', 'Offers', 'Host', 'Location']
export default function Detail() {
  const { id } = useParams()
  const nav = useNavigate()
  const { saved, toggleSave, mine } = useStore()
  const p = [...mine, ...properties].find((x) => String(x.id) === id)
  const [tab, setTab] = useState('Facilities')
  const [booked, setBooked] = useState(false)
  if (!p) return <div className="wrap"><p className="empty">Property not found.</p></div>
  const others = properties.filter((x) => x.id !== p.id && x.img !== p.img).slice(0, 3)
  const content = {
    Facilities: ['🛏 ' + p.beds + ' Bedrooms', '🛁 ' + p.baths + ' Bathrooms', '📐 ' + p.area.toLocaleString() + ' sq ft', '🚗 Private garage', '🏊 Garden & lighting', '🔒 24/7 security'],
    Offers: ['Free viewing this week', 'Flexible payment plan', p.mode === 'Rent' ? '5% off annual rent' : 'Mortgage advisory included'],
    Host: ['Listed by HuntX Verified Agent', 'Replies within 1 hour', '⭐ ' + p.rating.toFixed(1) + ' host rating'],
    Location: [p.city + ', Nigeria', 'Gated modern neighbourhood', 'Schools · Malls · Transit within 10 min'],
  }[tab]
  return (
    <div className="detail">
      <div className="dhero">
        <motion.img layoutId={'img' + p.id} src={p.custom || src(p.img)} alt={p.title} initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 1.4 }} />
        <div className="wshade" />
        <button className="glass round back" aria-label="Back" onClick={() => nav(-1)}><Icon n="back" /></button>
        <motion.button className={'glass round fav' + (saved.includes(p.id) ? ' on' : '')} whileTap={{ scale: 1.4 }} onClick={() => toggleSave(p.id)} aria-label="Save"><Icon n="heart" /></motion.button>
        <motion.div className="dcopy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <small>📍 {p.city}</small><h1>{p.title}</h1><small>{fmt(p)}{unit(p)} · ★ {p.rating.toFixed(1)} · {p.reviews} reviews</small>
        </motion.div>
      </div>
      <div className="wrap narrow">
        <div className="glass box">
          <h2>{p.type === 'Office' ? 'Premium Office Space' : 'Luxury City ' + (p.type === 'Home' ? 'Home' : 'Apartment')}</h2>
          <div className="thumbs">{[p.img, ...others.map((o) => o.img)].map((n, i) => <motion.img key={n} src={src(n)} alt="" whileHover={{ scale: 1.06 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * i }} />)}</div>
        </div>
        <div className="chips">{tabs.map((t) => (
          <button key={t} className={'chip' + (tab === t ? ' on' : '')} onClick={() => setTab(t)}>{tab === t && <motion.span layoutId="dtab" className="chipbg" />}<span>{t}</span></button>
        ))}</div>
        <AnimatePresence mode="wait">
          <motion.ul key={tab} className="glass box list" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {content.map((c) => <li key={c}>{c}</li>)}
          </motion.ul>
        </AnimatePresence>
      </div>
      <div className="bookbar glass">
        <div><small>{p.mode === 'Rent' ? 'Rent' : 'Price'}</small><b>{fmt(p)}<small>{unit(p)}</small></b></div>
        <motion.button className="btn pink" whileTap={{ scale: 0.95 }} onClick={() => setBooked(true)} disabled={booked}>{booked ? '✓ Request sent' : p.mode === 'Rent' ? 'Book Now' : 'Book a Viewing'}</motion.button>
      </div>
    </div>
  )
}
