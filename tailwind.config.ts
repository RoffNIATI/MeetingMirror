import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        "var(--bg)",
        surface:   "var(--surface)",
        border:    "var(--border)",
        text:      "var(--text)",
        muted:     "var(--muted)",
        accent:    "var(--accent)",
        "accent-dk": "var(--accent-dk)",
        green:     "var(--green)",
        amber:     "var(--amber)",
        danger:    "var(--red)",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body:    ["'DM Sans'",             "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
