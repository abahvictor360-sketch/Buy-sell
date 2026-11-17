import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../store.jsx'
import { src } from '../data.js'

export default function Sell() {
  const { addListing } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ title: '', city: '', price: '', mode: 'Buy', type: 'Home', beds: 3, baths: 2, img: 1 })
  const [custom, setCustom] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const upload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const r = new FileReader()
    r.onload = () => setCustom(r.result)
    r.readAsDataURL(file)
  }
  const submit = (e) => {
    e.preventDefault()
    addListing({ ...f, price: Number(f.price), beds: +f.beds, baths: +f.baths, area: 2500, rating: 5, reviews: 0, img: +f.img, custom: custom && custom.length < 1.5e6 ? custom : undefined })
    nav('/explore')
  }
  return (
    <div className="wrap narrow">
      <h1 className="h1">List your <b>property</b></h1>
      <motion.form className="glass box form" onSubmit={submit} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <input required placeholder="Property title" value={f.title} onChange={set('title')} />
        <input required placeholder="City" value={f.city} onChange={set('city')} />
        <input required type="number" min="1" placeholder="Price (USD)" value={f.price} onChange={set('price')} />
        <div className="two"><select value={f.mode} onChange={set('mode')}><option>Buy</option><option>Rent</option></select>
          <select value={f.type} onChange={set('type')}><option>Home</option><option>Apartment</option><option>Office</option></select></div>
        <div className="two"><input type="number" min="0" placeholder="Beds" value={f.beds} onChange={set('beds')} /><input type="number" min="0" placeholder="Baths" value={f.baths} onChange={set('baths')} /></div>
        <label className="muted">Upload a photo (optional) or pick a style</label>
        <input type="file" accept="image/*" onChange={upload} />
        <div className="thumbs">{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
          <img key={n} src={src(n)} alt="" className={f.img === n && !custom ? 'sel' : ''} onClick={() => { setCustom(''); setF({ ...f, img: n }) }} />
        ))}</div>
        <motion.button className="btn dark" whileTap={{ scale: 0.97 }}>Publish listing</motion.button>
      </motion.form>
    </div>
  )
}
