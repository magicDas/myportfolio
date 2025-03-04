export default {
  darkMode: 'class', // Включаем ручное переключение темной темы
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'crimson': ['Crimson Pro', 'serif'],
        'philosopher': ['Philosopher', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      textShadow: {
        'magical': '0 0 10px rgba(233, 213, 255, 0.5)',
        'magical-lg': '0 0 15px rgba(233, 213, 255, 0.7)',
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-magical': {
          'text-shadow': '0 0 10px rgba(233, 213, 255, 0.5)',
        },
        '.text-shadow-magical-lg': {
          'text-shadow': '0 0 15px rgba(233, 213, 255, 0.7)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};