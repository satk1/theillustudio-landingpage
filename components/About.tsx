'use client'

import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="aspect-square bg-surface rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-text">
                <div className="text-6xl mb-4">📸</div>
                <p>Photographer Portrait</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-text mb-4">ABOUT THE STUDIO</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                We don't just take photographs. We preserve your stories.
              </h2>
              
              <div className="space-y-4 text-muted-text leading-relaxed mb-8">
                <p>
                  The Illu Studio was born from one simple belief — that every family, every couple, 
                  every celebration deserves to be remembered with clarity and beauty.
                </p>
                <p>
                  Based in Bachupally, Hyderabad, we work across weddings, birthdays, corporate events, 
                  and family functions. Our approach is always the same: arrive early, blend in, and 
                  capture the moments as they naturally unfold.
                </p>
                <p className="font-medium text-primary-text">
                  No stiff poses. No rushed shoots. Just honest, illuminated photography.
                </p>
              </div>

              <div className="flex gap-6 text-sm text-muted-text">
                <span>500+ Events</span>
                <span>·</span>
                <span>3+ Years</span>
                <span>·</span>
                <span>Hyderabad & Beyond</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
