'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

interface Product {
  id: number
  name: string
  image: string
  tag: string
}

interface Testimonial {
  name: string
  role: string
  text: string
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const products: Product[] = [
  { id: 1, name: 'Casual Designs', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', tag: 'Everyday Style' },
  { id: 2, name: 'Formal Wear', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop', tag: 'Professional' },
  { id: 3, name: 'Athletic Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop', tag: 'Performance' },
  { id: 4, name: 'Custom Orders', image: 'https://images.unsplash.com/photo-1533487531602-7f990ea4dfe6?w=500&h=500&fit=crop', tag: 'Bespoke' },
  { id: 5, name: 'Premium Leather', image: 'https://images.unsplash.com/photo-1548693505-c2a7f40a5b16?w=500&h=500&fit=crop', tag: 'Luxury' },
  { id: 6, name: 'Bulk Supply', image: 'https://images.unsplash.com/photo-1609709228675-ce33ca30b518?w=500&h=500&fit=crop', tag: 'Wholesale' }
]

const testimonials: Testimonial[] = [
  { name: 'Chioma Adeyemi', role: 'Retail Owner', text: 'Outstanding quality and reliability. Best supplier in Nigeria!' },
  { name: 'Tunde Okafor', role: 'Wholesaler', text: 'Professional service, premium products. Highly recommended!' }
]

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 min-h-screen relative overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-40 -right-40 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 bottom-0 left-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full">
                  <p className="text-yellow-700 font-semibold text-sm">✨ Premium Footwear Manufacturing</p>
                </div>
                <h1 className="text-6xl md:text-7xl font-black leading-tight text-gray-900">
                  Where Quality
                  <br />
                  <span style={{ color: '#d4a574' }}>Meets Craft</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Handcrafted shoes for retailers, wholesalers, and discerning customers. Professional manufacturing excellence since day one.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
                  Explore Collections <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 font-bold rounded-xl hover:bg-yellow-50 transition">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop"
                alt="Premium shoes"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
                <p className="text-sm text-gray-600">Trusted by 500+ Retailers</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600">Premium footwear for every occasion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-xl transition">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-yellow-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-yellow-500">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">&quot;{item.text}&quot;</p>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-yellow-600 font-semibold text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-12">Discover why 500+ retailers trust Shoelace Concepts for quality footwear</p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-xl transition transform hover:scale-105">
            Get In Touch Today
          </Link>
        </div>
      </section>
    </main>
  )
}