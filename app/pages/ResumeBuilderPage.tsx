"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaMagic, FaDownload, FaCheckCircle } from "react-icons/fa";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ResumeBuilderPage(): React.ReactElement {
  const features: Feature[] = [
    {
      icon: <FaMagic className="text-4xl" />,
      title: "AI-Powered Builder",
      description: "Our intelligent system helps you create a professional resume tailored to your industry."
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      title: "Multiple Templates",
      description: "Choose from a variety of professionally designed templates that match your style."
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: "ATS-Friendly",
      description: "Optimized for Applicant Tracking Systems to ensure your resume gets noticed."
    },
    {
      icon: <FaDownload className="text-4xl" />,
      title: "Export Options",
      description: "Download your resume in PDF, Word, or LaTeX format for maximum compatibility."
    }
  ];

  const benefits: string[] = [
    "Professional formatting that stands out",
    "Keyword optimization for better visibility",
    "Industry-specific suggestions",
    "Real-time preview and editing",
    "Multiple format exports",
    "Free templates and examples"
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
            leftText="Build a"
            highlightText="Winning Resume"
            rightText="in Minutes"
            theme="light"
            align="center"
          />
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Create a professional, ATS-optimized resume that gets you noticed by employers.
            Our AI-powered builder makes it easy to craft the perfect resume for any job.
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Use Our Resume Builder?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-indigo-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Started Now</h3>
              <p className="text-gray-600 mb-6">
                Start building your professional resume today. It&apos;s free and takes just a few minutes.
              </p>
              <a
                href="/signup"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Create Your Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Simple Steps to Your Perfect Resume
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Information</h3>
              <p className="text-gray-600">
                Fill in your work experience, education, and skills. Our AI will help optimize your content.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose a Template</h3>
              <p className="text-gray-600">
                Select from our collection of professional templates designed for your industry.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Download &amp; Apply</h3>
              <p className="text-gray-600">
                Export your resume and start applying to jobs with confidence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
