import { Play, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConvoboxRitual() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-cyan-50 relative overflow-hidden">
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
            <Play className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">See It In Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Watch How It</span>
            <br />
            <span className="text-slate-800">Transforms Your Business</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See our WhatsApp platform in action with a personalized demo tailored to your business needs
          </p>
        </div>

        {/* Demo Video Section */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 shadow-xl shadow-cyan-500/10 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full"></div>
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full"></div>

            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10"></div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              {/* Video Preview Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">WhatsApp Business Platform Demo</h3>
                  <p className="text-sm text-slate-600">
                    See how our platform handles customer conversations, automates responses, and provides analytics
                  </p>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">3:45</div>
              </div>
            </div>

            {/* Demo Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Shared Inbox Demo</h4>
                <p className="text-sm text-slate-600">See team collaboration in action</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Chatbot in Action</h4>
                <p className="text-sm text-slate-600">Watch automated responses work</p>
              </div>

              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Analytics Dashboard</h4>
                <p className="text-sm text-slate-600">View performance insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 p-8 shadow-xl shadow-cyan-500/10 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Ready for a Personalized Demo?</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto">
              Book a live demo with our experts to see exactly how our WhatsApp platform can transform your business
              operations and customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group">
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book a Live Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Full Demo
              </Button>
            </div>

            {/* Demo Benefits */}
            <div className="grid grid-cols-2 gap-4 mt-8 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Personalized to your industry</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>No commitment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>30-minute session</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Q&A with experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
