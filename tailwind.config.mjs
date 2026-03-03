/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#6D1A2A',
          light:   '#A8485A',
          pale:    '#F2DDE0',
        },
        navy: {
          DEFAULT: '#1A2A4A',
          light:   '#3D5480',
          pale:    '#DDE3F0',
        },
        cream: '#FAF8F5',
        ink:   '#0D0D0D',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
