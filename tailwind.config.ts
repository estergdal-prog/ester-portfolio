import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#141414',
        'netflix-red': '#E50914',
        'netflix-red-dark': '#B20710',
      },
      fontFamily: {
        hebrew: ['var(--font-heebo)', 'var(--font-rubik)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(229, 9, 20, 0.5)',
        'red-glow-lg': '0 0 30px rgba(229, 9, 20, 0.6)',
      },
    },
  },
  plugins: [],
}
export default config
