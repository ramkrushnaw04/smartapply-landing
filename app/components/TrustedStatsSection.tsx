"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdBolt, MdVerified, MdAutoAwesome, MdSupportAgent } from "react-icons/md";
import { IconType } from "react-icons";
import GradientButton from "@/app/components/ui/GradientButton";
import GradientHeading from "@/app/components/ui/GradientHeading";

interface Feature {
  icon: IconType;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: MdBolt,
    title: "Smart Job Matching",
    desc: "Instantly discover roles that align with your resume, interests, and goals.",
  },
  {
    icon: MdVerified,
    title: "Verified Employers",
    desc: "Connect only with authentic, verified companies and hiring managers.",
  },
  {
    icon: MdAutoAwesome,
    title: "AI Resume Screening",
    desc: "Get instant feedback and tailored insights to strengthen your resume.",
  },
  {
    icon: MdSupportAgent,
    title: "24/7 Career Support",
    desc: "Our smart assistant and support team guide you every step of the way.",
  },
];

interface GlassyCardProps {
  title: string;
  description: string;
}

const GlassyCard: React.FC<GlassyCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="p-6 rounded-3xl backdrop-blur-md border border-white/10 bg-white/5 shadow-lg hover:shadow-xl transition-all"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.12), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.12), transparent 90%)",
      }}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const TrustedEcosystemSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className=" content relative w-full py-24 px-6 sm:px-12 my-10 shadow-2xl"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(190,136,255,0.15), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.15), transparent 90%), #18181b",
      }}
      data-bg = 'dark'
    >
      {/* <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
        className="text-white  text-center font-medium text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 max-w-4xl mx-auto"
      >
        We've Built A Trusted Ecosystem That Supports{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
          Thousands Of Job Seekers And
        </span>{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
          Recruiters
        </span>{" "}
        Around The Globe — Fast, Reliable, And Results-Driven
      </motion.h2> */}

        <div className="m-auto max-w-screen-xl mb-12">
      <GradientHeading
        leftText="We've Built A Trusted Ecosystem That Supports"
        highlightText="Thousands Of Job Seekers And Recruiters"
        rightText="Around The Globe — Fast, Reliable, And Results-Driven."
        theme="dark"
        align="center"
      />

        </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4 max-w-screen-lg m-auto">
        {features.map((feature, i) => (
          <GlassyCard  
            key={feature.title}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>



        <GradientButton 
        size="md"
        className="mt-12 mx-auto block"
        onClick={() => {}}
        >Join Us Today</GradientButton>


    </motion.section>
  );
};

export default TrustedEcosystemSection;
