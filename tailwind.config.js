const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary_color: '#96616b',
      primary_color_50: 'rgb(150 97 107 / 50%)',
      primary_light_color: '#ffead0',
      primary_dark_color: '#113537',
      white: '#fff',
      gray: colors.trueGray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
