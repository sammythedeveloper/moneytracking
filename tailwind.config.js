module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This makes Tailwind aware of your JSX files
  ],
  theme: {
    extend: {
      animation: {
      'spin-slow': 'spin 20s linear infinite', // Slow spin for the entire container
    },
      fontFamily: {
        caveat: ['Caveat', 'cursive'], // Add Caveat font family here
      },
    },
  },
  plugins: [],
}


