module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './_posts/**/*.md'],
  theme: {
    fontFamily: {
      header: ['Montserrat', 'sans-serif'],
      subheader: ['Lora', 'serif'],
      body: ['Hind Madurai', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#9B95EA',
          200: '#807ACC',
          300: '#6D68B4',
          400: '#5F5AA2',
          500: '#524D95',
          600: '#4C4785',
        },
        black: {
          // 100: '#9B95EA',
          200: '#41373F',
          300: '#3A3239',
          400: '#30292F',
          500: '#2F2A2E',
          600: '#221D21',
        },
        secondary: {
          // 100: '#9B95EA',
          200: '#4D4A70',
          300: '#464460',
          400: '#413F54',
          500: '#3A3847',
          600: '#302F3D',
        },
        tertiary: {
          // 100: '#9B95EA',
          200: '#B1D6FF',
          300: '#9FC8F4',
          400: '#92BCEA',
          500: '#7EACDF',
          600: '#6D9FD6',
        },
        gray: {
          100: '#F9FDFF',
          200: '#EBF9FF',
          300: '#E4F5FC',
          400: '#E0F2FA',
          500: '#D5E9F2',
          600: '#BDD8E3',
          700: '#A3C1CD',
        },
      },
    },
  },
  variants: {
    extend: {
      width: ['grou-hover'],
    },
  },
  plugins: [],
};
