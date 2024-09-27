module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This will scan all your JSX, TSX files in the 'src' folder
    './public/index.html',         // Include the index.html if relevant
  ],
  theme: {
    extend: {
      colors: {
        lightBrown: '#F5E6D3',
        darkBrown: '#4A3728',
        electricBlue: '#00A4E4',
        cream: '#E8D6C0',
        sageGreen: '#8DAA91',
        coral: '#FF6B5B',
      },
      fontFamily: {
        lufga: ['Lufga', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
