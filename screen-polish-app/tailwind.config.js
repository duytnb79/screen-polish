/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4f46e5", // Sophisticated Indigo/Blue
        "primary-hover": "#4338ca",
        "background-light": "#f8fafc", // Softer Slate-50 background
        "background-dark": "#0f172a",
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b",
        "border-light": "#e2e8f0",
        "border-dark": "#334155",
        "text-main": "#1e293b", // Slate-800 for softer contrast than pure black
        "text-secondary": "#64748b", // Slate-500
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      boxShadow: {
        "soft": "0 2px 12px rgba(0, 0, 0, 0.04)",
        "medium": "0 12px 40px -12px rgba(0, 0, 0, 0.12)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
