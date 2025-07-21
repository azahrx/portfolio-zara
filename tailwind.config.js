/* eslint-disable import/no-anonymous-default-export */
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // TODO: these dont work
        colors: {
          'hover-light': '#fcf4ff',
          'hover-dark': '#2a004a',
          'dark-theme': '#11001f'
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff'
      },
      gridTemplateColumn: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  }
}
