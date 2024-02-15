/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {
      colors: {
        "sharp": "#ffffff20",
        "thicksharp": "#ffffff60"
      }
    }
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas")
  ],
}
