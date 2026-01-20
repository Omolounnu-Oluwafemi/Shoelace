import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 text-center py-8 px-4">
      <p className="mb-2">&copy; {currentYear} Shoelace Concepts. All rights reserved.</p>
      <p className="text-sm">27, Holy Apostolic Avenue, Ogijo, Ogun State, Nigeria | +234 814 058 4398</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://wa.me/234814058398" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          WhatsApp
        </a>
        <a href="tel:+234814058398" className="hover:text-white transition">
          Call Us
        </a>
      </div>
    </footer>
  )
}