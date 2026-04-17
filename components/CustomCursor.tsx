'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rx = useRef(0)
  const ry = useRef(0)
  const rafId = useRef<number>(0)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx - 6 + 'px'
      dot.style.top = my - 6 + 'px'
    }

    function animate() {
      rx.current += (mx - rx.current) * 0.18
ry.current += (my - ry.current) * 0.18
if (ring) {
  ring.style.left = rx.current + 'px'
  ring.style.top = ry.current + 'px'
}
rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMove)

    const onEnter = () => ring.classList.add('hover')
    const onLeave = () => ring.classList.remove('hover')

    const targets = document.querySelectorAll('a, button, .project-card, .skill-chip')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
