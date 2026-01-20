// FILE: app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shoelace Concepts - Premium Shoe Manufacturing | Ogijo, Nigeria',
  description: 'Quality shoe manufacturing and production in Ogijo, Ogun State, Nigeria. Custom footwear for retailers and wholesalers.',
  keywords: 'shoe manufacturing, footwear production, Nigeria, Ogijo, custom shoes, wholesale',
  openGraph: {
    title: 'Shoelace Concepts - Premium Shoe Manufacturing',
    description: 'Quality shoe manufacturing in Nigeria',
    url: 'https://shoelaceconcepts.com',
    siteName: 'Shoelace Concepts',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>👟</text></svg>" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}