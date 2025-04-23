/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        snap: {
          red: "#FF5C4D",
          dark: "#2D2D2D",
          gray: "#8E8E93",
          light: "#FFFFFF",
          lightgray: "#F5F5F7",
        },
      },
    },
  },
  plugins: [],
};
