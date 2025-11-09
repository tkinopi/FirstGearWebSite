'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'リビルト事業', href: '/rebuilt' },
    { name: '製品案内', href: '/products' },
    // { name: '海外事業', href: '#overseas' },
    { name: '企業情報', href: '/company' },
    // { name: 'アクセス', href: '#access' },
    { name: '採用情報', href: '/recruitment' },
    { name: 'お問い合わせ', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">FG</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">FirstGear</h1>
              <p className="text-xs text-gray-600">Automotive Excellence</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar