module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          1: 'rgba(255,255,255,1)',
          2: 'rgba(244,244,244,1)',
          3: 'rgba(170,170,170,1)',
        },
        dark: {
          1: 'rgba(66,66,66,1)',
          2: 'rgba(40,40,40,1)',
          3: 'rgba(18,18,18,1)',
        },
        blue: {
          1: 'rgba(37,128,235,1)',
          2: 'rgba(22,35,51,1)',
        },
        red: 'rgba(225,92,92,1)',
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      minWidth: {
        56: '224px',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
