module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  media: false, // or 'darkmode' or 'class'
  theme: {
    extend: {
      boxShadow: {
        white: '0px 2px 4px 0px rgba(119, 119, 119, 0.25)',
      },
      colors: {
        black: {
          DEFAULT: '#020204',
        },
        yellow: {
          DEFAULT: '#FFC700',
        },
      },
      cursor: {
        default: 'pointer',
      },
      lineHeight: {
        compact: '3.5rem',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
    fontFamily: {
      rubik: [
        'Rubik',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
