import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { src, fmt, unit } from '../data.js'
import { useStore } from '../store.jsx'
import { Icon } from './Nav.jsx'

export default function Card({ p, i = 0, big }) {
  const { saved, toggleSave } = useStore()
  const on = saved.includes(p.id)
  return (
    <motion.div
      className={'card' + (big ? ' big' : '')}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (i % 4) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`/property/${p.id}`}>
        <div className="ph"><img src={p.custom || src(p.img)} alt={`${p.title} – ${p.mode.toLowerCase()} ${p.type.toLowerCase()} in ${p.city}`} loading="lazy" /></div>
        <span className="tag glass">{p.mode}</span>
        <div className="info glass">
          <div className="row">
            <div><small>📍 {p.city}</small><h3>{p.title}</h3></div>
            <div className="price">{fmt(p)}<small>{unit(p)}</small></div>
          </div>
          <small>★ {p.rating.toFixed(1)} · {p.reviews} reviews · {p.beds} bd · {p.baths} ba</small>
        </div>
      </Link>
      <motion.button aria-label="Save" className={'heart glass' + (on ? ' on' : '')} whileTap={{ scale: 1.5 }} onClick={() => toggleSave(p.id)}>
        <Icon n="heart" size={18} />
      </motion.button>
    </motion.div>
  )
}
