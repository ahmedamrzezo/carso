const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: {
    content: [
      './src/*.{js,jsx}',
      './src/components/**/**/*.{js,jsx}',
      './src/components/shared/**/**/*.{js,jsx}',
      './src/layout/**/*.{js,jsx}',
      './public/index.html',

    ],
    safeList: [
      'transform', 'hover:-translate-y-2', 'transition-all'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    maxWidth: {
      '65': '65%'
    },
    extend: {
      animation: {
        'spin-reverse': 'spinReverse 1s linear infinite',
      },
      keyframes: {
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary_color: '#435B9C',
      secondary_color: '#6AA09A',
      primary_color_50: 'rgb(67, 67, 156 / 50%)',
      primary_light_color: '#e3f1ee',
      primary_light_color_80: 'rgba(227, 241, 238, 0.8)',
      primary_dark_color: '#113537',
      white: '#fff',
      gray: colors.trueGray,
      success: colors.emerald[500],
      danger: colors.red[600],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
