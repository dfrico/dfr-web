import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],

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
      inter: [
        'Inter var',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
