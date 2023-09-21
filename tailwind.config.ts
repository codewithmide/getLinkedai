import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      normal: '1rem',
      md: '1.3rem',
      lg: '1.8rem',
      xl: '3rem',
      xxl: '4rem',
      xxxl: '4.5rem'
    },
    colors: {
      white: "#FFFFFF",
      black: '#1E1E1E',
      darkBlue: "#150E28",
      lightBlue: "#903AFF",
      purple: "#D434FE",
      lightGray: "#FFFFFF2E",
      red: "#E60000",
    },
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
