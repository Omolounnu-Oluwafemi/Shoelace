interface Product {
    id: number
    name: string
    image: string
    tag: string
    desc: string
  }
  
  export default function Products() {
    const products: Product[] = [
      { id: 1, name: 'Casual Designs', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', tag: 'Everyday Style', desc: 'Perfect for daily wear and comfort' },
      { id: 2, name: 'Formal Wear', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop', tag: 'Professional', desc: 'Elegant shoes for business occasions' },
      { id: 3, name: 'Athletic Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', tag: 'Performance', desc: 'High-performance athletic footwear' },
      { id: 4, name: 'Custom Orders', image: 'https://images.unsplash.com/photo-1533487531602-7f990ea4dfe6?w=500&h=500&fit=crop', tag: 'Bespoke', desc: 'Tailored to your exact specifications' },
      { id: 5, name: 'Premium Leather', image: 'https://images.unsplash.com/photo-1548693505-c2a7f40a5b16?w=500&h=500&fit=crop', tag: 'Luxury', desc: 'Premium leather craftsmanship' },
      { id: 6, name: 'Bulk Supply', image: 'https://images.unsplash.com/photo-1609709228675-ce33ca30b518?w=500&h=500&fit=crop', tag: 'Wholesale', desc: 'Wholesale solutions for retailers' }
    ]
  
    return (
      <main className="pt-32 min-h-screen">
        <section className="py-32 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Our Collections</h1>
              <p className="text-xl text-gray-600">Premium footwear for every occasion</p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg h-72 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition">Learn More →</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }