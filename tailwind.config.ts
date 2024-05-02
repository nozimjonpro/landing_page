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
      height: {
        0.75: "3px",
      },
      colors: {
        silver: "#EFF0F5",
        silverBold: "#E5E6EB",
        dark: "#0C0933",
        brand: "#00AEDA",
        lightViolet: "#D2CCF8",
        yellowish: "#E7F8CC",
        lightGreen: "#CCF8DE",
        lightRed: "#F8CCCC",
      },
      fontFamily: {
        helvetica: ["HelveticaneueCyr", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      inset: {
        "105%": "105%",
      },
      borderRadius: {
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        100: "100px",
      },
    },
  },
  plugins: [],
};
export default config;
