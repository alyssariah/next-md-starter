/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1920px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'tiny': '12px',
        'base': '16px',
        'lg': '20px',
        'xl': '22px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '45px',
        '7xl': '57px',
      },
      fontWeight: {
        'hairline': 100,
        'extra-light': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'extra-bold': 800,
        'black': 900,
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
        'large': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
