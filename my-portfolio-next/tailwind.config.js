module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        text: '#FFFFFF',
        primary: '#FFCC00',
      },
    },
  },
  plugins: [],
}