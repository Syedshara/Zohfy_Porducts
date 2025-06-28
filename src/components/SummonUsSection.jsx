"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Zap, Calendar } from "lucide-react"

export default function SummonUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 shadow-lg shadow-cyan-500/10 mb-6">
            <MessageCircle className="w-5 h-5 text-cyan-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Ready to Transform</span>
            <br />
            <span className="text-slate-800">Your WhatsApp Business?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today or book a personalized demo to see how our platform can revolutionize your
            customer engagement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 shadow-xl shadow-cyan-500/10 p-8 animate-slide-in-left">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Start Your Free Trial</h3>
              <p className="text-slate-600 leading-relaxed">
                Fill out the form below and we'll set up your account within 24 hours. No setup fees, no commitments.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
                <Select onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">eCommerce</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your needs</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/50 border-cyan-200 text-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl min-h-[120px]"
                  placeholder="What are your main goals with WhatsApp business automation? How many customers do you serve monthly?"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white py-4 text-lg font-semibold rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Start Free Trial
                  <Zap className="w-5 h-5 ml-2 animate-pulse" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Demo
                </Button>
              </div>
            </form>

            {/* Trial Benefits */}
            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-xl border border-cyan-200">
              <h4 className="font-semibold text-slate-800 mb-3">✨ What you get with your free trial:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>14 days full access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Personal onboarding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>24/7 support included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Phone Support</h4>
                    <p className="text-slate-600 mb-2">Speak directly with our WhatsApp experts</p>
                    <a
                      href="tel:+1-555-0123"
                      className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors duration-200"
                    >
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-emerald-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Email Us</h4>
                    <p className="text-slate-600 mb-2">Get detailed information and pricing</p>
                    <a
                      href="mailto:hello@whatsappbusiness.com"
                      className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200"
                    >
                      hello@whatsappbusiness.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Visit Our Office</h4>
                    <p className="text-slate-600 mb-2">Meet our team in person</p>
                    <address className="text-purple-600 font-semibold not-italic">
                      123 Business Street
                      <br />
                      Tech District, NY 10001
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">Business Hours</h4>
                    <p className="text-slate-600 mb-2">We're here when you need us</p>
                    <div className="text-orange-600 font-semibold">
                      <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                      <div>Sat: 9:00 AM - 4:00 PM</div>
                      <div>24/7 Emergency Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl border border-cyan-200 p-6 shadow-lg">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">Why Choose Our Platform?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">24h</div>
                  <div className="text-sm text-slate-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">50+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">99%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
