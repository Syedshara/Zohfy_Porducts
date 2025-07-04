"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, MessageCircle, Zap, Users } from "lucide-react";
import img from "@/components/images/robot2.png";
import img2 from "@/components/images/hand.png";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden  pb-28"
    >
      {/* <div className="absolute inset-0 top-[5%] right-[90%] z-10 opacity-50 w-full overflow-hidden  ">
        <img
          src={img2}
          alt="abstract background"
          className="w-1/2 h-full object-cover opacity-1 "
        />
      </div> */}
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
        <div className="absolute top-[15%] left-[55%] w-[50%] h-[57%] bg-gradient-to-br from-cyan-300/30 to-emerald-300/10 blob"></div>
        <div
          className="absolute top-[10%] left-[51%] w-[55%] h-[65%] bg-gradient-to-br from-cyan-400/10 to-purple-300/10 blob"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-10 lg:pt-28 text-center">
        <div className="space-y-8 animate-slide-in-up">
          {/* Badge */}

          <div className="flex flex-col w-full md:flex-row items-center justify-between gap-0">
            <div className="md:w-1/2 space-y-7 pt-9">
              {/* Main Headline */}
              <div className="space-y-6 relative">
                <div className="absolute -z-10 top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full opacity-40">
                  <span
                    className="text-[13rem] font-black text-transparent text-center block"
                    style={{
                      WebkitTextStroke: "2px #26B7A4",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "100% 100%",
                      maskImage:
                        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                      maskRepeat: "no-repeat",
                      maskSize: "100% 100%",
                    }}
                  >
                    DEMO
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-6xl font-bold font-['Poppins'] leading-tight relative">
                  <span className="gradient-text">Transform Your</span>
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
                ,{" "}
                <span className="text-emerald-600 font-semibold">
                  team collaboration
                </span>
                , and{" "}
                <span className="text-blue-600 font-semibold">
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
            </div>

            <div className="md:w-1/2 flex justify-center pt-10">
              <img
                src={img}
                alt="ZOHFY robot with spiral"
                className="w-full min-w-7xl"
                loading="lazy"
                style={{
                  animation: "float 3s ease-in-out infinite",
                }}
              />
            </div>

            <style jsx>{`
              @keyframes float {
                0% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-20px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
            `}</style>
          </div>

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
