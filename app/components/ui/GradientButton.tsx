"use client";

import { motion } from "framer-motion";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  size = "md",
  align = "center",
  className = "",
}) => {
  const sizes = {
    xs: "py-1 px-3 text-xs",
    sm: "py-2 px-5 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-3.5 px-10 text-lg",
    xl: "py-4 px-12 text-xl",
    "2xl": "py-5 px-16 text-2xl",
  };

  const alignment = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`block bg-gradient-to-r from-indigo-400 to-pink-400 text-white rounded-full font-semibold shadow-lg hover:opacity-80 active:opacity-90 transition-all duration-200 ${sizes[size]} ${alignment[align]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;
