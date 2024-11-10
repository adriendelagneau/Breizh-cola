import { Cherry } from "lucide-react";
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
        'gradient-custom': 'linear-gradient(to bottom, rgba(252, 231, 243, 0) 0%, rgba(252, 231, 243, 1) 50%)',
      },
      fontFamily: {
        creamCake: ["CreamCake", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainColor: "var(--mainColor)",
        secondColor: "var(--secondColor)",
        cherryColor: "var(--cherryColor)"
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("@xpd/tailwind-3dtransforms"),
  ],
};
export default config;
