
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hover: {
          light: '#fcf4ff',
          dark: '#2a004a',
        },
        translucent: {
          dark: '#11001'
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"],
      }
    },
  }
}