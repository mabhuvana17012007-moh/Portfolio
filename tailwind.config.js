/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#800000',
          50: '#fbebeb',
          100: '#f2cccc',
          200: '#e19999',
          300: '#cf6666',
          400: '#a83333',
          500: '#800000',
          600: '#6b0000',
          700: '#560000',
          800: '#400000',
          900: '#2b0000',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#1a1a1a',
        },
        cloud: {
          DEFAULT: '#F5F5F5',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'maroon-gradient': 'linear-gradient(135deg, #800000 0%, #a83333 50%, #560000 100%)',
        'maroon-radial': 'radial-gradient(circle at top right, rgba(128,0,0,0.15), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(17, 17, 17, 0.1)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        maroon: '0 10px 30px -10px rgba(128, 0, 0, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 12s infinite ease-in-out',
        'spin-slow': 'spin-slow 20s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
