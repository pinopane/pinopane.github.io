/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slateDeep: '#10161f',
        textBase: '#dce3ec',
        textMuted: '#95a2b3',
        line: '#1b2533',
        panel: '#111a27',
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