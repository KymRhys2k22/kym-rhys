/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
};
