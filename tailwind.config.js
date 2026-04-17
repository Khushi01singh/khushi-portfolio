/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        grotesk: ['var(--font-grotesk)', 'sans-serif'],
      },
      colors: {
        accent: '#6c63ff',
        accent2: '#00f5d4',
        accent3: '#ff6b9d',
        bg: '#050508',
        surface: '#0d0d14',
        'card-bg': '#0f0f1a',
        muted: '#7a7a9d',
      },
    },
  },
  plugins: [],
}
