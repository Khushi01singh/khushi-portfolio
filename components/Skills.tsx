'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Java (J2EE)', 'Python', 'JavaScript ES6+', 'React.js',
  'Spring Boot', 'Node.js', 'Express.js', 'Flask',
  'Scikit-learn', 'NLP / TextBlob', 'SQL', 'RESTful APIs',
  'Git / CI-CD', 'Tailwind CSS', 'Streamlit', 'Claude API',
]

export default function Skills() {
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
    <section ref={ref} id="skills-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Toolkit
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: 'clamp(26px, 4vw, 42px)',
          fontWeight: 800,
          letterSpacing: '-1px',
          marginBottom: '48px',
          lineHeight: 1.1,
        }}
      >
        Technical{' '}
        <span className="gradient-text-2">Skills</span>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="skill-chip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -3, borderColor: '#00f5d4', color: '#00f5d4', background: 'rgba(0,245,212,0.06)' }}
            style={{
              background: '#0f0f1a',
              border: '1px solid rgba(108,99,255,0.25)',
              borderRadius: '10px',
              padding: '14px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#f0f0ff',
              cursor: 'default',
              textAlign: 'center',
              transition: 'border-color 0.2s, color 0.2s, background 0.2s',
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
