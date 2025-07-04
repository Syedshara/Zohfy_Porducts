"use client";

import { Linkedin, Twitter, Youtube, Github, ArrowUp } from "lucide-react";

export default function WaveFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pg-footer">
      <footer className="bg-gradient-to-r from-teal-700 to-emerald-700 text-teal-50 relative overflow-hidden">
        {/* Organic background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Wave SVG */}
        <svg
          className="footer-wave-svg w-full h-[30px] md:h-[50px] relative top-[-1px] block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path fill-[#fffff2]"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>

        {/* Main Content */}
        <div className="footer-content max-w-7xl mx-auto px-4 py-10 md:py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 - Logo and Get Started */}
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <h1 className="text-3xl font-bold text-white hover:text-cyan-200 transition-colors">
                    LOGO
                  </h1>
                </a>
                <p className="text-teal-100 mt-4 text-sm">
                  Building the future with innovative solutions.
                </p>
              </div>
              <div className="footer-menu mt-8">
                <h2 className="footer-menu-name text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Get Started
                </h2>
                <ul className="footer-menu-list space-y-3">
                  {["Start", "Documentation", "Installation"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:text-cyan-200 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 group-hover:bg-cyan-200 transition-colors"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 - Company and Legal */}
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Company
                </h2>
                <ul className="footer-menu-list space-y-3">
                  {["Contact", "News", "Careers", "About Us"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:text-cyan-200 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 group-hover:bg-cyan-200 transition-colors"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-menu mt-8">
                <h2 className="footer-menu-name text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Legal
                </h2>
                <ul className="footer-menu-list space-y-3">
                  {["Privacy Notice", "Terms of Use", "Cookie Policy"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-white hover:text-cyan-200 transition-colors flex items-center group"
                        >
                          <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 group-hover:bg-cyan-200 transition-colors"></span>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Column 3 - Quick Links */}
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Quick Links
                </h2>
                <ul className="footer-menu-list space-y-3">
                  {[
                    "Support Center",
                    "Service Status",
                    "Security",
                    "Blog",
                    "Customers",
                    "Reviews",
                    "FAQs",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:text-cyan-200 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-teal-300 rounded-full mr-3 group-hover:bg-cyan-200 transition-colors"></span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Let's Chat
                </h2>
                <p className="footer-call-to-action-description text-teal-100 mb-6 text-sm leading-relaxed">
                  Have a support question or want to discuss a project? We'd
                  love to hear from you.
                </p>
                <a
                  className="footer-call-to-action-button bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-6 rounded-lg inline-block transition-colors shadow-md hover:shadow-lg"
                  href="#"
                >
                  Get in Touch
                </a>
              </div>
              <div className="footer-call-to-action mt-8">
                <h2 className="footer-call-to-action-title text-teal-100 text-sm font-bold uppercase tracking-wider mb-4">
                  Call Us
                </h2>
                <p className="footer-call-to-action-link-wrapper">
                  <a
                    className="footer-call-to-action-link text-white hover:text-cyan-200 transition-colors text-lg font-medium flex items-center"
                    href="tel:0124-64XXXX"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    0124-64XXXX
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-links absolute bottom-0 right-0 h-[54px] w-[236px]">
            <a
              className="footer-social-link absolute p-2 top-[10px] left-[3px] w-[26px] h-[26px] hover:scale-110 transition-transform"
              href="#"
              target="_blank"
            >
              <Linkedin className="w-10 h-10 text-[#fffff2] hover:text-cyan-200 transition-colors" />
            </a>

            <a
              className="footer-social-link absolute p-2 -top-[10px] left-[62px] w-[32px] h-[32px] hover:scale-110 transition-transform"
              href="#"
              target="_blank"
            >
              <Twitter className="w-10 h-10 text-[#fffff2] hover:text-cyan-200 transition-colors" />
            </a>

            <a
              className="footer-social-link absolute p-2 top-[10px] left-[123px] w-[24px] h-[24px] hover:scale-110 transition-transform"
              href="#"
              target="_blank"
            >
              <Youtube className="w-10 h-10 text-[#fffff2] hover:text-cyan-200 transition-colors" />
            </a>

            <a
              className="footer-social-link absolute p-2 -top-[10px] left-[185px] w-[34px] h-[34px] hover:scale-110 transition-transform"
              href="#"
              target="_blank"
            >
              <Github className="w-10 h-10 text-[#fffff2] hover:text-cyan-200 transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright bg-teal-800/30 text-white py-6 px-8 text-center">
          <div className="footer-copyright-wrapper max-w-7xl mx-auto">
            <p className="footer-copyright-text text-sm">
              ©2024. | Designed By: Your Name. | All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
