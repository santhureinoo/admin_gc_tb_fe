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
          DEFAULT: "#992964", // Primary color
          light: "#3B82F6", // Lighter shade of primary
          dark: "#1E40AF",
          pink200: "#F6CCDD", // Darker shade of primary
        },
        secondary: {
          DEFAULT: "#15B0AC", // Secondary color
          light: "#FB923C", // Lighter shade of secondary
          dark: "#C2410C", // Darker shade of secondary
        },
        neutralGrey0: {
          DEFAULT: "#FFFFFF",
        },
        neutralGrey400: {
          DEFAULT: "#9D9D9D",
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
