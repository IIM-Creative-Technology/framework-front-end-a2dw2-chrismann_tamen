/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cta: '#8D4ED8',
        bgCta: '#F3EDFB',
        minBtn: 'rgba(255, 106, 96, 1)',
        mainBg:'#F5F5F5',
        footerBg:'#0A0909'
      },
      spacing: {
        '18': '72px'
      }
    },
  },
  plugins: [],
}
