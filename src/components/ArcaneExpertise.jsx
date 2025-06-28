import { Shield, Users, Zap, Heart, BarChart3, Globe } from "lucide-react"

export default function ArcaneExpertise() {
  const benefits = [
    {
      icon: Zap,
      title: "Scale Support & Marketing",
      description:
        "Automate customer interactions and marketing campaigns to handle unlimited conversations without increasing team size.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      audience: "For Businesses",
    },
    {
      icon: BarChart3,
      title: "Boost Lead Generation",
      description:
        "Convert more prospects with targeted broadcasts, automated follow-ups, and intelligent chatbot conversations.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      audience: "For Businesses",
    },
    {
      icon: Users,
      title: "Enhanced Team Collaboration",
      description:
        "Centralized inbox with role-based access, performance tracking, and seamless handoffs between team members.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      audience: "For Businesses",
    },
    {
      icon: Heart,
      title: "Immediate Assistance",
      description:
        "Get instant responses 24/7 with intelligent chatbots that understand context and provide accurate information.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      audience: "For Customers",
    },
    {
      icon: Shield,
      title: "Personalized Responses",
      description:
        "Receive contextual, relevant answers based on your history, preferences, and current conversation flow.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50",
      audience: "For Customers",
    },
    {
      icon: Globe,
      title: "Reliable Self-Service",
      description:
        "Access order status, booking information, and account details instantly without waiting for human support.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
      audience: "For Customers",
    },
  ]

  const businessBenefits = benefits.filter((b) => b.audience === "For Businesses")
  const customerBenefits = benefits.filter((b) => b.audience === "For Customers")

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-cyan-50">
      {/* Custom curved top border */}
      <div className="absolute -top-14 left-0 right-0 h-16 overflow-hidden z-0">
        <div className="absolute -bottom-16 left-0 right-0 h-32 bg-white rounded-t-[60%] border-t-2 border-cyan-300/50 shadow-[0_-15px_30px_-15px_rgba(6,182,212,0.2)]">
          <div className="absolute -bottom-px left-0 right-0 h-4 bg-gradient-to-r from-cyan-400/20 via-emerald-400/40 to-blue-400/20"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 shadow-lg shadow-cyan-500/10 mb-6">
            <Heart className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Benefits for Everyone</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Win-Win for Business</span>
            <br />
            <span className="text-slate-800">& Customers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our WhatsApp platform creates value for both your business operations and customer experience
          </p>
        </div>

        {/* Benefits Sections */}
        <div className="space-y-16">
          {/* Business Benefits */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">For Businesses</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Streamline operations, reduce costs, and scale your customer engagement
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br ${benefit.bgColor} rounded-3xl border border-white/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105 hover-lift animate-slide-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full group-hover:w-12 transition-all duration-300`}
                      ></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Benefits */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">For Customers</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Enjoy faster support, personalized service, and convenient self-service options
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {customerBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group p-8 bg-gradient-to-br ${benefit.bgColor} rounded-3xl border border-white/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-105 hover-lift animate-slide-in-up`}
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                        {benefit.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-1 bg-gradient-to-r ${benefit.color} rounded-full group-hover:w-12 transition-all duration-300`}
                      ></div>
                      <div className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-cyan-400 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                50%
              </div>
              <div className="text-slate-600 font-medium">Faster Response</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-slate-600 font-medium">Availability</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-slate-600 font-medium">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
