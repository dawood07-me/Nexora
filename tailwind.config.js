/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#070B14",
        deepNavy: "#0B1220",
        elevated: "#111A2B",
        electric: "#4F8CFF",
        accentBlue: "#70D6FF",
        mainText: "#F5F7FB",
        secondaryText: "#9AA8BC",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(79, 140, 255, 0.25)',
        'glow-md': '0 0 35px -5px rgba(79, 140, 255, 0.35)',
        'glow-lg': '0 0 60px -10px rgba(79, 140, 255, 0.45)',
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.10)',
        'subtle-hover': 'rgba(112, 214, 255, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
