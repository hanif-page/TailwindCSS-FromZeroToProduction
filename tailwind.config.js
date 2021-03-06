module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      ringColor: ['active'],
      ringWidth: ['active'],
    },
  },
  plugins: [],
}
