"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart, Hotel, GraduationCap, Heart, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RealmsWeServe() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const useCases = [
    {
      id: 1,
      name: "eCommerce",
      description:
        "Automate order updates, abandoned cart recovery, and customer support. Send personalized product recommendations and handle returns seamlessly.",
      icon: ShoppingCart,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      scenario: "Order Updates & Cart Recovery",
      benefits: ["Automated Order Status", "Cart Abandonment Recovery", "Product Recommendations", "Return Processing"],
      stats: { conversion: "35%", response: "2min", satisfaction: "94%" },
      example:
        "Customer gets instant order confirmation, shipping updates, and can easily track their package through WhatsApp chat.",
    },
    {
      id: 2,
      name: "Hospitality",
      description:
        "Streamline booking confirmations, handle guest inquiries, send check-in reminders, and provide 24/7 concierge services through WhatsApp.",
      icon: Hotel,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      scenario: "Booking & Guest Services",
      benefits: ["Booking Confirmations", "Check-in Reminders", "Concierge Services", "Guest Feedback"],
      stats: { bookings: "28%", response: "1min", satisfaction: "96%" },
      example:
        "Guests receive booking confirmations, room service menus, local recommendations, and can request services instantly.",
    },
    {
      id: 3,
      name: "Education",
      description:
        "Send class schedules, assignment reminders, exam notifications, and provide instant support for students and parents through automated messaging.",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      scenario: "Alerts & Academic Support",
      benefits: ["Class Schedules", "Assignment Reminders", "Exam Notifications", "Parent Updates"],
      stats: { engagement: "42%", attendance: "18%", satisfaction: "91%" },
      example: "Students get assignment deadlines, exam schedules, and parents receive progress updates automatically.",
    },
    {
      id: 4,
      name: "Healthcare",
      description:
        "Automate appointment reminders, handle prescription refills, provide health tips, and offer 24/7 support for patient inquiries and emergencies.",
      icon: Heart,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      scenario: "Appointment & Patient Care",
      benefits: ["Appointment Reminders", "Prescription Refills", "Health Tips", "Emergency Support"],
      stats: { "no-shows": "45%", response: "30sec", satisfaction: "97%" },
      example:
        "Patients receive appointment reminders, can reschedule easily, and get instant answers to health questions.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentUseCase = useCases[currentSlide]

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 shadow-lg shadow-emerald-500/10 mb-6">
            <MessageCircle className="w-5 h-5 text-emerald-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Real-World Use Cases</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Perfect for Every</span>
            <br />
            <span className="text-slate-800">Business Type</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how businesses across different industries use our WhatsApp platform to enhance customer experience and
            drive growth
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div
            className={`bg-gradient-to-br ${currentUseCase.bgColor} rounded-3xl border border-white/50 shadow-xl shadow-cyan-500/10 p-8 md:p-12 transition-all duration-500`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Icon & Info */}
              <div className="text-center lg:text-left animate-slide-in-left">
                <div
                  className={`inline-flex w-24 h-24 bg-gradient-to-br ${currentUseCase.color} rounded-3xl items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <currentUseCase.icon className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800">{currentUseCase.name}</h3>
                  <div className="text-lg font-semibold text-cyan-600">{currentUseCase.scenario}</div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {Object.entries(currentUseCase.stats).map(([key, value], index) => (
                      <div key={key} className="text-center">
                        <div
                          className={`text-2xl font-bold ${
                            index === 0 ? "text-emerald-600" : index === 1 ? "text-cyan-600" : "text-purple-600"
                          }`}
                        >
                          {key.includes("response") || key.includes("no-shows")
                            ? key.includes("no-shows")
                              ? `↓${value}`
                              : `<${value}`
                            : `+${value}`}
                        </div>
                        <div className="text-sm text-slate-600 capitalize">{key.replace("-", " ")}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6 animate-slide-in-right">
                <p className="text-lg text-slate-700 leading-relaxed">{currentUseCase.description}</p>

                {/* Example Scenario */}
                <div className="bg-white/60 rounded-2xl p-6 border border-white/50">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-cyan-500 mr-2" />
                    Real Example:
                  </h4>
                  <p className="text-slate-700 italic leading-relaxed">"{currentUseCase.example}"</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-800">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentUseCase.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 bg-white/60 rounded-xl border border-white/50"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
                        <span className="text-slate-700 font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`bg-gradient-to-r ${currentUseCase.color} hover:shadow-lg transition-all duration-300 text-white rounded-xl px-6 py-3 font-semibold`}
                >
                  See How It Works
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-cyan-200 rounded-full flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-cyan-200 rounded-full flex items-center justify-center text-cyan-600 hover:text-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {useCases.map((useCase, index) => (
            <button
              key={useCase.id}
              onClick={() => goToSlide(index)}
              className={`group p-4 rounded-2xl transition-all duration-300 ${
                currentSlide === index
                  ? `bg-gradient-to-br ${useCase.bgColor} border-2 border-cyan-300 shadow-lg scale-105`
                  : "bg-white/60 border border-slate-200 hover:bg-white hover:shadow-lg hover:scale-105"
              }`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-slate-700 text-center">{useCase.name}</div>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 p-8 shadow-xl shadow-cyan-500/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">See Your Industry in Action</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Book a personalized demo to see exactly how our WhatsApp platform can transform your specific business
              needs.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
              Book Industry Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
