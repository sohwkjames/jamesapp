/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint': "#A2E3C4",
        'darkgreen': "#254D32",
        'white': "#ffffff",
        'offblack': "#181D27",
      },
    },
  },
  plugins: [],
};
