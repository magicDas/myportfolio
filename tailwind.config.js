/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Включаем ручное переключение темной темы
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Shantell Sans', 'cursive'],
        'body': ['Caveat', 'cursive'],
      },
      textShadow: {
        'magical': '0 0 10px rgba(233, 213, 255, 0.5)',
        'magical-lg': '0 0 15px rgba(233, 213, 255, 0.7)',
      },
      animation: {
        'gradient': 'gradient 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'magical': 'magical 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'magical': {
          '0%': { 
            'box-shadow': '0 0 2px rgba(147, 51, 234, 0.1)',
            'transform': 'scale(1)',
            'opacity': '0.7'
          },
          '50%': { 
            'box-shadow': '0 0 30px #9333ea, 0 0 60px #9333ea',
            'transform': 'scale(1.05)',
            'opacity': '1'
          },
          '100%': {
            'box-shadow': '0 0 2px rgba(147, 51, 234, 0.1)',
            'transform': 'scale(1)',
            'opacity': '0.7'
          }
        }
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
        }
      }
      addUtilities(newUtilities)
    }
  ],
};