/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Sacred gold tones - like butter lamp flames
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d4a017',
          600: '#b8860b',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
        // Deep monastery blacks and charcoals
        sacred: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          850: '#1f1d1c',
          900: '#1c1917',
          950: '#0f0e0d',
        },
        // Crimson robes
        robe: {
          400: '#f87171',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        // Himalayan sky
        sky: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        // Turquoise - sacred stone
        turquoise: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        }
      },
      fontFamily: {
        // Display font - elegant serif for headings
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        // Body font - clean and readable
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        // Tibetan-style decorative
        tibetan: ['Noto Serif Tibetan', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'display-lg': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-xl': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-2xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/noise.svg')",
      },
      boxShadow: {
        'glow': '0 0 60px -15px rgba(212, 160, 23, 0.3)',
        'glow-lg': '0 0 100px -20px rgba(212, 160, 23, 0.4)',
        'inner-glow': 'inset 0 0 60px -15px rgba(212, 160, 23, 0.2)',
      },
      typography: {
        sacred: {
          css: {
            '--tw-prose-body': '#d6d3d1',
            '--tw-prose-headings': '#fef9c3',
            '--tw-prose-lead': '#a8a29e',
            '--tw-prose-links': '#d4a017',
            '--tw-prose-bold': '#fef08a',
            '--tw-prose-counters': '#78716c',
            '--tw-prose-bullets': '#57534e',
            '--tw-prose-hr': '#44403c',
            '--tw-prose-quotes': '#fde047',
            '--tw-prose-quote-borders': '#d4a017',
            '--tw-prose-captions': '#78716c',
            '--tw-prose-code': '#fef08a',
            '--tw-prose-pre-code': '#d6d3d1',
            '--tw-prose-pre-bg': '#1c1917',
            '--tw-prose-th-borders': '#44403c',
            '--tw-prose-td-borders': '#292524',
          },
        },
      },
    },
  },
  plugins: [],
}
