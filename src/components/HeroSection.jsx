"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, MessageCircle, Zap, Users } from "lucide-react";

export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-28"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-emerald-50 to-blue-50"></div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "6s",
            }}
          />
        ))}

        {/* Blob Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10 blob"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-purple-300/10 blob"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Curved Side Elements */}
        <div
          className="absolute top-0 left-0 w-96 h-[60rem] bg-teal-100/70 mask-gradient-to-b animate-fade-slide-up-far"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            borderTopRightRadius: "100%",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-96 h-[60rem] bg-teal-100/70 mask-gradient-to-b animate-fade-slide-up-far"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            borderTopLeftRadius: "100%",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-cyan-200 shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-5 h-5 text-cyan-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-slate-700">
              WhatsApp Business Solution
            </span>
            <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 relative">
            {/* Graffiti ZOHFY watermark */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] opacity-20">
              <img
                src="https://fontmeme.com/permalink/250627/1910c251164f18bbc23af8f933e57b68.png"
                alt="ZOHFY graffiti logo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight relative">
              <span className="gradient-text ">Transform Your</span>
              <br />
              <span className="text-slate-800">WhatsApp Business</span>
              <br />
              <span className="gradient-text">Into a Powerhouse</span>
            </h1>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Scale your customer support and marketing with
            <span className="text-cyan-600 font-semibold">
              {" "}
              automated chatbots
            </span>
            ,
            <span className="text-emerald-600 font-semibold">
              {" "}
              team collaboration
            </span>
            , and
            <span className="text-blue-600 font-semibold">
              {" "}
              powerful analytics
            </span>
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 py-6">
            <div className="flex items-center space-x-2 text-cyan-600">
              <MessageCircle className="w-6 h-6" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex items-center space-x-2 text-emerald-600">
              <Users className="w-6 h-6" />
              <span className="text-sm font-medium">Team Inbox</span>
            </div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="flex items-center space-x-2 text-blue-600">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-medium">Automation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:border-cyan-400 bg-transparent"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </div>

          {/* Trial Info */}
          <p className="text-sm text-slate-500 font-medium">
            14-day trial • No setup fee • Cancel anytime
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <div className="text-slate-600 font-medium">
                Trusted Companies
              </div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/25">
                <span className="text-2xl font-bold text-white">50%</span>
              </div>
              <div className="text-slate-600 font-medium">
                Faster Response Time
              </div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <div className="text-slate-600 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
