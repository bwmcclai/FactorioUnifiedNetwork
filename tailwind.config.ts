import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-dark': '#1e1e1e',
        'panel-grey': '#2e2e2e',
        'inset-grey': '#181818',
        
        // Accents
        'factorio-orange': '#cf7c00',
        'danger-red': '#e03030',
        'logic-green': '#5dbb63',
        
        // Text
        'off-white': '#e6e6e6',
        'yellow-beige': '#ffe6c0',
        
        // Bevels
        'bevel-light': '#4a4a4a',
        'bevel-dark': '#111111',
      },
      fontFamily: {
        'header': ['Saira', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'raised': 'inset 2px 2px 0 #4a4a4a, inset -2px -2px 0 #111',
        'sunken': 'inset 2px 2px 0 #111, inset -2px -2px 0 #4a4a4a',
        'button-orange': 'inset 0 -3px 0 #855200, inset 0 3px 0 #ffbd4a',
        'button-pressed': 'inset 0 3px 0 #855200, inset 0 -3px 0 #ffbd4a',
      },
      animation: {
        'blink': 'blink 1.5s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0.3' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
