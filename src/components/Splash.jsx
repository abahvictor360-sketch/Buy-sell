import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <motion.div className="splash" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
      <div className="bg"><i /><i /><i /></div>
      <motion.div className="splash-icon glass" initial={{ scale: 0, rotate: -25 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', damping: 11, stiffness: 120, delay: 0.1 }}>
        <svg width="54" height="54" viewBox="0 0 64 64">
          <motion.path d="M14 30 32 14l18 16v20H38V38H26v12H14z" fill="none" stroke="#14161c" strokeWidth="3.5" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1, delay: 0.4, ease: 'easeInOut' }} />
          <motion.circle cx="48" cy="18" r="6" fill="#ff5fa2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.3 }} />
        </svg>
        <span className="ring" />
      </motion.div>
      <motion.div className="splash-name" initial={{ opacity: 0, y: 18, letterSpacing: '0.3em' }} animate={{ opacity: 1, y: 0, letterSpacing: '-0.02em' }} transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        Hunt<b>X</b>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.6 }}>Buy · Sell · Rent</motion.p>
      <div className="splash-bar"><motion.i initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.3, ease: 'easeInOut' }} /></div>
    </motion.div>
  )
}
