"use client";

import React from "react";
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

export default function CookiePolicyPage(): React.ReactElement {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <GradientHeading
            leftText="Cookie"
            highlightText="Policy"
            rightText=""
            theme="light"
            align="center"
          />
          <p className="text-gray-600 text-sm mt-4">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg max-w-none"
        >
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a
                website. They are widely used to make websites work more efficiently and provide information to
                the website owners. Cookies allow a website to recognize your device and store some information
                about your preferences or past actions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">
                SmartApply uses cookies and similar tracking technologies to track activity on our website and
                store certain information. We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Analytics Cookies:</strong> Help us analyze website usage and improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="mb-4">
                These cookies are essential for you to browse the website and use its features. Without these
                cookies, services you have asked for cannot be provided. These cookies do not store any personally
                identifiable information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how you use our website, such as which pages you visit
                most often. This data helps us optimize our website and improve user experience. All information
                these cookies collect is aggregated and anonymous.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Functionality Cookies</h3>
              <p className="mb-4">
                These cookies allow the website to remember choices you make (such as your username, language,
                or region) and provide enhanced, more personal features. They may also be used to provide services
                you have requested.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.4 Targeting/Advertising Cookies</h3>
              <p className="mb-4">
                These cookies are used to deliver advertisements relevant to you and your interests. They are also
                used to limit the number of times you see an advertisement and help measure the effectiveness of
                advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                of the Service, deliver advertisements, and so on. These third-party cookies include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> Helps us understand how visitors use our website</li>
                <li><strong>Social Media Cookies:</strong> Enable you to share content on social media platforms</li>
                <li><strong>Advertising Networks:</strong> Help us deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                rights by setting your preferences in your browser settings. Most web browsers allow some control
                of most cookies through the browser settings.
              </p>
              <p className="mb-4">To find out more about cookies, including how to see what cookies have been set
                and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">www.allaboutcookies.org</a>.
              </p>
              <p className="mb-4">Please note that if you choose to disable cookies, some features of our website
                may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Chrome</h3>
                  <p className="mb-2">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mozilla Firefox</h3>
                  <p className="mb-2">Options → Privacy &amp; Security → Cookies and Site Data</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Safari</h3>
                  <p className="mb-2">Preferences → Privacy → Cookies and website data</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Microsoft Edge</h3>
                  <p className="mb-2">Settings → Privacy, search, and services → Cookies and site permissions</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Do Not Track Signals</h2>
              <p className="mb-4">
                Some browsers incorporate a &quot;Do Not Track&quot; (DNT) feature that signals to websites you visit that
                you do not want to have your online activity tracked. Currently, there is no standard for how
                DNT signals should be interpreted. As a result, we do not currently respond to DNT browser signals
                or mechanisms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting
                the new Cookie Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to
                review this Cookie Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> privacy@smartapply.com</p>
                <p className="mb-2"><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345, USA</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
