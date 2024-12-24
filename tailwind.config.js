import {nextui} from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        spinSlow: "spinSlow 3s linear infinite",
        slideDown: "slideDown 0.5s ease-out forwards",
        hoverScaleUp: "hoverScaleUp 0.3s forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        slideDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        hoverScaleUp: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
