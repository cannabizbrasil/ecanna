import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "verde": "#1d3232",
        "azul": "#0da2a4",
        "azulescuro": "#4471b5",
        "azulclaro": "#7aabbb"
      },
      spacing: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      strokeWidth: {
        '4': '4px',
        'medio': '20px',
        'largo': '50px',
      }
    },
  },
  plugins: [],
};
export default config;
