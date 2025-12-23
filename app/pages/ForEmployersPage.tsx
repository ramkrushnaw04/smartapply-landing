"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaSearch, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export default function ForEmployersPage(): React.ReactElement {
  const features: Feature[] = [
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Smart Candidate Matching",
      description: "Find the perfect candidates using our AI-powered matching system that analyzes skills, experience, and cultural fit."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Access Top Talent",
      description: "Connect with qualified candidates actively seeking new opportunities in your industry."
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Faster Hiring",
      description: "Reduce time-to-hire with our streamlined application process and automated candidate screening."
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Analytics & Insights",
      description: "Track your hiring metrics and get insights into candidate engagement and application quality."
    }
  ];

  const benefits: string[] = [
    "Post unlimited job listings",
    "AI-powered candidate matching",
    "Access to candidate profiles and resumes",
    "Automated application management",
    "Dedicated account manager",
    "Custom branding options",
    "Advanced analytics dashboard",
    "Integration with ATS systems"
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "Up to 5 active job postings",
        "Basic candidate matching",
        "Resume database access",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      features: [
        "Up to 20 active job postings",
        "Advanced AI matching",
        "Priority candidate access",
        "Dedicated support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited job postings",
        "Custom AI matching",
        "White-label options",
        "Dedicated account manager",
        "API access",
        "Custom integrations"
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GradientHeading
            leftText="Hire Smarter with"
            highlightText="SmartApply"
            rightText=""
            theme="light"
            align="center"
          />
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Find the best talent faster with our AI-powered hiring platform. Connect with qualified candidates
            and streamline your recruitment process.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose SmartApply for Hiring?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-indigo-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg border-2 ${
                  plan.popular
                    ? "border-indigo-600 scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <FaCheckCircle className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Join hundreds of companies already using SmartApply to find their next great hire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Schedule a Demo
            </a>
            <a
              href="/contact-us"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
