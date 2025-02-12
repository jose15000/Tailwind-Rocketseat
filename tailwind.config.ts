import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "minmax(18rem, 20rem) 1fr",
        profile: "min-content 1fr min-content",
        form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        violet: {
          25: "#fcfaff",
        },
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
export default config;
