// tailwind.config.js
const colors = require('tailwindcss/colors');

const primary = {
  light: '#ABC8FE',
  default: '#133980',
  dark: '#011B4A',
};

const secondary = {
  light: '#CDCDCD',
  default: '#3E3E3E',
  dark: '#1D1D1D',
};

const accent = {
  light: '#F2F1A8',
  default: '#EAB308',
  dark: '#7C7A08',
};

const heroHeadline = {
  light: '#faebd7',
  default: '#fff',
  dark: '#faebd7',
};

module.exports = {
  future: {},
  // purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      primary: {
        light: primary.light,
        DEFAULT: primary.default,
        dark: primary.dark,
      },
      secondary: {
        light: secondary.light,
        DEFAULT: secondary.default,
        dark: secondary.dark,
      },
      accent: {
        light: accent.light,
        DEFAULT: accent.default,
        dark: accent.dark,
      },
      heroHeadline: {
        light: heroHeadline.light,
        DEFAULT: heroHeadline.default,
        dark: heroHeadline.dark,
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
