import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-bg': 'url("/btc.jpg")',
      },
      colors: {
        brand: {
          yellow: '#ffb700',
        },
      },
    },
  },
  plugins: [],
};
export default config;
