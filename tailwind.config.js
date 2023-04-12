/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './apps/**/index.html',
    './apps/**/src/**/*.{js,ts,jsx,tsx}',
    './libs/**/src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: { ...colors, primary: colors.slate },
    },
  },
  plugins: [],
};
