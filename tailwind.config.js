import defaultTheme from 'tailwindcss/defaultTheme';

const config= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      ml: '864px',
      ...defaultTheme.screens,
      '3xl': '1600px',
      '4xl': '140rem',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
      colors: {
        primary: {
          DEFAULT: '#377DFF',
          dark: '#2563EB',
          light: '#4c70f0'
        },
        secondary: {
          DEFAULT: '#23283B',
          light: '#6B7B9C'
        },
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#EDF0F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280'
        }
      },
      boxShadow: {
        'card': '0 0 0 9px rgba(0,0,0,0.05)',
        'card-sm': '0 0 0 5px rgba(0,0,0,0.05)'
      }
    },
  },
  plugins: [],
};

export default config;
