export default function TrustBar() {
  const stats = [
    { number: '500+', label: 'Events Shot' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Delivered On Time' },
    { number: '★ 4.9', label: 'Client Rating' },
  ]

  return (
    <section className="py-16 border-y border-primary-text/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-text uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
