import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#992964",
          light: "#3B82F6",
          dark: "#1E40AF",
          pink100: "#FBE8EF",
          pink200: "#F6CCDD",
          pink600: "#992964",
        },
        secondary: {
          DEFAULT: "#15B0AC",
          blueGreen: "#15B0AC",
          light: "#FB923C",
          dark: "#C2410C",
        },
        neutralGrey0: {
          DEFAULT: "#FFFFFF",
        },
        neutralGrey200: {
          DEFAULT: "#F6F6F6",
        },
        neutralGrey400: {
          DEFAULT: "#9D9D9D",
        },
        neutralGrey600: {
          DEFAULT: "#555555",
        },
        neutralGrey800: {
          DEFAULT: "#171717",
          light: "#555555",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
