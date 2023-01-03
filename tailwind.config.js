const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Acid: "Acid",
      DEFAULT: "RuckSack",
    },
    colors: {
      black: "#484848",
      white: "#fff",
      blue: "#0000EE",
      gold1: "#fa9964",
      gold2: "#aa5e3a",
      gold3: "#d3784b",
      gold4: "#8b4b30",
      gold5: "#ffa26a",
    },

    fontSize: {
      sm: ["0.938rem", "1.325rem"],
      base: ["1.1rem", "1.625rem"],
      md: ["1.15rem", "1.725rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.375rem", "1.825rem"],
      "2xl": ["1.75rem", "2.125rem"],
    },
    fontWeight: {
      light: "300",
      DEFAULT: "400",
      semiBold: "400",
      bold: "700",
    },
    screens: {
      tablet: "750px",
      desktop: "1000px",
      overlay: "1250px",
    },
    extend: {
      backgroundImage: {
        flowers: "url('/general/peonies-background-tumblr-7-2.webp')",
        golden: "url('/general/gold.webp')",
      },
    },
  },
  plugins: [],
};
