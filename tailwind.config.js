/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        backgroundLight: 'var(--background-light)',
        backgroundDark: 'var(--background-dark)',
        borderColor: 'var(--border-color)',
      },
    },
  },
  plugins: [],
};
