export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
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
          className="inline-block text-3xl md:text-4xl font-display font-semibold text-accent hover:underline mb-8"
        >
          hello@theillustudio.com
        </a>

        <p className="text-sm text-muted-text">
          📍 Bachupally, Malkajgiri, Medchal · Available across Hyderabad
        </p>
      </div>
    </section>
  )
}
