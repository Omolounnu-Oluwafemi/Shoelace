/* eslint-disable @next/next/no-img-element */
export default function Production() {
    return (
      <main className="pt-32 min-h-screen">
        <section className="py-32 bg-linear-to-b from-gray-50 to-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Manufacturing Excellence</h1>
              <p className="text-xl text-gray-600">Our world-class production process</p>
            </div>
  
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { num: '01', title: 'Design & Material', icon: '🎨', desc: 'Premium material selection and pattern design' },
                { num: '02', title: 'Precision Cutting', icon: '✂️', desc: 'Perfect measurements and accuracy' },
                { num: '03', title: 'Expert Assembly', icon: '🔨', desc: 'Master craftsmanship and stitching' },
                { num: '04', title: 'Quality Check', icon: '✅', desc: 'Final inspection and packaging' }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition h-full border-t-4 border-yellow-500">
                    <div className="text-5xl font-black text-yellow-200 mb-4">{step.num}</div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
  
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&h=500&fit=crop"
              alt="Production"
              className="w-full rounded-3xl shadow-2xl h-96 object-cover"
            />
          </div>
        </section>
      </main>
    )
  }