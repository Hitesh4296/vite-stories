import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      animation: {
        "slide-from-right":
          "slide-from-right 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-to-left": "slide-to-left 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 90ms cubic-bezier(0.4, 0, 1, 1) both",
        "fade-out": "fade-out 300ms cubic-bezier(0.4, 0, 0.2, 1) both",
        "expand-to-full": "expand-to-full 5000ms linear both",
      },
    },
  },
  plugins: [],
} satisfies Config;
