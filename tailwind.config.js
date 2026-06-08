/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2E2D70',
          50: '#f0f0fa',
          100: '#e0e0f5',
          200: '#c2c1eb',
          300: '#9594d4',
          400: '#6e6dba',
          500: '#4a49a0',
          600: '#3b3a8a',
          700: '#2E2D70',
          800: '#25245a',
          900: '#1c1b47',
          950: '#111035',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#e0c97a',
          dark: '#a88a35',
        },
        surface: {
          DEFAULT: '#ffffff',
          50: '#fafbff',
          100: '#f5f6fc',
          200: '#eef0f8',
          300: '#e4e6f2',
        },
        text: {
          primary: '#1a1a2e',
          secondary: '#4a4a6a',
          muted: '#7a7a9a',
          light: '#a0a0b8',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      boxShadow: {
        'premium': '0 4px 24px rgba(46, 45, 112, 0.08)',
        'premium-lg': '0 8px 40px rgba(46, 45, 112, 0.12)',
        'premium-xl': '0 16px 60px rgba(46, 45, 112, 0.15)',
        'card': '0 1px 3px rgba(46, 45, 112, 0.04), 0 4px 12px rgba(46, 45, 112, 0.06)',
        'card-hover': '0 4px 16px rgba(46, 45, 112, 0.1), 0 12px 40px rgba(46, 45, 112, 0.08)',
      },
    },
  },
  plugins: [],
}
