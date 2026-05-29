'use client'

import { useEffect } from 'react'

const PARTICLES = ['🍞', '🥐', '✨', '🧁', '🍰', '⭐', '🥖', '🎂']

export function CursorEffect() {
  useEffect(() => {
    let lastX = 0
    let lastY = 0

    const spawn = (x: number, y: number) => {
      const el = document.createElement('span')
      el.textContent = PARTICLES[Math.floor(Math.random() * PARTICLES.length)]

      const size = 13 + Math.random() * 9
      const tx = (Math.random() - 0.5) * 70   // random horizontal drift
      const ty = -(35 + Math.random() * 45)   // float upward
      const rot = (Math.random() - 0.5) * 60  // rotate slightly

      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${size}px;
        pointer-events: none;
        z-index: 99999;
        user-select: none;
        transform: translate(-50%, -50%);
        --tx: ${tx}px;
        --ty: ${ty}px;
        --rot: ${rot}deg;
        animation: mocParticle 0.85s ease-out forwards;
      `
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 850)
    }

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      if (dx * dx + dy * dy < 400) return   // skip if moved < 20px

      lastX = e.clientX
      lastY = e.clientY

      // occasionally spawn 2 particles for denser trail
      spawn(e.clientX, e.clientY)
      if (Math.random() > 0.6) spawn(e.clientX, e.clientY)
    }

    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <style>{`
      @keyframes mocParticle {
        0%   { opacity: 1;   transform: translate(-50%, -50%) scale(1)   rotate(0deg); }
        60%  { opacity: 0.7; }
        100% { opacity: 0;   transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.3) rotate(var(--rot)); }
      }
    `}</style>
  )
}
