"use client";

import React from "react";
import { BadgeCheck, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import JobCard from "@/app/components/job-cards/JobCard";
import GradientHeading from "@/app/components/ui/GradientHeading";
import GradientButton from "@/app/components/ui/GradientButton";


const ProjectCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute left-2/3 bottom-0 translate-y-2 md:static md:-translate-y-0 bg-gray-100/10 backdrop-blur-[5px] border border-gray-300/20 rounded-3xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col w-[300px] md:w-[320px]"
    >
      <div className="font-bold text-lg mb-4">Video Stream Project</div>
      <div className="flex items-center gap-6 mb-2">
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Client"
            className="w-9 h-9 rounded-full object-cover border border-gray-200 mb-1"
          />
          <span className="text-xs text-gray-900">Client</span>
        </div>
        <div className="flex-1 h-2 bg-orange-300 rounded-full mx-1" />
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="Independent"
            className="w-9 h-9 rounded-full object-cover border border-gray-200 mb-1"
          />
          <span className="text-xs text-white">Independent</span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="bg-green-100 text-green-700 rounded-full px-4 py-1 text-xs font-semibold">
          In Progress
        </span>
      </div>
    </motion.div>
  );
};

const HeroOpportunitiesSection: React.FC = () => {
  const features: string[] = [
    "Build your profile to showcase real skills, not just job titles",
    "Discover high-quality opportunities that match your potential",
    "Connect with trusted employers who are hiring globally",
  ];

  return (
    <section
      className="content w-full min-h-[550px] flex items-center justify-center px-3 py-12 sm:py-24"
      style={{
        background:
          "radial-gradient(ellipse 80% 65% at 20% 30%, rgba(190,136,255,0.09), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.18), transparent 90%), #18181b",
      }}
      data-bg = 'dark'
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Cards - left */}
        <div className="relative flex flex-col gap-7 items-center md:items-start">
          {/* Job Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-10"
          >
            <JobCard />
          </motion.div>

          {/* Project Card */}
          <div className="absolute top-[400px] left-10 sm:top-[240px] sm:left-40 z-10 shadow-xl"> 
            <ProjectCard />
          </div>
        </div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-1 max-w-2xl md:ml-48 mt-10 sm:mt-0 px-4"
        >
          
          <div className="mb-12">
            <GradientHeading
                leftText="Next-Level Opportunities,"
                highlightText="All In One Place"
                rightText=""
                theme="dark"
                align="left"
                />
          </div>



          <ul className="space-y-4 text-lg text-gray-200 mb-10">
            {features.map((text, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                {index === 0 && <BadgeCheck className="w-6 h-6 text-indigo-400" />}
                {index === 1 && <Search className="w-6 h-6 text-indigo-400" />}
                {index === 2 && <Users className="w-6 h-6 text-indigo-400" />}
                {text}
              </motion.li>
            ))}
          </ul>

        
            <GradientButton
                size="md"
                align="left"
                onClick={() => {}}
            >

            Start Exploring Now
            </GradientButton>


        </motion.div>
      </div>
    </section>
  );
};

export default HeroOpportunitiesSection;
