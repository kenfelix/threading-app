/** @type {import('tailwindcss').Config} */
const konstaConfig = require('konsta/config');

// wrap your config with konstaConfig
module.exports = konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: "#1058A0",
      bg: "#FBFDFF",
      black: "#000000",
      grey: "#666666",
      white: "#FAFAFA",
      telegram: "#30A3E6",
      cream: "#D9D9D9"
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
});

