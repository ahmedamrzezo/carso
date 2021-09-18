const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    maxWidth: {
      '65': '65%'
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary_color: '#435B9C',
      secondary_color: '#6AA09A',
      primary_color_50: 'rgb(67, 67, 156 / 50%)',
      primary_light_color: '#e3f1ee',
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
