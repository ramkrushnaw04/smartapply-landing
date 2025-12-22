"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientHeading from "@/app/components/ui/GradientHeading";
import GradientButton from "@/app/components/ui/GradientButton";
import { Type, ClipboardList, FileDown } from "lucide-react";

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
}

const LatexResumeBuilderSection: React.FC = () => {
    const features: FeatureItem[] = [
        { icon: <Type className="h-6 w-6 text-orange-300" />, title: "Enjoy LaTeX-level precision with perfect visual hierarchy" },
        { icon: <ClipboardList className="h-6 w-6 text-orange-300" />, title: "Ensure ATS-friendly formatting that keeps structure intact" },
        { icon: <FileDown className="h-6 w-6 text-orange-300" />, title: "Export polished PDFs and create role-specific variants" },
    ];

    return (
        <section
            id="resume-builder"
            className="content relative  py-20 sm:py-24 px-6 sm:px-12 lg:px-32 max-w-screen "
            style={{
                background:
                    "radial-gradient(ellipse 80% 65% at 20% 30%, rgba(190,136,255,0.09), transparent 90%), radial-gradient(ellipse 75% 55% at 80% 30%, rgba(89,52,187,0.18), transparent 90%), #18181b",
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mx-auto max-w-screen-2xl">
                {/* Left: dark-friendly heading + bullets */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="content flex flex-col justify-center"
                    data-bg='dark'
                >

                    <div className="">
                        <GradientHeading
                            leftText="Resume Builder with"
                            highlightText="LaTeX"
                            rightText=""
                            theme="dark"
                            align="left"
                        />
                    </div>

                    <ul className="mt-6 grid grid-cols-1 gap-4 text-lg">

                        {features.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                                className="w-full  text-md   text-white   inline-flex items-center justify-between"
                            >
                                <span className="inline-flex  items-center gap-3">
                                    {item.icon}
                                    {item.title}
                                </span>
                                {/* <span className="text-xs text-gray-500">{item.action}</span> */}
                            </motion.li>
                        ))}
                    </ul>


                    <GradientButton
                        size="md"
                        align="left"
                        className="mt-12"
                        onClick={() => {}}
                    >Start Building</GradientButton>


                </motion.div>

                {/* Right: fixed 500px resume width with matched background */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: 0.05, duration: 0.3, ease: "easeOut" }}
                    className="relative flex justify-center"
                >
                    {/* ambient glow for depth on dark */}
                    <div className="pointer-events-none absolute -top-10 -right-6 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-400/20 via-pink-400/20 to-amber-400/20 opacity-60 blur-3xl rounded-full" />

                    {/* Width clamp to 500px */}
                    <div className="relative w-full max-w-[500px]">
                        {/* Back card exactly matched, offset via translate for stack effect */}
                        <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur border border-white/30 shadow-md transform -translate-y-4 translate-x-4" />

                        {/* Front resume at same size */}
                        <div className="relative w-full rounded-2xl bg-white border border-gray-200 shadow-xl ">
                            {/* Semicircle score with glassy 'Excellent' */}
                            <div className="absolute backdrop-blur-[5px] bg-white/6 border border-white/20 p-4 rounded-full overflow-hidden -right-5 -top-10 sm:-right-10 shadow-xl flex flex-col items-center">
                                <div className="relative h-16 w-28 sm:h-20 sm:w-36">
                                    <svg viewBox="0 0 100 50" className="h-full w-full">
                                        <defs>
                                            <linearGradient id="semiGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#818CF8" />
                                                <stop offset="50%" stopColor="#F472B6" />
                                                <stop offset="100%" stopColor="#F59E0B" />
                                            </linearGradient>
                                        </defs>
                                        {/* Track */}
                                        <path d="M10 45 A40 40 0 0 1 90 45" fill="none" stroke="#E5E7EB" strokeWidth="6" strokeLinecap="round" />
                                        {/* Progress (e.g., 88%) */}
                                        <path d="M10 45 A40 40 0 0 1 90 45" fill="none" stroke="url(#semiGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray="88 100" />
                                        {/* Score number */}
                                        <text x="50" y="40" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="800">88</text>
                                    </svg>
                                </div>
                                <span
                                    className="mt-1 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-white/30 backdrop-blur-[8px] bg-green-300"
                                >
                                    Excellent
                                </span>
                            </div>

                            {/* Resume content */}
                            <div data-bg='light' className="content p-7 sm:p-9">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-gray-200 pb-5">
                                    <div>
                                        <p className="text-2xl font-bold text-gray-900 leading-tight">Alex Johnson</p>
                                        <p className="text-sm text-gray-600 mt-0.5">Frontend Engineer • React, TypeScript, Tailwind</p>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        alex.johnson@example.com • github.com/alexj • San Francisco, CA
                                    </div>
                                </div>

                                {/* Summary */}
                                {/* <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900 tracking-wide">SUMMARY</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Frontend engineer with 4+ years building accessible, high‑performance apps. Led refactors that lifted conversion by 14% and shipped component systems across teams.
                  </p>
                </div> */}

                                {/* Experience */}
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 tracking-wide">EXPERIENCE</h4>
                                    <div className="mt-2">
                                        <p className="text-sm font-semibold text-gray-900">Product UI Engineer — PixelCraft</p>
                                        <p className="text-xs text-gray-500">2022 — Present</p>
                                        <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-sm text-gray-700">
                                            <li>Shipped a 40+ component design system; dev time down 22%.</li>
                                            <li>Improved LCP from 3.1s to 1.7s with perf audits and code‑splitting.</li>
                                            <li>Ran A/B tests with +14% conversion on key funnels.</li>
                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-sm font-semibold text-gray-900">Frontend Developer — NovaTech</p>
                                        <p className="text-xs text-gray-500">2020 — 2022</p>
                                        <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-sm text-gray-700">
                                            <li>Responsive dashboards for 50K MAU, role‑based access.</li>
                                            <li>Bundle size reduced by 28% via asset strategy and tree‑shaking.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Projects */}
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 tracking-wide">PROJECTS</h4>
                                    <ul className="list-disc list-outside pl-5 mt-1 space-y-1 text-sm text-gray-700">
                                        <li>Open‑source chart library: 120+ stars, 8 contributors.</li>
                                        <li>Portfolio SPA with i18n and visual regression tests.</li>
                                    </ul>
                                </div>

                                {/* Skills & Education */}
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 tracking-wide">SKILLS</h4>
                                        <p className="text-sm text-gray-700 mt-1">React, TypeScript, Tailwind, Redux, Vitest, Web Vitals</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 tracking-wide">EDUCATION</h4>
                                        <p className="text-sm text-gray-700 mt-1">B.E. Computer Science — 2019</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom-right vertical glassy pills */}
                            <div className="absolute -bottom-4 right-4 flex flex-col items-start w-full gap-2">
                                <span className="px-4 py-2 rounded-full text-sm font-semibold text-gray-800 border  border-white/30 shadow-sm backdrop-blur-[6px] bg-blue-200/70 " >
                                    Live preview
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold text-gray-800 border  border-white/30 shadow-sm backdrop-blur-[6px] bg-purple-200/70 " >
                                    One‑click variants
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold text-gray-800 border  border-white/30 shadow-sm backdrop-blur-[6px] bg-pink-200/70 " >
                                    ATS‑ready
                                </span>
                                <span className="px-4 py-2 rounded-full text-sm font-semibold text-gray-800 border  border-white/30 shadow-sm backdrop-blur-[2px] bg-orange-200/70 " >
                                    PDF export
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default LatexResumeBuilderSection;
