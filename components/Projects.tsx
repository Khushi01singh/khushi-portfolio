'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    icon: '🤖',
    iconBg: 'rgba(108,99,255,0.15)',
    title: 'B2B Sentiment & Growth Predictor',
    desc: 'AI-powered lead classification using Gradient Boosting + NLP to tier-profile 1,000+ businesses with real-time Claude API recommendations.',
    tags: ['Flask', 'React', 'Scikit-learn', 'Claude API', 'NLP'],
    metrics: [{ val: '92%', key: 'Accuracy' }, { val: '80%', key: 'Time Saved' }, { val: '1K+', key: 'Businesses' }],
    link: 'https://amex-b2b-frontend.onrender.com/',
  },
  {
    icon: '📊',
    iconBg: 'rgba(0,245,212,0.12)',
    title: 'ERFlows: Database Visualizer',
    desc: 'Interactive ER diagram tool with drag-and-drop interface and auto SQL schema generation. Reduces design time by 45%, modeling errors by 60%.',
    tags: ['React', 'Node.js', 'SQL', 'Tailwind'],
    metrics: [{ val: '45%', key: 'Faster' }, { val: '60%', key: 'Less Errors' }],
    link: 'https://erflows.netlify.app/',
  },
  {
    icon: '📈',
    iconBg: 'rgba(255,180,50,0.12)',
    title: 'Hacker News Success Predictor',
    desc: 'ML model forecasting HN post engagement with 85%+ accuracy on 10K+ posts by analyzing timing, metadata and statistical features.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
    metrics: [{ val: '85%+', key: 'Accuracy' }, { val: '10K+', key: 'Posts' }, { val: '40%', key: 'Better Rates' }],
    link: null,
  },
  {
    icon: '🛍️',
    iconBg: 'rgba(255,107,157,0.12)',
    title: 'Trendify: E-commerce Platform',
    desc: 'High-performance fashion e-commerce app with real-time filtering and 35% higher user engagement through responsive design.',
    tags: ['React', 'Node.js', 'Tailwind'],
    metrics: [{ val: '35%', key: 'More Engagement' }, { val: '50%', key: 'Faster Search' }],
    link: 'https://imaginative-ganache-b224e0.netlify.app/',
  },
  {
    icon: '🔐',
    iconBg: 'rgba(56,182,255,0.12)',
    title: 'PairVault: Credential Manager',
    desc: 'Client-side encrypted vault using Web Crypto API ensuring 100% data privacy. Implements SM-2 algorithm for optimized memory retention.',
    tags: ['React', 'Web Crypto', 'PWA', 'Tailwind'],
    metrics: [{ val: '100%', key: 'Private' }, { val: '600+', key: 'Data Pairs' }, { val: '40%', key: 'Faster Retrieval' }],
    link: 'https://pairvault.netlify.app/',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Drag scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let isDown = false, startX = 0, scrollLeft = 0

    const onDown = (e: MouseEvent) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft }
    const onLeave = () => { isDown = false }
    const onUp = () => { isDown = false }
    const onMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft
      el.scrollLeft = scrollLeft - (x - startX) * 1.2
    }

    el.addEventListener('mousedown', onDown)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('mouseup', onUp)
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('mouseup', onUp)
      el.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section ref={sectionRef} id="projects-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Work
      </span>
      <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: '16px', lineHeight: 1.1 }}>
        Featured <span className="gradient-text-2">Projects</span>
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#7a7a9d', marginBottom: '20px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'slideRight 1.5s ease infinite' }} />
        </svg>
        Scroll sideways to explore
      </div>

      <div ref={scrollRef} className="projects-scroll-area">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="project-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, borderColor: 'rgba(108,99,255,0.5)' }}
            style={{
              minWidth: '300px',
              maxWidth: '320px',
              background: '#0f0f1a',
              border: '1px solid rgba(108,99,255,0.25)',
              borderRadius: '16px',
              padding: '24px',
              scrollSnapAlign: 'start',
              flexShrink: 0,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top gradient line on hover handled via CSS .project-card::before in globals */}
            <div style={{ width: 44, height: 44, borderRadius: '12px', background: p.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>
              {p.icon}
            </div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '17px', fontWeight: 700, marginBottom: '8px', color: '#f0f0ff', lineHeight: 1.25 }}>
              {p.title}
            </div>
            <p style={{ fontSize: '13px', color: '#7a7a9d', lineHeight: 1.65, marginBottom: '16px' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
              {p.tags.map((t) => (
                <span key={t} style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)', color: '#6c63ff', fontSize: '11px', padding: '3px 10px', borderRadius: '100px', fontWeight: 500 }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {p.metrics.map((m) => (
                <div key={m.key} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#00f5d4', fontFamily: 'var(--font-syne)' }}>{m.val}</div>
                  <div style={{ fontSize: '10px', color: '#7a7a9d', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>{m.key}</div>
                </div>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6c63ff', textDecoration: 'none', fontWeight: 600, marginTop: '16px', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#00f5d4' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6c63ff' }}
              >
                View Live →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
