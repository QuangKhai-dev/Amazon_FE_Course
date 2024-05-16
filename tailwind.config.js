/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        amazon: {
          blue: "#131921",
          gray: "#E3E6E6",
          yellow: "#ffd814",
          green: "#7FDA69",
          white: "#ffffff",
          black: "#000000",
          orange: "#ffa41c",
        },
      },
    },
  },
  plugins: [],
};
