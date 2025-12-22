"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSectionTextColor } from "@/app/hooks/useSectionTextColor";
import config from "@/app/config/env";

interface NavLink {
    label: string;
    path: string;
}

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const textColor = useSectionTextColor();

    const links: NavLink[] = [
        { label: 'Careers', path: '/careers' },
        { label: 'Resume Builder', path: '/resume-builder' },
        { label: 'AI Companion', path: '/ai-companion' },
        { label: 'FAQS', path: '/faqs' },
        { label: 'Contact Us', path: '/contact-us' },
    ];

    const handleLoginClick = (): void => {
        window.location.href = config.getLoginUrl();
    };

    const handleSignupClick = (): void => {
        window.location.href = config.getSignupUrl();
    };

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            setIsMobile(window.innerWidth < 817);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Mobile Navbar */}
            {isMobile && (
                <motion.nav
                    id="navbar"
                    initial={false}
                    className={`fixed top-0 left-0 right-0 z-50 m-[10px] rounded-[2rem] transition-all duration-300
                        ${(isScrolled || isMenuOpen) ? "backdrop-blur-universal border border-white/30 shadow-2xl" : "border border-white/20"}
                    `}
                >
                    {/* Top bar */}
                    <div className="w-full px-4 py-3 flex items-center justify-between">
                        {(isScrolled || isMenuOpen) ? (
                            <button
                                className="p-2 rounded-full transition-all duration-200 text-black bg-white/10 hover:bg-white/20"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        ) : (
                            <Link 
                                href="/"
                                className="font-extrabold text-2xl sm:text-[1.7rem] leading-[2.1rem] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent cursor-pointer"
                            >
                                SmartApply
                            </Link>
                        )}

                        {(isScrolled || isMenuOpen) ? (
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                    className="px-3 py-1.5 rounded-full text-sm font-semibold bg-white text-black border border-gray-300 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
                                    onClick={handleLoginClick}
                                >
                                    Log In
                                </button>
                                <button
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold  shadow hover:bg-gray-800 transition-all duration-200 whitespace-nowrap ${textColor === "text-gray-900" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300"}`}
                                    onClick={handleSignupClick}
                                >
                                    Sign Up
                                </button>
                            </div>
                        ) : (
                            <button
                                className="p-2 rounded-full transition-all duration-200 text-black bg-white/10 hover:bg-white/20"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        )}
                    </div>

                    {/* Expanded Menu */}
                    <AnimatePresence initial={false}>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    height: { duration: 0.4, ease: "easeInOut" },
                                    opacity: { duration: 0.3 }
                                }}
                                className="overflow-hidden"
                            >
                                <div className={`px-4 pb-6 space-y-4 ${textColor}`}>
                                    <div className="h-px bg-white/20 mb-4"></div>
                                    {links.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.path}
                                            className="block w-full text-left py-3 px-6 border-gray-100/30 bg-gray-100/10 border-[1px] rounded-full hover:text-indigo-500 hover:bg-white/10 font-semibold transition-all duration-200 cursor-pointer"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}

            {/* Desktop Navbar */}
            {!isMobile && (
                <motion.nav
                    id="navbar"
                    initial={false}
                    className={`fixed text-sm mdd:text-[16px]  top-0 left-0 right-0 z-50 transition-all duration-300 rounded-full
                        ${isScrolled ? "m-[10px] backdrop-blur-universal border border-white/30 shadow-2xl" : "m-[5px] "}
                    `}
                >
                    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="font-extrabold text-2xl sm:text-[1.3rem] mdd:text-[1.6rem] leading-[2.1rem] bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent cursor-pointer"
                        >
                            SmartApply
                        </Link>

                        {/* Desktop Menu */}
                        <div className={`flex items-center space-x-6 font-bold ${textColor}`}>
                            {links.map((item, index) => {
                                return <Link 
                                    key={index} 
                                    href={item.path}
                                    className="hover:text-pink-400 font-semibold cursor-pointer transition-colors duration-200 whitespace-nowrap"
                                >{item.label}</Link>
                            })}

                        </div>

                        {/* Desktop Login/Signup */}
                        <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                            <button
                                className="px-4 py-2 rounded-full font-semibold shadow bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
                                onClick={handleLoginClick}
                            >
                                Log In
                            </button>
                            <button
                                className={`px-4 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition-all duration-300 whitespace-nowrap ${textColor === "text-gray-900" ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-300"}`}
                                onClick={handleSignupClick}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </motion.nav>
            )}
        </>
    );
};

export default Navbar;
