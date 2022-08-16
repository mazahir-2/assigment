/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/bg.jpg') ",
      },
      colors: {
        primary: "#bd59d4",
        primaryDark: "#591A67",
        shadow: "#bd59d48C",
      },
      fontFamily: {
        sans: ["SourceSansPro-Bold", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
