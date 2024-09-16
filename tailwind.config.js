/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pink-gradient': 'linear-gradient(to right, #831843, #581C87)', // from-pink-900 to-pink-950
      },
      fontFamily: {
        creamCake: ["CreamCake", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainColor: "var(--mainColor)",
        secondColor: "var(--secondColor)",

        mainDarkColor: "var(--mainDarkColor)",
        secondDarkColor: "var(--secondDarkColor)",
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-stroke")],
  darkMode: ['selector'],
};
