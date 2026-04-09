/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'wolff-digital': {
          'primary':          '#ebbb40',
          'primary-content':  '#2b2b2b',
          'secondary':        '#00f5b8',
          'secondary-content':'#2b2b2b',
          'accent':           '#f500b8',
          'accent-content':   '#ffffff',
          'neutral':          '#2b2b2b',
          'neutral-content':  '#f7f5f0',
          'base-100':         '#f7f5f0',
          'base-200':         '#ffffff',
          'base-300':         '#e8e4da',
          'base-content':     '#2b2b2b',
          'info':             '#00f5b8',
          'success':          '#00f5b8',
          'warning':          '#ebbb40',
          'error':            '#f500b8',
        },
      },
    ],
    darkTheme: 'wolff-digital',
  },
};
