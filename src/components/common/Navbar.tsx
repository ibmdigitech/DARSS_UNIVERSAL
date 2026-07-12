import { FC } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Button from './Button'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/80 border-b border-white/10"
    >
      <Container className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          <span className="text-cyan-400">DAARS</span>
          <span className="text-white ml-2">Universal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-800 border-t border-white/10 p-4"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-4">Get Started</Button>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
