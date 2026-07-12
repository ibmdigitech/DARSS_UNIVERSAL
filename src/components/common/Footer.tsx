import { FC } from 'react'
import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react'
import Container from './Container'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-navy-950 to-navy-900 border-t border-white/10 pt-20 pb-10">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-cyan-400">DAARS</span> Universal
            </h3>
            <p className="text-gray-400 mb-6">
              Delivering innovative engineering and industrial solutions worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Project Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Equipment Supply</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@daarsuniversal.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business St, City, State 12345</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} DAARS Universal. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
