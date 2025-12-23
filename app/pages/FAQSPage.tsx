"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSPage(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: "How does SmartApply match me with jobs?",
      answer: "SmartApply uses advanced AI and machine learning algorithms to analyze your resume, skills, and preferences. We then match you with job opportunities that align with your experience, career goals, and location preferences. Our system continuously learns from your interactions to provide better matches over time."
    },
    {
      question: "Is SmartApply free to use?",
      answer: "Yes! SmartApply offers a free tier that includes basic job matching, resume building, and access to our AI companion. We also offer premium features for users who want advanced matching, priority support, and additional tools. You can upgrade anytime from your dashboard."
    },
    {
      question: "How do I apply to jobs through SmartApply?",
      answer: "Once you create your profile and upload your resume, you can browse job opportunities or let our AI match you with relevant positions. When you find a job you're interested in, simply click 'Apply' and our system will automatically fill out the application using your profile information. You can review and submit with just one click."
    },
    {
      question: "Can I use SmartApply on mobile devices?",
      answer: "Absolutely! SmartApply is fully responsive and works seamlessly on smartphones and tablets. You can search for jobs, apply, and chat with our AI companion from anywhere, at any time."
    },
    {
      question: "How does the AI Companion work?",
      answer: "Our AI Companion is powered by advanced language models that understand context and provide personalized career advice. You can ask questions about job searching, resume optimization, interview preparation, career planning, and more. The AI learns from your profile and previous conversations to give you relevant, tailored advice."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take your privacy and security seriously. All your data is encrypted and stored securely. We never share your personal information with employers without your explicit consent. You can read more about our security practices in our Privacy Policy."
    },
    {
      question: "How accurate is the job matching?",
      answer: "Our job matching system uses semantic analysis and machine learning to understand both your profile and job descriptions. We match based on skills, experience level, location, salary expectations, and career goals. While we can't guarantee a perfect match every time, our system continuously improves and most users find our matches highly relevant."
    },
    {
      question: "Can employers see my profile?",
      answer: "Your profile visibility is completely under your control. You can choose to make your profile visible to employers, keep it private, or only share it when you apply to specific jobs. We respect your privacy and give you full control over who can see your information."
    },
    {
      question: "What file formats can I use for my resume?",
      answer: "You can upload your resume in PDF, Word (.doc, .docx), or text format. Our system can also extract information from images of your resume. Additionally, you can build your resume directly on our platform using our resume builder tool."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the Contact Us page, email us at support@smartapply.com, or use the chat feature in your dashboard. Our support team is available Monday through Friday, 9 AM to 6 PM EST, and we typically respond within 24 hours."
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <GradientHeading
            leftText="Frequently Asked"
            highlightText="Questions"
            rightText=""
            theme="light"
            align="center"
          />
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Find answers to common questions about SmartApply. Can&apos;t find what you&apos;re looking for?
            Contact our support team for assistance.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-indigo-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Get in touch and we&apos;ll respond as soon as possible.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
}
