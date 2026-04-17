'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Research() {
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
    <section ref={ref} id="research-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Research
      </span>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '48px', lineHeight: 1.1 }}>
        Published <span className="gradient-text-2">Work</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(0,245,212,0.05))',
          border: '1px solid rgba(108,99,255,0.25)',
          borderRadius: '16px',
          padding: '28px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-10px', right: '20px', fontSize: '120px', color: 'rgba(108,99,255,0.08)', fontFamily: 'var(--font-syne)', fontWeight: 800, lineHeight: 1, pointerEvents: 'none' }}>
          "
        </div>
        <div style={{ fontFamily: 'var(--font-syne)', fontSize: '18px', fontWeight: 700, color: '#f0f0ff', marginBottom: '8px', lineHeight: 1.3 }}>
          AI-Powered Document Generation: Using NLP for Intelligent Data-to-Template Mapping
        </div>
        <div style={{ fontSize: '13px', color: '#00f5d4', marginBottom: '12px', fontWeight: 500 }}>
          Published in IJLTEMAS · October 2025
        </div>
        <p style={{ fontSize: '14px', color: '#7a7a9d', lineHeight: 1.7, marginBottom: '16px' }}>
          Built a Document Automation tool using Python and Streamlit. Integrated NLP logic for automated extraction and data-to-template mapping, reducing manual entry errors by 40%.
        </p>
        <a
          href="https://www.ijltemas.in/submission/index.php/online/article/view/3297"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6c63ff', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#00f5d4' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6c63ff' }}
        >
          Read Paper →
        </a>
      </motion.div>
    </section>
  )
}
