'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="exp-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Experience
      </span>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '48px', lineHeight: 1.1 }}>
        Where I&apos;ve <span className="gradient-text-2">Worked</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ borderColor: 'rgba(108,99,255,0.4)' }}
        style={{
          background: '#0f0f1a',
          border: '1px solid rgba(108,99,255,0.25)',
          borderRadius: '14px',
          padding: '24px 28px',
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start',
          transition: 'border-color 0.2s',
        }}
      >
        <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
          ⚡
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-syne)', fontSize: '16px', fontWeight: 700, color: '#f0f0ff' }}>MERN Stack Intern</div>
          <div style={{ fontSize: '13px', color: '#6c63ff', fontWeight: 500, marginTop: '2px' }}>AXCENTRA</div>
          <div style={{ fontSize: '12px', color: '#7a7a9d', marginTop: '4px' }}>January 2026 – March 2026</div>
          <div style={{ fontSize: '13px', color: '#7a7a9d', marginTop: '8px', lineHeight: 1.6 }}>
            Engineered full-stack web applications using the MERN stack. Designed RESTful APIs for seamless frontend-backend integration and efficient data management.
          </div>
        </div>
      </motion.div>
    </section>
  )
}
