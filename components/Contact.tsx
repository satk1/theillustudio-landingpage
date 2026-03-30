'use client'

import ScrollReveal from './ScrollReveal'

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-muted-text mb-4">GET IN TOUCH</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Let's create something<br />beautiful together.
          </h2>
          <p className="text-lg text-muted-text mb-12">
            Have a shoot in mind? Tell us about it.<br />
            We'll get back to you within 24 hours.
          </p>

          <a 
            href="mailto:hello@theillustudio.com"
            className="inline-block text-3xl md:text-4xl font-display font-semibold text-accent hover:underline mb-4"
          >
            hello@theillustudio.com
          </a>

          <a 
            href="https://wa.me/919885677478"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl md:text-2xl font-display font-semibold text-primary-text hover:text-accent transition mb-8"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp: +91 98856 77478
          </a>

          <p className="text-sm text-muted-text mb-8">
            📍 Secunderabad, Gachibowli, Jubilee Hills · Available across Hyderabad
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://www.instagram.com/theillustudio_official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent transition"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.threads.com/@theillustudio_official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent transition"
              aria-label="Threads"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 3.998c-2.43 0-4.21.768-5.308 2.29-.897 1.24-1.297 2.85-1.19 4.788l1.497-.098c-.09-1.63.23-2.93.953-3.865.723-1.002 1.98-1.51 3.738-1.51 1.65 0 2.88.42 3.66 1.247.78.828 1.17 2.01 1.17 3.52v.74c-1.06-.43-2.31-.65-3.73-.65-2.14 0-3.84.54-5.07 1.61-1.23 1.07-1.85 2.54-1.85 4.39 0 1.78.59 3.21 1.76 4.27 1.17 1.06 2.73 1.59 4.66 1.59 2.28 0 4.06-.77 5.31-2.29.42-.51.75-1.09 1-1.73.08.58.19 1.11.33 1.6h1.59c-.21-.77-.35-1.68-.42-2.72-.07-1.04-.11-2.32-.11-3.83v-1.78c0-2.03-.54-3.62-1.62-4.76-1.08-1.14-2.65-1.71-4.71-1.71zm.12 7.32c1.2 0 2.23.18 3.08.54v.74c0 1.63-.48 2.93-1.44 3.88-.96.95-2.24 1.43-3.84 1.43-1.32 0-2.37-.35-3.14-1.04-.77-.69-1.16-1.63-1.16-2.81 0-1.24.43-2.23 1.29-2.96.86-.73 2.06-1.1 3.59-1.1.54 0 1.06.04 1.56.11z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@theillustudio?si=W4teRjj9iUoQJkTb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent transition"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/theillustudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-text hover:text-accent transition"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
