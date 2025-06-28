"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  X,
  Briefcase,
  Zap,
  Crown,
  DollarSign,
  Sparkles,
} from "lucide-react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const pricingData = {
    monthly: [
      {
        icon: Briefcase,
        title: "For Small Business",
        name: "Starter",
        price: "₹2,999",
        originalPrice: null,
        period: "month",
        features: [
          "Shared Inbox",
          "Chatbot",
          "Limited Broadcasts",
          "24/7 Dedicated Support",
        ],
        unavailable: ["API Access"],
        buttonText: "Start Free",
        buttonType: "primary",
        cardType: "starter",
      },
      {
        icon: Zap,
        title: "For Growing Business",
        name: "Pro",
        price: "₹5,999",
        originalPrice: null,
        period: "month",
        features: [
          "Everything in Starter, Plus:",
          "Unlimited Broadcasts",
          "API Access",
          "24/7 Dedicated Support",
        ],
        unavailable: [],
        buttonText: "Enquire Now",
        buttonType: "secondary",
        cardType: "pro",
      },
      {
        icon: Crown,
        title: "For Large Organizations",
        name: "Enterprise",
        price: "Custom",
        originalPrice: null,
        period: "pricing",
        features: [
          "Everything in Pro, Plus:",
          "Custom Integrations",
          "Advanced Analytics",
          "Priority Support",
          "Dedicated Account Manager",
        ],
        unavailable: [],
        buttonText: "Enquire Now",
        buttonType: "secondary",
        cardType: "enterprise",
      },
    ],
    yearly: [
      {
        icon: Briefcase,
        title: "For Small Business",
        name: "Starter",
        price: "₹29,999",
        originalPrice: "₹35,988",
        period: "year",
        features: [
          "Shared Inbox",
          "Chatbot",
          "Limited Broadcasts",
          "24/7 Dedicated Support",
          "2 Months Free",
        ],
        unavailable: ["API Access"],
        buttonText: "Start Free",
        buttonType: "primary",
        cardType: "starter",
      },
      {
        icon: Zap,
        title: "For Growing Business",
        name: "Pro",
        price: "₹59,999",
        originalPrice: "₹71,988",
        period: "year",
        features: [
          "Everything in Starter, Plus:",
          "Unlimited Broadcasts",
          "API Access",
          "24/7 Dedicated Support",
          "2 Months Free",
        ],
        unavailable: [],
        buttonText: "Enquire Now",
        buttonType: "secondary",
        cardType: "pro",
      },
      {
        icon: Crown,
        title: "For Large Organizations",
        name: "Enterprise",
        price: "Custom",
        originalPrice: null,
        period: "pricing",
        features: [
          "Everything in Pro, Plus:",
          "Custom Integrations",
          "Advanced Analytics",
          "Priority Support",
          "Dedicated Account Manager",
          "Volume Discounts",
        ],
        unavailable: [],
        buttonText: "Enquire Now",
        buttonType: "secondary",
        cardType: "enterprise",
      },
    ],
  };

  const currentPlans = pricingData[billingPeriod];

  const getCardGradient = (cardType) => {
    switch (cardType) {
      case "starter":
        return "from-cyan-50 to-blue-50";
      case "pro":
        return "from-emerald-50 to-teal-50";
      case "enterprise":
        return "from-purple-50 to-pink-50";
      default:
        return "from-slate-50 to-slate-100";
    }
  };

  const getIconGradient = (cardType) => {
    switch (cardType) {
      case "starter":
        return "from-cyan-500 to-blue-500";
      case "pro":
        return "from-emerald-500 to-teal-500";
      case "enterprise":
        return "from-purple-500 to-pink-500";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  const getButtonStyle = (buttonType, cardType) => {
    if (buttonType === "primary") {
      return `bg-gradient-to-r ${getIconGradient(
        cardType
      )} hover:shadow-lg transition-all duration-300 text-white rounded-xl font-semibold transform hover:scale-105`;
    }
    return "border border-slate-800 text-cyan-700 hover:bg-cyan-50 rounded-xl font-semibold bg-transparent transition-all duration-300 transform hover:scale-105";
  };

  return (
    <section id="pricing" className="py-20  relative overflow-hidden pb-12">
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
            <DollarSign className="w-5 h-5 text-cyan-500 mr-2" />
            <span className="text-sm font-medium text-slate-700">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-6">
            <span className="gradient-text">Choose Your Perfect</span>
            <br />
            <span className="text-slate-800">WhatsApp Plan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Start with our free trial, then choose the plan that scales with
            your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-200 p-2 shadow-lg">
            <div className="relative flex">
              {/* Sliding Background */}
              <div
                className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform ${
                  billingPeriod === "yearly"
                    ? "translate-x-full"
                    : "translate-x-0"
                }`}
              />

              {/* Buttons */}
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`relative z-10 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingPeriod === "monthly"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`relative z-10 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  billingPeriod === "yearly"
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-14 mb-16">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative overflow-hidden p-1 rounded-3xl pb-3 "
            >
              {" "}
              {/* Added h-full here */}
              {/* Black background card */}
              <div className="absolute -inset-2 bg-slate-800 rounded-3xl transform translate-y-2 -z-10"></div>
              {/* Decorative element at top left */}
              <svg
                className="absolute top-0 -right-28 w-60 h-40 z-40 rotate-90 scale-y-125"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,0 C100,0 100,100 200,100 C100,100 100,200 0,200 Z"
                  fill="#1e293b"
                />
              </svg>
              {/* Your existing card */}
              <Card
                className={`group m-1 b-2 rounded-3xl bg-gradient-to-br ${getCardGradient(
                  plan.cardType
                )} border-0 shadow-lg hover:shadow-2xl transition-all duration-500  animate-slide-in-up h-full flex flex-col`} /* Added h-full and flex classes */
              >
                <CardContent className="p-8 flex-1 flex flex-col">
                  {" "}
                  {/* Added flex classes */}
                  {/* Popular Badge */}
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${getIconGradient(
                        plan.cardType
                      )} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-500 mb-2">
                      {plan.title}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {plan.name}
                    </h3>

                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold text-slate-800">
                          {plan.price}
                        </span>
                        {plan.period !== "pricing" && (
                          <span className="text-slate-500">/{plan.period}</span>
                        )}
                      </div>
                      {plan.originalPrice && (
                        <div className="text-sm text-slate-500">
                          <span className="line-through">
                            {plan.originalPrice}
                          </span>
                          <span className="ml-2 text-emerald-600 font-semibold">
                            Save ₹
                            {parseInt(plan.originalPrice.replace(/[₹,]/g, "")) -
                              parseInt(plan.price.replace(/[₹,]/g, ""))}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Features - Made this section flex-grow */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span
                          className={`text-slate-700 ${
                            feature.includes("Plus:") ? "font-semibold" : ""
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.unavailable.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 opacity-50"
                      >
                        <div className="w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-500 line-through">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* CTA Button - This stays at the bottom */}
                  <Button
                    className={`w-full py-4 text-lg mt-auto ${getButtonStyle(
                      /* Added mt-auto */
                      plan.buttonType,
                      plan.cardType
                    )}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Features Comparison */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-cyan-200 p-8 shadow-xl shadow-cyan-500/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-slate-800 mb-1">
                  14-Day Free Trial
                </div>
                <div className="text-sm text-slate-600">
                  No credit card required
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-slate-800 mb-1">
                  Setup Support
                </div>
                <div className="text-sm text-slate-600">
                  Free onboarding assistance
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-slate-800 mb-1">
                  99.9% Uptime
                </div>
                <div className="text-sm text-slate-600">
                  Reliable service guarantee
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-slate-800 mb-1">
                  Cancel Anytime
                </div>
                <div className="text-sm text-slate-600">
                  No long-term contracts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
