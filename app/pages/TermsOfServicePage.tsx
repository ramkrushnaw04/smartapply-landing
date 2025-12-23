"use client";

import React from "react";
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import GradientHeading from "@/app/components/ui/GradientHeading";

export default function TermsOfServicePage(): React.ReactElement {
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
            leftText="Terms of"
            highlightText="Service"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing or using SmartApply (&quot;the Service&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not access the Service.
                These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on SmartApply&apos;s website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="mb-4">
                To access certain features of the Service, you must register for an account. When you create an
                account, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Content</h2>
              <p className="mb-4">
                You retain ownership of any content you submit, post, or display on or through the Service
                (&quot;User Content&quot;). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
                license to use, reproduce, modify, and distribute your User Content for the purpose of operating
                and providing the Service.
              </p>
              <p className="mb-4">You agree not to submit User Content that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Is illegal, harmful, or violates any applicable law</li>
                <li>Infringes on the rights of others, including intellectual property rights</li>
                <li>Contains false or misleading information</li>
                <li>Is spam, unsolicited, or contains malicious code</li>
                <li>Violates any person&apos;s privacy or publicity rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Job Applications</h2>
              <p className="mb-4">
                When you apply for jobs through SmartApply, you understand and agree that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We facilitate the connection between job seekers and employers</li>
                <li>We are not responsible for the hiring decisions of employers</li>
                <li>We do not guarantee job placement or interview opportunities</li>
                <li>Employers may contact you directly regarding your application</li>
                <li>You are responsible for the accuracy of information in your applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
              <p className="mb-4">You agree not to use the Service:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code or viruses</li>
                <li>To collect or harvest information about other users</li>
                <li>To impersonate or attempt to impersonate another user or entity</li>
                <li>To interfere with or disrupt the Service or servers</li>
                <li>To use automated systems to access the Service without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content, features, and functionality are owned by SmartApply and Gradly
                Social Inc. and are protected by international copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer</h2>
              <p className="mb-4">
                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted
                by law, SmartApply excludes all representations, warranties, and conditions relating to our
                website and the use of this website. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>The website will be constantly available or available at all</li>
                <li>The information on this website is complete, true, accurate, or non-misleading</li>
                <li>The website will meet your requirements or expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall SmartApply, its directors, employees, partners, agents, suppliers, or affiliates
                be liable for any indirect, incidental, special, consequential, or punitive damages, including
                without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
                from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="mb-4">
                You agree to defend, indemnify, and hold harmless SmartApply and its licensee and licensors, and
                their employees, contractors, agents, officers and directors, from and against any and all
                claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but
                not limited to attorney&apos;s fees).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior
                notice or liability, for any reason whatsoever, including without limitation if you breach the
                Terms. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> legal@smartapply.com</p>
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
