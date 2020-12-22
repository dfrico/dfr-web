module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        DEFAULT: '#020204',
      },
      yellow: {
        DEFAULT: '#FFC700',
      },
    },
    boxShadow: {
      white: '0px 2px 4px 0px rgba(119, 119, 119, 0.25)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
