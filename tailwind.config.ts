import type { Config } from 'tailwindcss'



const config: Config = {
  darkMode: ['class'], // This enables dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bgPrimary)",

        bgSecondary: "var(--bgSecondary)",

        bgCard: "var(--bgCard)",

        txtPrimary: "var(--txtPrimary)",

        txtSecondary: "var(--txtSecondary)",

        blue: "var(--blue)",

        blueTxt: "var(--blueTxt)",

        tableBgSecondary: "var(--tableBgSecondary)",
      },
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Work Sans"],
        mono: ["Space Mono"],
        display: ["Oswald"],
        body: ["Open Sans"],
      },
      screens: {
        xs: "320px",
        // => @media (min-width: 320px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundSize: {
        22: "22rem,",
      },
    },

    plugins: [],
  },
  plugins: [],
}
export default config

