"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaComments, FaLightbulb, FaClock } from "react-icons/fa";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

export default function AICompanionPage(): React.ReactElement {
  const features: Feature[] = [
    {
      icon: <FaComments className="text-4xl" />,
      title: "24/7 Support",
      description: "Get instant answers to your career questions anytime, anywhere."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Career Advice",
      description: "Receive personalized career guidance based on your goals and experience."
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Smart Matching",
      description: "AI-powered job matching that understands your preferences and skills."
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Application Help",
      description: "Get help with cover letters, interview prep, and application strategies."
    }
  ];

  const useCases: UseCase[] = [
    {
      title: "Job Search Assistance",
      description: "Ask our AI companion to help you find jobs that match your skills and interests."
    },
    {
      title: "Resume Optimization",
      description: "Get suggestions on how to improve your resume for specific job applications."
    },
    {
      title: "Interview Preparation",
      description: "Practice interview questions and get feedback on your answers."
    },
    {
      title: "Career Planning",
      description: "Discuss your career goals and get personalized advice on your next steps."
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
            leftText="Your AI"
            highlightText="Career Companion"
            rightText=""
            theme="light"
            align="center"
          />
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-6">
            Meet your personal career assistant powered by advanced AI. Get instant help with job searching,
            resume building, interview prep, and career planning—all in one place.
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

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            How Our AI Companion Helps You
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Chat Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Example Conversation
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-gray-100 p-4 rounded-2xl">
              <p className="text-gray-700 font-medium mb-2">You:</p>
              <p className="text-gray-900">&quot;I&apos;m looking for software engineering jobs in San Francisco. What should I focus on?&quot;</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-2xl">
              <p className="text-indigo-700 font-medium mb-2">AI Companion:</p>
              <p className="text-gray-900">
                &quot;Based on your profile, I found 15 software engineering positions in San Francisco that match your skills. 
                I recommend focusing on positions at companies like TechCorp and StartupXYZ, as they align with your experience 
                in React and Node.js. Would you like me to help you tailor your resume for these positions?&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Meet Your AI Career Companion?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Start chatting with our AI assistant and get personalized career guidance today.
          </p>
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
}
