module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1a8cd8',
        'custom-green': {
          100: '#e9f5db',
          200: '#cfeab3',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
