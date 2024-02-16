/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        heading: "#CFBCA1",
        body: "#121212",
        accent: "#FE6E31",
        background: "#FBF8F4",
        icon: "#8F6730",
        border: { DEFAULT: "#CFBCA1", muted: "#E4D8C7" },
      },
    },
  },
  plugins: [],
};
