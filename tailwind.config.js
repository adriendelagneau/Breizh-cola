/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
