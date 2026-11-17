import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../store.jsx'

export default function Welcome() {
  const { user } = useStore()
  return (
    <section className="welcome">
      <motion.img className="wimg" src="/img/h3.webp" alt="Modern luxury house for sale" initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: 'easeOut' }} />
      <div className="wshade" />
      <motion.div className="wcopy" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}>
        <motion.div className="logo big" variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }}>Hunt<b>X</b></motion.div>
        <motion.h1 variants={{ h: { opacity: 0, y: 30 }, s: { opacity: 1, y: 0 } }}>Buy, Sell, Rent Every Property Easily</motion.h1>
        <motion.p variants={{ h: { opacity: 0, y: 30 }, s: { opacity: 1, y: 0 } }}>Discover, list, and manage homes, offices, and properties effortlessly today.</motion.p>
        <motion.div className="dots" variants={{ h: { opacity: 0 }, s: { opacity: 1 } }}><i className="on" /><i /><i /></motion.div>
        <motion.div variants={{ h: { opacity: 0, y: 30 }, s: { opacity: 1, y: 0 } }}>
          <Link className="btn white" to={user ? '/home' : '/signup'}>{user ? 'Continue' : 'Get Started'}</Link>
          {!user && <Link className="btn ghost" to="/login">I already have an account</Link>}
        </motion.div>
      </motion.div>
    </section>
  )
}
