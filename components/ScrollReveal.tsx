'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('slide-up')
            entry.target.classList.remove('slide-down')
          } else if (isVisible) {
            // Only animate out if it was previously visible
            entry.target.classList.remove('slide-up')
            entry.target.classList.add('slide-down')
            // Reset visibility after animation
            setTimeout(() => setIsVisible(false), 600)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal opacity-0 ${className}`}
    >
      {children}
    </div>
  )
}
