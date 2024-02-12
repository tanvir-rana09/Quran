/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}" ,
  ],
  theme: {
    extend: {
      fontFamily:{
        solitreo:['var(--font-solitreo)',...fontFamily.sans],
        amiri:['var(--font-amiri)',...fontFamily.sans],
        lateef:['var(--font-lateef)',...fontFamily.sans],
        sen:['var(--font-sen)',...fontFamily.sans],
        bebas:['var(--font-bebas-neue)',...fontFamily.sans],
        cinzel:['var(--font-cinzel)',...fontFamily.sans],
      },
      colors: {
        primary: '#E3C1B4', 
        second: '#DDD9CE',
        third: '#EFECE9',
        forth: '#FDF2DF',
        five: '#013A28',
        six: '#FEF2DC',
      }
    },
  },
  plugins: [],
};
