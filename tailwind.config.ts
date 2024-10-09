/* eslint-disable global-require */
import { nextui } from '@nextui-org/theme';
import { withTV } from 'tailwind-variants/dist/transformer';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
        '3xl': '1280px',
        '4xl': '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2.5rem',
          lg: '4rem',
          xl: '5.75rem',
        },
      },
      fontFamily: {
        dinpro: ['DINPro', 'sans-serif'],
        dinprocond: ['DIN Pro Cond', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '67px',
          {
            fontWeight: '700',
            lineHeight: '73.7px',
          },
        ],
        h2: [
          '51px',
          {
            fontWeight: '700',
            lineHeight: '56.1px',
          },
        ],
        h3: [
          '38px',
          {
            fontWeight: '700',
            lineHeight: '45.6px',
          },
        ],
        logo: [
          '36px',
          {
            fontWeight: '400',
            lineHeight: '57.6px',
          },
        ],
        h4: [
          '28px',
          {
            fontWeight: '700',
            lineHeight: '39.2px',
          },
        ],
        h5: [
          '22px',
          {
            fontWeight: '700',
            lineHeight: '35.2px',
          },
        ],
        md: [
          '22px',
          {
            fontWeight: '600',
            lineHeight: '30.8px',
          },
        ],
        sm: [
          '14px',
          {
            fontWeight: '600',
            lineHeight: '20px',
          },
        ],
        base: [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '22.4px',
          },
        ],
        caption: [
          '12px',
          {
            fontWeight: '400 ',
            lineHeight: '13.2px',
          },
        ],
      },
      minHeight: {
        layout: 'calc(100vh - 96px)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(to right, #D4AF37, #A29BFD)',
        'gradient-2': 'linear-gradient(to right, #F2E394, #5A3C75)',
      },
      boxShadow: {
        '3xl': '0px 8px 48px 0px #0000000A',
      },
      dropShadow: {},
      borderRadius: {
        4: '4px',
        8: '8px',
        10: '10px',
        12: '12px',
        16: '16px',
      },
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
      },
      colors: {
        black: '#000000',
        white: {
          '01': '#FDFDFD',
          default: '#FFFFFF',
        },
        black2: '#2B2B2B',
        gray: '#858584',
        grayBorder: '#3B3B3B',
        grayFooter: '#CCCCCC',
        grayIcon: 'rgba(133, 133, 132, 1)',
        yellow: '#D4AF37',
        purple: '#A29BFD',
        green: '#35C525',
        red: '#EA3B28',
        blue: '#0052FF',
        neutral: {
          '02': '#E5E5ED',
          '03': '#373C45',
          '04': '#A5AAB9',
          '05': '#CACBD9',
        },
        callToAction: {
          1: '#B8860B',
          2: '#5A3C75',
          3: '#F2E394',
        },
      },

      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#F3F3F7',
              foreground: '#d9e9ff',
            },
            secondary: {
              DEFAULT: '#B8860B',
            },
            foreground: {
              '50': '#eef6ff',
              '100': '#d9e9ff',
              '200': '#bcdaff',
              '300': '#8ec3ff',
              '400': '#59a1ff',
              '500': '#337cfe',
              '600': '#1053f3',
              '700': '#1546e0',
              '800': '#183ab5',
              '900': '#19368f',
              DEFAULT: '#142357',
              foreground: '#eef6ff',
            },
            background: {
              '50': '#f1f8ff',
              '100': '#dbecfe',
              '200': '#bfdffe',
              '300': '#93ccfd',
              '400': '#60affa',
              '500': '#3b8ef6',
              '600': '#256feb',
              '700': '#1d5ad8',
              '800': '#1e49af',
              '900': '#1e418a',
              DEFAULT: '#FAFAFA',
            },
          },
          layout: {
            fontSize: {
              small: '12px',
              medium: '16px',
              large: '22px',
            },
            boxShadow: {},
          },
        },
      },
      defaultTheme: 'light',
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.inset-center': {
          top: '50%',
          left: '50%',
          '@apply absolute -translate-x-1/2 -translate-y-1/2': {},
        },
        '.inset-y-center': {
          top: '50%',
          '@apply absolute -translate-y-1/2': {},
        },
        '.inset-x-center': {
          left: '50%',
          '@apply absolute -translate-x-1/2': {},
        },
      });
    }),
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};

export default withTV(config);
