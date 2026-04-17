'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

// ─── SETUP ───────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_f74v0t5'
const EMAILJS_TEMPLATE_ID = 'template_zmzs62m'
const EMAILJS_PUBLIC_KEY  = 'wxuHSUBCNLSo-w0Z_'
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(108,99,255,0.25)',
    borderRadius: '10px',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#f0f0ff',
    outline: 'none',
  }

  return (
    <section ref={ref} id="contact-section" className="reveal" style={{ padding: '72px 32px' }}>
      <span style={{ display: 'inline-block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: '#6c63ff', fontWeight: 600, marginBottom: '12px' }}>
        Contact
      </span>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, marginBottom: '12px' }}>
        Let&apos;s <span style={{ background: 'linear-gradient(120deg, #00f5d4, #6c63ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
      </h2>
      
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.07), rgba(0,245,212,0.04))',
          border: '1px solid rgba(108,99,255,0.2)',
          borderRadius: '20px',
          padding: '36px',
          maxWidth: '540px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={inputStyle} />
          <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
          <textarea name="message" placeholder="Your message..." rows={5} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
          
          <Magnetic>
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              style={{
                padding: '14px 36px',
                background: status === 'success' ? '#00f5d4' : '#6c63ff',
                color: status === 'success' ? '#050508' : '#fff',
                borderRadius: '10px',
                fontWeight: 700,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'idle' && 'Send Message →'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && 'Try Again'}
            </button>
          </Magnetic>

          {status === 'error' && (
            <p style={{ fontSize: '13px', color: '#ff6b9d', marginTop: '4px' }}>
              Something went wrong. Please check your EmailJS service.
            </p>
          )}
        </div>
      </motion.div>
    </section>
  )
}