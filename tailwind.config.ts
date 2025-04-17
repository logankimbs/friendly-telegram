import headlessuiPlugin from '@headlessui/tailwindcss';
import formsPlugin from '@tailwindcss/forms';
import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        'wo-light-blue': {
          DEFAULT: '#75bbdd',
          50: '#f8fbfd',
          100: '#ddeef6',
          200: '#c3e1f0',
          300: '#a9d4e9',
          400: '#8fc7e3',
          500: '#75bbdd',
          600: '#5d95b0',
          700: '#467084',
          800: '#2e4a58',
          900: '#17252c',
        },
        'wo-blue': {
          DEFAULT: '#0a81c1',
          50: '#f2f8fb',
          100: '#c4e0f0',
          200: '#95c8e4',
          300: '#67b0d8',
          400: '#3898cc',
          500: '#0a81c1',
          600: '#08679a',
          700: '#064d73',
          800: '#04334d',
          900: '#011926',
        },
        'wo-dark-blue': {
          DEFAULT: '#0e4981',
          50: '#f2f5f8',
          100: '#c5d3e0',
          200: '#97b0c8',
          300: '#698eb0',
          400: '#3b6b98',
          500: '#0e4981',
          600: '#0b3a67',
          700: '#082b4d',
          800: '#051d33',
          900: '#020e19',
        },
        'wo-lime-green': {
          DEFAULT: '#96c93e',
          50: '#f9fcf5',
          100: '#e5f2d0',
          200: '#d1e7ac',
          300: '#bddd87',
          400: '#a9d362',
          500: '#96c93e',
          600: '#78a031',
          700: '#5a7825',
          800: '#3c5018',
          900: '#1d280c',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config;
