import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      background: {
        light: "#F8F9D7",
        dark: "#000",
      },
      primary: {
        light: "#4B0096",
        soft: "#D9D9D9"
      },
      secondary: {
        light: "#FF4949",
      },
      border: {
        light: "#4B0096"
      },
      success: {
        light: "#9DDE8B",
        dark: "#006769"
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-clash-display)']
      }
    },
  },
  plugins: [],
};
export default config;
