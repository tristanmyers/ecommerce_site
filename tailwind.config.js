module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main-background': '#E4E4E4',
      'main-font': '#1b323c',
      'white': '#ffffff',
      'grey': '#D6D6D6'
    },
    fontFamily: {
      sans: ['Readex Pro', 'sans-serif']
    }
  },
  plugins: [],
}
