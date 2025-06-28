"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Bot, Megaphone, ArrowRight, Star, Zap, Users, BarChart3, Globe, Workflow } from "lucide-react"

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const features = [
    {
      id: 1,
      name: "Shared Team Inbox",
      category: "collaboration",
      description:
        "Centralized dashboard where your entire team can access, manage, and respond to all customer WhatsApp conversations in real-time.",
      features: ["Real-time Collaboration", "Message Assignment", "Team Performance"],
      icon: Users,
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      benefit: "Enhanced Team Collaboration",
      rating: 4.9,
    },
    {
      id: 2,
      name: "WhatsApp Chatbot",
      category: "automation",
      description:
        "24/7 automated responses for FAQs, appointments, and order status using intelligent pre-defined templates and AI-powered conversations.",
      features: ["24/7 Auto-Response", "FAQ Handling", "Smart Templates"],
      icon: Bot,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      benefit: "Always-On Customer Support",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Broadcast & Campaigns",
      category: "marketing",
      description:
        "Send targeted mass notifications for promotions, reminders, and updates with comprehensive delivery, read, and reply analytics.",
      features: ["Mass Messaging", "Campaign Analytics", "Targeted Audience"],
      icon: Megaphone,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      benefit: "Boost Lead Generation",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Workflows & Automation",
      category: "automation",
      description:
        "Streamline operations with auto-assignment of chats, drip sequences, and seamless CRM integration via powerful API connections.",
      features: ["Auto-Assignment", "Drip Campaigns", "CRM Integration"],
      icon: Workflow,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      benefit: "Scale Support & Marketing",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Analytics & Reporting",
      category: "insights",
      description:
        "Track key performance metrics including open rates, campaign effectiveness, response times, and customer engagement patterns.",
      features: ["Performance Metrics", "Campaign Analytics", "Response Tracking"],
      icon: BarChart3,
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      benefit: "Rich Insights & Optimization",
      rating: 5.0,
    },
    {
      id: 6,
      name: "Multi-language Support",
      category: "global",
      description:
        "Communicate with customers worldwide using support for up to 100 languages with automatic translation and localized responses.",
      features: ["100+ Languages", "Auto Translation", "Localized Content"],
      icon: Globe,
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      benefit: "Global Customer Reach",
      rating: 4.6,
    },
  ]

  const categories = [
    { id: "all", name: "All Features", count: features.length, icon: Zap },
    {
      id: "collaboration",
      name: "Team Collaboration",
      count: features.filter((p) => p.category === "collaboration").length,
      icon: Users,
    },
    {
      id: "automation",
      name: "Automation",
      count: features.filter((p) => p.category === "automation").length,
      icon: Bot,
    },
    {
      id: "marketing",
      name: "Marketing",
      count: features.filter((p) => p.category === "marketing").length,
      icon: Megaphone,
    },
    {
      id: "insights",
      name: "Analytics",
      count: features.filter((p) => p.category === "insights").length,
      icon: BarChart3,
    },
    {
      id: "global",
      name: "Global",
      count: features.filter((p) => p.category === "global").length,
      icon: Globe,
    },
  ]

  const filteredFeatures =
    activeCategory === "all" ? features : features.filter((feature) => feature.category === activeCategory)

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-cyan-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 shadow-lg shadow-cyan-500/10 mb-6">
            <MessageCircle className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Core Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Everything You Need</span>
            <br />
            <span className="text-slate-800">In One Platform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Powerful WhatsApp business tools designed to scale your customer support, boost marketing campaigns, and
            enhance team collaboration
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white border border-cyan-200 hover:border-cyan-300 hover:scale-105"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
              <Badge
                variant="secondary"
                className={`ml-2 ${
                  activeCategory === category.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFeatures.map((feature, index) => (
            <Card
              key={feature.id}
              className={`group bg-gradient-to-br ${feature.bgGradient} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover-lift animate-slide-in-up overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-slate-600">{feature.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-3">{feature.description}</p>
                    <div className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full inline-block">
                      {feature.benefit}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-slate-500">Key Capabilities:</div>
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((item, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-cyan-300 text-cyan-700 bg-white/50 hover:bg-cyan-50 transition-colors duration-200"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/50">
                    <div className="text-sm font-medium text-slate-600">Learn More</div>
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${feature.gradient} hover:shadow-lg transition-all duration-300 text-white rounded-xl group/btn`}
                    >
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 p-8 shadow-xl shadow-cyan-500/10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Transform Your WhatsApp Business?</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Join 50+ companies already using our platform to scale their customer support and boost marketing
              campaigns with powerful automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105">
                Book a Demo
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50 px-8 py-3 rounded-2xl font-semibold bg-transparent"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
