'use client'

import ScrollReveal from './ScrollReveal'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The Illu Studio captured our wedding exactly the way we felt it — emotional, beautiful, and real. Every photo is a memory we'll cherish forever.",
      author: 'Priya & Karthik',
      event: 'Wedding · Miyapur',
    },
    {
      quote: "Our daughter's birthday photos came out absolutely stunning. The team was so patient with the kids and caught every magical little moment.",
      author: 'Anitha Reddy',
      event: 'Birthday Shoot · Hyderabad',
    },
    {
      quote: "Professional, punctual, and incredibly talented. Our company event photos were delivered within the week and looked amazing. Highly recommend!",
      author: 'Rahul Sharma',
      event: 'Corporate Event · Gachibowli',
    },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-muted-text mb-4">KIND WORDS</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-16">
            What our clients say.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index}>
              <div className="bg-warm-white p-8 rounded-lg shadow-sm h-full flex flex-col">
                <p className="text-lg mb-6 leading-relaxed flex-grow">"{testimonial.quote}"</p>
                <div className="border-t border-primary-text/10 pt-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-text">{testimonial.event}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
