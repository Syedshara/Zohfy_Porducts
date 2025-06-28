"use client"

import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export default function GuildHallFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text font-['Poppins']">WhatsApp Pro</div>
                  <div className="text-xs text-slate-400 tracking-wider font-medium">BUSINESS SOLUTION</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Transform your customer engagement with powerful WhatsApp automation, team collaboration tools, and
                intelligent analytics. Scale your support and marketing effortlessly.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-emerald-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Platform</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Use Cases", "Integrations", "API Docs", "Support"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-slate-300">
                      123 Business Street
                      <br />
                      Tech District, NY 10001
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="tel:+1-555-0123"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    +1 (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a
                    href="mailto:hello@whatsapppro.com"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    hello@whatsapppro.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">© 2024 WhatsApp Pro Business Solution. All rights reserved.</div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}
