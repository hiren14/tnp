/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wave: {
          to: {
            "margin-left": "-51%"
          }
        }
      },
    
    animation: {
      wave: "wave 1.5s ease-in-out infinite"
    }
  },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
