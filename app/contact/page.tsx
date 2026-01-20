/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface ContactItem {
  icon: React.ComponentType<any>
  title: string
  content: string[]
}

export default function Contact() {
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

  const contactItems: ContactItem[] = [
    { icon: MapPin, title: 'Visit Us', content: ['27, Holy Apostolic Avenue', 'Ogijo, Ogun State, Nigeria', 'PF6X+F8'] },
    { icon: Phone, title: 'Call Us', content: ['+234 814 058 4398'] },
    { icon: MessageCircle, title: 'WhatsApp', content: ['Message us directly'] },
    { icon: Clock, title: 'Hours', content: ['Monday – Friday', '9:00 AM – 5:00 PM'] }
  ]

  return (
    <main className="pt-32 min-h-screen">
      <section className="py-32 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl -top-40 -right-40 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-center mb-16">Let&apos;s Connect</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactItems.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
                  <div className="flex gap-4">
                    <item.icon size={32} style={{ color: '#d4a574' }} />
                    <div>
                      <p className="text-xl font-bold mb-2">{item.title}</p>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-300">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur p-10 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg transition transform hover:scale-105"
                >
                  Send Message
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}