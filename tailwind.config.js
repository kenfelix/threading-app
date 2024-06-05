/** @type {import('tailwindcss').Config} */
import konstaConfig from 'konsta/config';

// wrap your config with konstaConfig
export default konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  konsta: {
    colors: {
      // "primary" is the main app color, if not specified will be default to '#007aff'
      primary: "#0098EA",
      bg: "#FBFDFF",
      black: "#000000",
      grey: "#666666",
      white: "#FAFAFA",
      telegram: "#30A3E6",
      cream: "#D9D9D9",
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
});

