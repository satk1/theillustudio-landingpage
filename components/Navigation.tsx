'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-warm-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 relative">
            <Image 
              src="/theillustudio_logo.jpeg" 
              alt="The Illu Studio" 
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display text-2xl md:text-3xl font-bold">The Illu Studio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* <Link href="#work" className="text-muted-text hover:text-primary-text transition">Work</Link> */}
          <Link href="#services" className="text-muted-text hover:text-primary-text transition">Services</Link>
          <Link href="#about" className="text-muted-text hover:text-primary-text transition">About</Link>
          <Link href="#contact" className="text-muted-text hover:text-primary-text transition">Contact</Link>
        </div>

        <a 
          href="mailto:hello@theillustudio.com"
          className="hidden md:block px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition"
        >
          Book a Session
        </a>

        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-warm-white border-t border-primary-text/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* <Link href="#work" onClick={() => setMobileMenuOpen(false)}>Work</Link> */}
            <Link href="#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <a href="mailto:hello@theillustudio.com" className="px-6 py-2 bg-accent text-white rounded-full text-center">
              Book a Session
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
