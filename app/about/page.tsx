/* eslint-disable @next/next/no-img-element */
export default function About() {
    return (
      <main className="pt-32 min-h-screen">
        <section className="py-32 bg-linear-to-b from-gray-50 to-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Our Story</h1>
              <p className="text-xl text-gray-600">Built on excellence, crafted with passion</p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <img
                src="https://images.unsplash.com/photo-1488898657744-c6f4d8e60b08?w=600&h=500&fit=crop"
                alt="Factory"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-gray-900">Shoelace Concepts</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Located in Ogijo, Ogun State, we&apos;re Nigeria&apos;s premier shoe manufacturing facility. Every shoe we create represents a commitment to quality, craftsmanship, and innovation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From casual wear to premium leather, custom orders to bulk wholesale—we deliver excellence across every category, every time.
                </p>
                <div className="space-y-3 pt-4">
                  {[
                    'ISO Certified Quality Standards',
                    'Expert Craftsmen with 15+ Years Experience',
                    'State-of-the-Art Manufacturing Facility'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold">✓</div>
                      <p className="text-gray-700 font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Rapid Production', desc: 'Fast turnaround without compromising quality' },
                { icon: '🎯', title: 'Custom Designs', desc: 'Bespoke solutions tailored to your needs' },
                { icon: '🌍', title: 'Global Standards', desc: 'International quality at local prices' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition border-l-4 border-yellow-500">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }