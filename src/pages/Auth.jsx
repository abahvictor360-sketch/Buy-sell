import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useStore } from '../store.jsx'

export default function Auth({ mode }) {
  const signup = mode === 'signup'
  const { setUser } = useStore()
  const nav = useNavigate()
  const { state } = useLocation()
  const [f, setF] = useState({ name: '', email: '', password: '' })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setErr('Enter a valid email address')
    if (f.password.length < 6) return setErr('Password must be at least 6 characters')
    if (signup && !f.name.trim()) return setErr('Please enter your name')
    setUser({ name: signup ? f.name.trim() : f.name.trim() || f.email.split('@')[0], email: f.email, avatar: '/img/avatar.webp' })
    nav(state?.from || '/home', { replace: true })
  }
  return (
    <section className="auth">
      <motion.img className="aimg" src="/img/h8.webp" alt="" initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2 }} />
      <div className="wshade" />
      <motion.form className="glass panel" onSubmit={submit} initial={{ opacity: 0, y: 50, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', damping: 20, delay: 0.15 }}>
        <Link to="/" className="logo">Hunt<b>X</b></Link>
        <h2>{signup ? 'Create your account' : 'Welcome back'}</h2>
        <p className="muted">{signup ? 'Start buying, selling and renting in minutes.' : 'Log in to continue your property hunt.'}</p>
        {signup && <input placeholder="Full name" value={f.name} onChange={set('name')} autoComplete="name" />}
        <input type="email" placeholder="Email address" value={f.email} onChange={set('email')} autoComplete="email" />
        <input type="password" placeholder="Password" value={f.password} onChange={set('password')} autoComplete={signup ? 'new-password' : 'current-password'} />
        {err && <motion.div className="err" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>{err}</motion.div>}
        <motion.button className="btn dark" whileTap={{ scale: 0.97 }}>{signup ? 'Sign Up' : 'Log In'}</motion.button>
        <p className="muted center">{signup ? 'Already have an account?' : 'New to HuntX?'} <Link to={signup ? '/login' : '/signup'}><b>{signup ? 'Log in' : 'Sign up'}</b></Link></p>
      </motion.form>
    </section>
  )
}
