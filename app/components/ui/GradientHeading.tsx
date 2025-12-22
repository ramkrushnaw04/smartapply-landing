"use client";
import { motion } from "framer-motion";
import React from "react";

interface GradientHeadingProps {
  leftText: string;
  highlightText: string;
  rightText: string;
  theme?: string;
  align?: string;
}

const GradientHeading: React.FC<GradientHeadingProps> = ({
  leftText,
  highlightText,
  rightText,
  theme = "dark",
  align = "center", 
}) => {
  const isDark = theme === "dark";

  const baseColor = isDark ? "text-white" : "text-gray-900";
  

  const alignment =
    align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <motion.h1
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`font-bold text-3xl lg:text-5xl mb-8 leading-tight ${baseColor} ${alignment}`}
    >
      {leftText}{" "}
      <span className={"bg-gradient-to-r font-extrabold  from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent"}>
        {highlightText}
      </span>{" "}
      {rightText}
    </motion.h1>
  );
};

export default GradientHeading;
