import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "32px"],
      "4xl": ["32px", "38px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "58px"],
      "7xl": ["64px", "74px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        "ars-cyan": "#0590C8",
        "ars-gray": "#505B66",
        "ice-blue": "#D7EFF9",
        "deep-blue": "#0B1E59",
      },
    },
  },
  plugins: [],
} satisfies Config;
