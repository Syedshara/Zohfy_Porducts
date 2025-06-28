"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-cyan-500/10 border-b border-cyan-100 rounded-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text font-['Poppins']">WhatsApp Pro</div>
                <div className="text-xs text-slate-500 tracking-wider font-medium">BUSINESS SOLUTION</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link
                to="/"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/") ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                Home
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-transform duration-300 ${
                    isActive("/") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>

              <Link
                to="/features"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/features") ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                Features
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-transform duration-300 ${
                    isActive("/features") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>

              <Link
                to="/pricing"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/pricing") ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                Pricing
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-transform duration-300 ${
                    isActive("/pricing") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>

              <Link
                to="/use-cases"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/use-cases") ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                Use Cases
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-transform duration-300 ${
                    isActive("/use-cases") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>

              <Link
                to="/contact"
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isActive("/contact") ? "text-cyan-600" : "text-slate-700 hover:text-cyan-600"
                }`}
              >
                Contact
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-transform duration-300 ${
                    isActive("/contact") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></div>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="relative bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden group">
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Start Free Trial
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-cyan-600 p-2 rounded-xl hover:bg-cyan-50 transition-all duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-cyan-100 animate-slide-in-up">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/use-cases"
              className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-2">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-xl">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
