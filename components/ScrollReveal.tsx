'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  animateOnce?: boolean
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  threshold = 0.1,
  animateOnce = false 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setHasAnimated(true)
            entry.target.classList.add('slide-up')
            entry.target.classList.remove('slide-down')
            
            // If animateOnce is true, stop observing after first animation
            if (animateOnce) {
              observer.unobserve(entry.target)
            }
          } else if (isVisible && !animateOnce && !hasAnimated) {
            // Only animate out if it was previously visible and animateOnce is false
            entry.target.classList.remove('slide-up')
            entry.target.classList.add('slide-down')
            setTimeout(() => setIsVisible(false), 600)
          }
        })
      },
      {
        threshold: threshold,
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
  }, [isVisible, threshold, animateOnce, hasAnimated])

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal opacity-0 ${className}`}
    >
      {children}
    </div>
  )
}
