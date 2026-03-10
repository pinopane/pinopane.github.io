/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slateDeep: '#05070c',
        textBase: '#dce3ec',
        textMuted: '#95a2b3',
        line: '#141b26',
        panel: '#090e16',
        accent: '#4f7f8b',
        accentSoft: '#79a8b5'
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        panel: '0 16px 36px rgba(8, 12, 18, 0.35)'
      }
    }
  },
  plugins: []
};
