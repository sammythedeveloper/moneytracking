module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This makes Tailwind aware of your JSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'], // Add Caveat font family here
      },
    },
  },
  plugins: [],
}


