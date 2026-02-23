// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF", // example color
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
