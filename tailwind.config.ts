import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // safe to keep if you still use src/
  ],
  theme: {
    extend: {
      borderRadius: {
        universal: "1.5rem",
      },
      width: {
        universal: "200%",
      },
      backdropBlur: {
        universal: "10px",
      },
      boxShadow: {
        universal:
          "0 0 36px rgba(0,0,0,0.14), 0 0 120px 40px rgba(0,0,0,0.15)",
      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdd: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [

  ],
};

export default config;