'use client'

import ScrollReveal from './ScrollReveal'

export default function Services() {
  const services = [
    {
      title: 'Wedding & Event Photography',
      description: 'Timeless portraits and candid moments from your special day — from the morning rituals to the final send-off. Professional cinematography that tells your story.',
    },
    {
      title: 'Social Media & YouTube Marketing',
      description: 'Grow your digital presence with strategic content marketing, audience engagement, and channel optimization.',
    },
    {
      title: 'Professional Video Editing',
      description: 'Transform raw footage into compelling stories with expert editing, color grading, and post-production.',
    },
    {
      title: 'Custom Thumbnail Design',
      description: 'Eye-catching thumbnails that boost click-through rates and make your content stand out.',
    },
    {
      title: 'Birthday Celebrations',
      description: 'Every laugh, every surprise, every slice of cake — captured as it happened with creative flair.',
    },
    {
      title: 'Business & Corporate',
      description: 'Professional headshots, product shoots, and brand stories that make the right impression.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm uppercase tracking-widest text-muted-text mb-4">OUR SERVICES</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Crafted for every<br />celebration.
          </h2>
          <p className="text-lg text-muted-text max-w-2xl mb-16">
            From intimate weddings to lively parties, we bring the same care and craft to every shoot.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index}>
              <div className="bg-warm-white p-8 rounded-lg hover:shadow-lg transition h-full flex flex-col">
                <h3 className="font-display text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-text leading-relaxed flex-grow">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
