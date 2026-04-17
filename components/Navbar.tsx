'use client'

import { motion } from 'framer-motion'

const links = [
  { label: 'Skills', id: 'skills-section' },
  { label: 'Projects', id: 'projects-section' },
  { label: 'Experience', id: 'exp-section' },
  { label: 'Research', id: 'research-section' },
  { label: 'Contact', id: 'contact-section' },
]

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const lenis = (window as any).__lenis
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.2 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 32px',
        borderBottom: '1px solid rgba(108,99,255,0.12)',
        background: 'rgba(5,5,8,0.7)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '20px',
          fontWeight: 800,
          background: 'linear-gradient(120deg, #6c63ff, #00f5d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
        }}
      >
        KS/
      </div>

      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#7a7a9d',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-grotesk)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0f0ff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#7a7a9d')}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
