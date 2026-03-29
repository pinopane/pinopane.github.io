/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        surface: '#0e0e0e',
        'surface-2': '#141414',
        base: '#e2e2e2',
        muted: '#555555',
        faint: '#222222',
        accent: '#7ef2ff',
        line: 'rgba(255,255,255,0.07)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  plugins: []
};
