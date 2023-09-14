/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#db2777",
        secondary: "#1e293b",
        subtitle: "#A3ABBD",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
