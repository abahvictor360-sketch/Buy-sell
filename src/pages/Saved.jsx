import { Link } from 'react-router-dom'
import { properties } from '../data.js'
import { useStore } from '../store.jsx'
import Card from '../components/Card.jsx'

export default function Saved() {
  const { saved, mine } = useStore()
  const list = [...mine, ...properties].filter((p) => saved.includes(p.id))
  return (
    <div className="wrap">
      <h1 className="h1">Saved <b>properties</b></h1>
      {list.length ? <div className="grid">{list.map((p, i) => <Card key={p.id} p={p} i={i} />)}</div>
        : <p className="empty">Nothing saved yet. Tap the ♥ on any property.<br /><Link className="btn dark" to="/explore">Explore properties</Link></p>}
    </div>
  )
}
