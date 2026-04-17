'use client'

import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import Magnetic from './Magnetic'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

const stats = [
  { val: '92%', label: 'Model Accuracy' },
  { val: '5+', label: 'Live Projects' },
  { val: '1', label: 'Published Paper' },
  { val: '8.12', label: 'CGPA' },
]

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '80px 32px 80px',
        position: 'relative',
      }}
    >
      {/* Badge */}
      <motion.div {...fadeUp(0.1)}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(108,99,255,0.12)',
            border: '1px solid rgba(108,99,255,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '12px',
            color: '#00f5d4',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '28px',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#00f5d4',
              animation: 'pulse-dot 2s infinite',
              display: 'inline-block',
            }}
          />
          Open to Internships &amp; Opportunities
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        {...fadeUp(0.2)}
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-2px',
          marginBottom: '20px',
        }}
      >
        <span style={{ display: 'block', color: '#f0f0ff' }}>Khushi Singh</span>
        <Typewriter />
      </motion.h1>

      {/* Sub */}
      <motion.p {...fadeUp(0.35)} style={{ fontSize: '16px', color: '#7a7a9d', maxWidth: '520px', lineHeight: 1.7, marginBottom: '36px' }}>
        B.Tech (IT) @ GGSIPU ·{' '}
        <strong style={{ color: '#00f5d4', fontWeight: 500 }}>CGPA 8.12</strong> · Building scalable AI solutions &amp; full-stack
        applications with Java, Python &amp; React. Published NLP researcher.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.45)} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Magnetic>
          <a
            href="mailto:khushisinghara268@gmail.com"
            style={{
              padding: '12px 28px',
              background: '#6c63ff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(108,99,255,0.4)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = 'none'
              el.style.boxShadow = 'none'
            }}
          >
            Get in Touch
          </a>
        </Magnetic>

        <Magnetic>
          {/* ── Place your resume PDF at /public/Khushi_Singh_Resume.pdf ── */}
          <a
            href="/Khushi-Software-Engineer-Resume.pdf"
              download="Khushi-Software-Engineer-Resume.pdf"
            style={{
              padding: '12px 28px',
              background: 'transparent',
              color: '#f0f0ff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = '#00f5d4'
              el.style.background = 'rgba(0,245,212,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(255,255,255,0.15)'
              el.style.background = 'transparent'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </Magnetic>

        <Magnetic>
          <a
            href="https://www.ijltemas.in/submission/index.php/online/article/view/3297"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '12px 28px',
              background: 'transparent',
              color: '#f0f0ff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.borderColor = '#6c63ff'
              el.style.background = 'rgba(108,99,255,0.08)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(255,255,255,0.15)'
              el.style.background = 'transparent'
            }}
          >
            View Research ↗
          </a>
        </Magnetic>
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeUp(0.55)} style={{ display: 'flex', gap: '36px', marginTop: '56px', flexWrap: 'wrap' }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '28px',
                fontWeight: 800,
                background: 'linear-gradient(120deg, #6c63ff, #00f5d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: '11px', color: '#7a7a9d', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
