"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedin, 
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import GradientHeading from "@/app/components/ui/GradientHeading";
import config from "@/app/config/env";

const Footer: React.FC = () => {

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="content w-full px-4 pt-16 pb-8 mt-12 bg-gray-50"
      data-bg="light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16 mb-12">
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <GradientHeading
                leftText=""
                highlightText="SmartApply"
                rightText=""
                theme="light"
                align="left"
              />

              <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight text-gray-900">
                Stay Connected <br />With SmartApply
              </h2>

              <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl leading-7">
                Follow us on social media to never miss a job opportunity, career insights, and expert hiring tips.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 text-gray-700">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaTiktok />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-2xl md:text-3xl hover:text-indigo-600 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Navigation & Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            className="flex flex-1 flex-col sm:flex-row gap-10 lg:gap-16"
          >
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 mb-4 font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-3 text-base md:text-lg">
                <li>
                  <Link 
                    href="/"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resume-builder"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ai-companion"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    AI Companion
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faqs"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-gray-900 mb-4 font-semibold text-lg">Company</h4>
              <ul className="space-y-3 text-base md:text-lg">
                <li>
                  <Link 
                    href="/contact-us"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a 
                    href={config.getLoginUrl()} 
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a 
                    href={config.getSignupUrl()} 
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <Link 
                    href="/for-employers"
                    className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    For Employers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-gray-900 mb-4 font-semibold text-lg">Contact</h4>
              <ul className="text-gray-700 text-base md:text-lg space-y-3">
                <li className="flex items-start gap-3">
                  <FaPhone className="text-indigo-600 mt-1 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-indigo-600 mt-1 shrink-0" />
                  <a 
                    href="mailto:contact@smartapply.com" 
                    className="hover:text-indigo-600 transition-colors duration-200"
                  >
                    contact@smartapply.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-indigo-600 mt-1 shrink-0" />
                  <span>123 Innovation Drive, Tech City, TC 12345, USA</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600"
        >
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} SmartApply. A product of Gradly Social Inc. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-indigo-600 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-indigo-600 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-indigo-600 transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </motion.div>

        {/* Company Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
          className="text-center mt-6 pt-6 border-t border-gray-200"
        >

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
