import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { properties } from '../data.js'
import { useStore } from '../store.jsx'
import Card from '../components/Card.jsx'

const modes = ['All', 'Buy', 'Rent']
const types = ['All', 'Home', 'Apartment', 'Office']
const Seg = ({ v, set, opts, id }) => (
  <div className="seg glass">{opts.map((o) => (
    <button key={o} className={v === o ? 'on' : ''} onClick={() => set(o)}>{v === o && <motion.span layoutId={id} className="chipbg" />}<span>{o}</span></button>
  ))}</div>
)
export default function Explore() {
  const [sp] = useSearchParams()
  const { mine } = useStore()
  const [q, setQ] = useState(sp.get('q') || '')
  const [mode, setMode] = useState('All')
  const [type, setType] = useState('All')
  const [sort, setSort] = useState('top')
  let list = [...mine, ...properties].filter((p) =>
    (mode === 'All' || p.mode === mode) && (type === 'All' || p.type === type) &&
    (`${p.title} ${p.city}`.toLowerCase().includes(q.toLowerCase())))
  if (sort === 'low') list.sort((a, b) => a.price - b.price)
  if (sort === 'high') list.sort((a, b) => b.price - a.price)
  if (sort === 'top') list.sort((a, b) => b.rating - a.rating)
  return (
    <div className="wrap">
      <h1 className="h1">Find your <b>next place</b></h1>
      <div className="filters">
        <input className="glass inp" placeholder="Search city or property…" value={q} onChange={(e) => setQ(e.target.value)} />
        <Seg id="segm" v={mode} set={setMode} opts={modes} />
        <Seg id="segt" v={type} set={setType} opts={types} />
        <select className="glass inp" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="top">Top rated</option><option value="low">Price: low → high</option><option value="high">Price: high → low</option>
        </select>
      </div>
      <p className="muted">{list.length} properties</p>
      <motion.div layout className="grid">
        <AnimatePresence>{list.map((p, i) => <Card key={p.id} p={p} i={i} />)}</AnimatePresence>
      </motion.div>
      {!list.length && <p className="empty">No properties match your filters.</p>}
    </div>
  )
}
