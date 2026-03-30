'use client'

import { useEffect, useRef } from 'react'

interface Bubble {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  color: string
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let bubbles: Bubble[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initBubbles()
    }

    const initBubbles = () => {
      bubbles = []
      const bubbleCount = Math.floor((canvas.width * canvas.height) / 100000) // Further reduced - about 5-8 bubbles on average screen
      
      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 120 + 80, // Larger bubbles
          vx: (Math.random() - 0.5) * 0.2, // Even slower
          vy: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.1 + 0.03, // Very subtle
          color: `rgba(200, 134, 10, ${Math.random() * 0.1 + 0.03})`
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = '#FAFAF8'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        bubble.x += bubble.vx
        bubble.y += bubble.vy

        if (bubble.x - bubble.radius > canvas.width) bubble.x = -bubble.radius
        if (bubble.x + bubble.radius < 0) bubble.x = canvas.width + bubble.radius
        if (bubble.y - bubble.radius > canvas.height) bubble.y = -bubble.radius
        if (bubble.y + bubble.radius < 0) bubble.y = canvas.height + bubble.radius

        const gradient = ctx.createRadialGradient(
          bubble.x,
          bubble.y,
          0,
          bubble.x,
          bubble.y,
          bubble.radius
        )
        
        gradient.addColorStop(0, bubble.color.replace(/[\d.]+\)$/g, `${bubble.opacity})`))
        gradient.addColorStop(0.4, bubble.color.replace(/[\d.]+\)$/g, `${bubble.opacity * 0.5})`))
        gradient.addColorStop(1, 'rgba(200, 134, 10, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-left">
        <p className="text-sm uppercase tracking-widest text-muted-text mb-6">
          WEDDING · BIRTHDAY · BUSINESS · EVENTS<br />
          Secunderabad, Hyderabad
        </p>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-balance">
          Every Frame,<br />
          <span className="text-accent">Illuminated.</span>
        </h1>
        
        <p className="text-xl text-muted-text max-w-2xl mb-8">
          We turn your most meaningful moments into photographs that stay with you forever.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href="mailto:hello@theillustudio.com"
            className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition transform hover:scale-105"
          >
            Book a Session
          </a>
          <a 
            href="#services"
            className="px-8 py-4 border border-primary-text/20 rounded-full font-medium hover:bg-surface transition"
          >
            View Our Work ↓
          </a>
        </div>
      </div>
    </section>
  )
}
