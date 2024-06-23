import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {           
        syne: ["Syne", "sans-serif"],  // custom font-family
        kanit: ["Kanit", "sans-serif"]
      },
      colors:{
        'blue-Purple' : "#5f4cdd",
        'light-purple' : "#eeebff",
        'custom-purple': '#B0A7EF',
        'custom-grey': '#E2E2E2',
      }
    },
  },
  plugins: [require('daisyui'),],
}
export default config
