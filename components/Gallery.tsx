export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-text mb-4">PORTFOLIO</p>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Moments that<br />speak for themselves.
            </h2>
            <a href="#" className="hidden md:block text-accent hover:underline">
              See Full Portfolio →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="aspect-square bg-surface hover:scale-[1.03] transition-transform duration-200 overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-text">
                Photo {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
