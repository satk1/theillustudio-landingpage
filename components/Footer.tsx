import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-primary-text/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">The Illu Studio</h3>
            <p className="text-muted-text italic">Every Frame, Illuminated.</p>
          </div>

          <div className="flex gap-8 md:justify-end">
            {/* <Link href="#work" className="text-muted-text hover:text-primary-text transition">Work</Link> */}
            <Link href="#services" className="text-muted-text hover:text-primary-text transition">Services</Link>
            <Link href="#about" className="text-muted-text hover:text-primary-text transition">About</Link>
            <Link href="#contact" className="text-muted-text hover:text-primary-text transition">Contact</Link>
          </div>
        </div>

        <div className="border-t border-primary-text/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-text">
          <p>© 2026 The Illu Studio · Bachupally, Hyderabad</p>
          <a href="mailto:hello@theillustudio.com" className="hover:text-primary-text transition">
            hello@theillustudio.com
          </a>
        </div>
      </div>
    </footer>
  )
}
