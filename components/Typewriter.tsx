'use client'

import { useEffect, useState } from 'react'

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'ML & NLP Engineer',
  'Published Researcher',
  'MERN Stack Developer',
]

export default function Typewriter() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((r) => (r + 1) % ROLES.length)
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <span
      style={{
        display: 'block',
        background: 'linear-gradient(120deg, #6c63ff, #00f5d4, #ff6b9d)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite',
        minHeight: '1.1em',
      }}
    >
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '0.85em',
          background: '#00f5d4',
          marginLeft: '4px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  )
}
