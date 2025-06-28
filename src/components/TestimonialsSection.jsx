"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "TechFlow Solutions",
      content:
        "Our customer response time dropped from 4 hours to under 30 minutes. The chatbot handles 70% of inquiries automatically, and our team can focus on complex issues. ROI was visible within the first month.",
      rating: 5,
      avatar: "SJ",
      industry: "Technology",
      metric: "Response time: 4hrs → 30min",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO",
      company: "EcoBeauty Co.",
      content:
        "The broadcast campaigns increased our sales by 35%. We can now send personalized product recommendations to thousands of customers instantly. The analytics help us optimize every campaign.",
      rating: 5,
      avatar: "MC",
      industry: "eCommerce",
      metric: "Sales increase: +35%",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Operations Manager",
      company: "Artisan Hotels",
      content:
        "Guest satisfaction scores improved dramatically. Automated booking confirmations, check-in reminders, and 24/7 concierge service through WhatsApp created an amazing guest experience.",
      rating: 5,
      avatar: "ER",
      industry: "Hospitality",
      metric: "Guest satisfaction: +42%",
    },
    {
      id: 4,
      name: "David Park",
      title: "Customer Success Lead",
      company: "HealthCare Plus",
      content:
        "Appointment no-shows reduced by 45% with automated reminders. Patients love getting instant answers about prescriptions and test results. Our staff productivity increased significantly.",
      rating: 5,
      avatar: "DP",
      industry: "Healthcare",
      metric: "No-shows reduced: -45%",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Head of Support",
      company: "EduTech Academy",
      content:
        "Parents and students get instant updates about assignments, grades, and events. Our support team handles 3x more inquiries with the same staff size. The multi-language support is fantastic.",
      rating: 5,
      avatar: "LT",
      industry: "Education",
      metric: "Support capacity: 3x increase",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 shadow-lg shadow-cyan-500/10 mb-6">
            <Quote className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Social Proof</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Trusted by 50+</span>
            <br />
            <span className="text-slate-800">Growing Companies</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses across industries are transforming their customer experience with our WhatsApp platform
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 shadow-xl shadow-cyan-500/10 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>

            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Quote className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-8">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed italic max-w-4xl mx-auto font-medium">
                "{currentData.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-xl font-bold text-white">{currentData.avatar}</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-slate-800">{currentData.name}</div>
                    <div className="text-slate-600">{currentData.title}</div>
                    <div className="text-sm font-semibold text-cyan-600">{currentData.company}</div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-xl border border-cyan-200">
                    <div className="text-sm text-slate-600">Industry</div>
                    <div className="font-semibold text-slate-800">{currentData.industry}</div>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="text-sm text-slate-600">Key Result</div>
                    <div className="font-semibold text-slate-800">{currentData.metric}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-cyan-200 rounded-full flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-cyan-200 rounded-full flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-center group">
                <div className="w-32 h-20 bg-white/60 backdrop-blur-sm rounded-2xl border border-cyan-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-20 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-slate-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">50+</div>
              <div className="text-sm text-slate-600">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">50%</div>
              <div className="text-sm text-slate-600">Avg. Response Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">99%</div>
              <div className="text-sm text-slate-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
