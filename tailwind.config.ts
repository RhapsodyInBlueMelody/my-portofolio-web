import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gv: {
          bg0h: "#1d2021",
          bg0: "#282828",
          bg1: "#3c3836",
          bg2: "#504945",
          bg3: "#665c54",
          bg4: "#7c6f64",
          fg1: "#ebdbb2",
          fg2: "#d5c4a1",
          fg3: "#bdae93",
          fg4: "#a89984",
          red: "#fb4934",
          green: "#b8bb26",
          yellow: "#fabd2f",
          blue: "#83a598",
          purple: "#d3869b",
          aqua: "#8ec07c",
          orange: "#fe8019",
          gray: "#928374",
        },
      },
      fontFamily: {
        mono: ["\"IBM Plex Mono\"", "ui-monospace", "monospace"],
        sans: ["\"IBM Plex Sans\"", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #282828), linear-gradient(90deg, rgba(168,153,132,0.06) 1px, transparent 1px), linear-gradient(rgba(168,153,132,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 32px 32px, 32px 32px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        typein: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
