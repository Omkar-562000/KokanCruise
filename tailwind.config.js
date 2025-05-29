// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default { // Use 'export default' for Vite/ESM projects
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom blue palette for KokanCruise
        'blue-950': '#0A1128', // Very dark blue for deep elements
        'blue-900': '#1A237E', // Primary dark blue, current main navbar
        'blue-850': '#151F41', // A shade between 950 and 900
        'blue-800': '#283593', // Darker interaction/hover blue
        'blue-700': '#3F51B5', // Call to action/highlight blue
        'blue-600': '#5C6BC0',
        'blue-500': '#7986CB',
        'blue-400': '#9FA8DA',
        'blue-300': '#C5CAE9', // Lightest interactive blue
        'blue-200': '#E8EAF6',
        'blue-50': '#F5F5F9', // Very light background blue
      },
      fontFamily: {
        // More modern and readable fonts
        sans: ['Roboto', 'Arial', 'sans-serif'], // For body text
        heading: ['Poppins', 'sans-serif'], // For headings
      },
      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: '1rem', // Default padding
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        screens: { // Adjust if you need custom breakpoints, otherwise default Tailwind works
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}