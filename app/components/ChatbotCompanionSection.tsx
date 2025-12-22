"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, PenTool, FileText, Mail, Target, Send, Mic, Paperclip } from "lucide-react";
import { LucideIcon } from "lucide-react";
import GradientHeading from "@/app/components/ui/GradientHeading";
import GradientButton from "@/app/components/ui/GradientButton";

export const ChatbotCanvas: React.FC = () => {
    return (
        <div className="relative w-[320px] sm:w-[360px] md:w-[400px]">
            {/* back device */}
            {/* <div className="absolute inset-0 translate-x-5 -translate-y-5 scale-95 rounded-[2rem] bg-white border border-gray-200 shadow-xl" /> */}

            {/* front device */}
            <div className="relative w-full rounded-[2rem] bg-white border border-gray-200 shadow-2xl overflow-hidden">
                {/* header */}
                <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-gray-200 bg-white">
                            <Bot className="h-6 w-6 text-gray-700" />
                        </div>
                        <p className="text-sm font-semibold text-gray-900">AI‑Companion</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-indigo-100 to-pink-100 text-gray-800 border border-indigo-200">
                        Smart
                    </span>
                </div>

                {/* chat body */}
                {/* chat body: shorter height, exactly 3 messages, keep thinking bubble */}
                <div className="p-4 bg-gray-50 space-y-2 h-[420px] overflow-auto overscroll-contain">
                    {/* 1) user */}
                    <div className="flex justify-end">
                        <div
                            className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2 text-xs shadow border border-pink-200/60"
                            style={{ backgroundColor: "rgba(244,114,182,0.18)", color: "#111827" }}
                        >
                            I'm applying for Front‑End roles. Help me prep fast.
                        </div>
                    </div>

                    {/* 2) ai */}
                    <div className="flex justify-start">
                        <div className="max-w-[82%] rounded-2xl rounded-bl-sm px-4 py-2 text-xs text-gray-900 border border-gray-200 shadow-sm bg-white">
                            Choose an action: cover letter, resume review, cold email, or job tips. I'll keep your context intact.
                        </div>
                    </div>

                    {/* 3) user */}
                    <div className="flex justify-end">
                        <div
                            className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2 text-xs shadow border border-pink-200/60"
                            style={{ backgroundColor: "rgba(244,114,182,0.18)", color: "#111827" }}
                        >
                            Review my resume first.
                        </div>
                    </div>

                    {/* AI thinking bubble (frozen mid-bounce) */}
                    <div className="flex justify-start">
                        <div className="inline-flex items-center gap-1.5 max-w-[60%] rounded-2xl rounded-bl-sm px-4 py-2 text-xs text-gray-900 border border-gray-200 shadow-sm bg-white">
                            <span className="relative flex items-end gap-1 h-4">
                                <span className="inline-block h-2 w-2 rounded-full bg-gray-500" style={{ transform: "translateY(-2px)" }} />
                                <span className="inline-block h-2 w-2 rounded-full bg-gray-400" style={{ transform: "translateY(-1px)" }} />
                                <span className="inline-block h-2 w-2 rounded-full bg-gray-300" style={{ transform: "translateY(-3px)" }} />
                            </span>
                            <span className="text-[10px] text-gray-500 ml-1">AI is thinking…</span>
                        </div>
                    </div>
                </div>


                {/* composer */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-200">
                    <button disabled aria-label="Voice input" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 bg-white">
                        <Mic className="h-4 w-4" />
                    </button>
                    <button disabled aria-label="Attach file" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 bg-white">
                        <Paperclip className="h-4 w-4" />
                    </button>
                    <input
                        disabled
                        className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Message AI‑Companion…"
                    />
                    <button disabled className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-300 to-pink-300 text-white text-xs font-semibold shadow  transition inline-flex items-center gap-1">
                        <Send className="h-4 w-4" />
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

interface ActionItem {
    icon: React.ReactNode;
    title: string;
}

const ChatbotCompanionSection: React.FC = () => {
    const actionItems: ActionItem[] = [
        { icon: <PenTool className="h-6 w-6 text-pink-300" />, title: "Write a clear and effective job cover letter draft quickly now" },
        { icon: <FileText className="h-6 w-6 text-pink-300" />, title: "Review and carefully refine my detailed resume today" },
        { icon: <Mail className="h-6 w-6 text-pink-300" />, title: "Generate a catchy, professional cold email template instantly" },
        { icon: <Target className="h-6 w-6 text-pink-300" />, title: "View detailed job insights and actionable tips weekly" },
    ];

    return (
        <section id="ai-companion" data-bg='light' className="content relative  px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-white">
            <div className="relative w-full max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: chatbot canvas */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=" flex justify-center"
                >
                    <div className="relative w-[320px] sm:w-[360px] md:w-[400px]">
                        {/* back device */}
                        {/* <div className="absolute inset-0 translate-x-5 -translate-y-5 scale-95 rounded-[2rem] bg-white border border-gray-200 shadow-xl" /> */}

                        {/* front device */}
                        <div className="relative w-full rounded-[2rem] bg-white border border-gray-200 shadow-2xl overflow-hidden">
                            {/* header */}
                            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between bg-white">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-gray-200 bg-white">
                                        <Bot className="h-6 w-6 text-gray-700" />
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900">AI‑Companion</p>
                                </div>
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-indigo-100 to-pink-100 text-gray-800 border border-indigo-200">
                                    Smart
                                </span>
                            </div>

                            {/* chat body */}
                            {/* chat body: shorter height, exactly 3 messages, keep thinking bubble */}
                            <div className="p-4 bg-gray-50 space-y-2 h-[420px] overflow-auto overscroll-contain">
                                {/* 1) user */}
                                <div className="flex justify-end">
                                    <div
                                        className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2 text-xs shadow border border-pink-200/60"
                                        style={{ backgroundColor: "rgba(244,114,182,0.18)", color: "#111827" }}
                                    >
                                        I'm applying for Front‑End roles. Help me prep fast.
                                    </div>
                                </div>

                                {/* 2) ai */}
                                <div className="flex justify-start">
                                    <div className="max-w-[82%] rounded-2xl rounded-bl-sm px-4 py-2 text-xs text-gray-900 border border-gray-200 shadow-sm bg-white">
                                        Choose an action: cover letter, resume review, cold email, or job tips. I'll keep your context intact.
                                    </div>
                                </div>

                                {/* 3) user */}
                                <div className="flex justify-end">
                                    <div
                                        className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2 text-xs shadow border border-pink-200/60"
                                        style={{ backgroundColor: "rgba(244,114,182,0.18)", color: "#111827" }}
                                    >
                                        Review my resume first.
                                    </div>
                                </div>

                                {/* AI thinking bubble (frozen mid-bounce) */}
                                <div className="flex justify-start">
                                    <div className="inline-flex items-center gap-1.5 max-w-[60%] rounded-2xl rounded-bl-sm px-4 py-2 text-xs text-gray-900 border border-gray-200 shadow-sm bg-white">
                                        <span className="relative flex items-end gap-1 h-4">
                                            <span className="inline-block h-2 w-2 rounded-full bg-gray-500" style={{ transform: "translateY(-2px)" }} />
                                            <span className="inline-block h-2 w-2 rounded-full bg-gray-400" style={{ transform: "translateY(-1px)" }} />
                                            <span className="inline-block h-2 w-2 rounded-full bg-gray-300" style={{ transform: "translateY(-3px)" }} />
                                        </span>
                                        <span className="text-[10px] text-gray-500 ml-1">AI is thinking…</span>
                                    </div>
                                </div>
                            </div>


                            {/* composer */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-200">
                                <button disabled aria-label="Voice input" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 bg-white">
                                    <Mic className="h-4 w-4" />
                                </button>
                                <button disabled aria-label="Attach file" className="h-9 w-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 bg-white">
                                    <Paperclip className="h-4 w-4" />
                                </button>
                                <input
                                    disabled
                                    className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200"
                                    placeholder="Message AI‑Companion…"
                                />
                                <button disabled className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-300 to-pink-300 text-white text-xs font-semibold shadow  transition inline-flex items-center gap-1">
                                    <Send className="h-4 w-4" />
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: vertical action pills */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className=" m-auto p-4 sm:p-0"
                >

                    <div className="mb-12">
                        <GradientHeading
                            leftText="Meet Your"
                            highlightText="AI‑Companion"
                            rightText="At Your Side"
                            theme="light"
                            align="left"
                        />
                    </div>



                    <ul className="mt-6 grid grid-cols-1 gap-4 text-lg">
                        {actionItems.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                                className="w-full    bg-white text-gray-900   inline-flex items-center justify-between"
                            >
                                <span className="inline-flex items-center gap-3">
                                    {item.icon}
                                    {item.title}
                                </span>
                                {/* <span className="text-xs text-gray-500">{item.action}</span> */}
                            </motion.li>
                        ))}
                    </ul>


                    <GradientButton
                        size="md"
                        className="mt-10"
                        align="left"
                        onClick={() => {}}
                    >
                        Get Started with AI‑Companion
                    </GradientButton>



                </motion.div>
            </div>
        </section>
    );
};

export default ChatbotCompanionSection;
