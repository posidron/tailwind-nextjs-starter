module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    fontFamily: {
      serif: ["Bitter", "serif"],
      sans: [
        "SF Pro Text",
        "Inter",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
      ],
      monospace: [`SF Mono`, `ui-monospace`, `Monaco`, "Monospace"],
    },
    extend: {
      colors: {
        primary: {
          50: "#fffff9",
          100: "#ffffad",
          200: "#fffe75",
          300: "#fffe2d",
          400: "#fffe0f",
          500: "#efee00",
          600: "#d0d000",
          700: "#b2b100",
          800: "#939300",
          900: "#757400",
        },
        black: {
          50: "#707070",
          100: "#424242",
          200: "#323232",
          300: "#242424",
          400: "#181818",
          500: "#0a0a0a",
          600: "#040404",
          700: "#000",
        },
      },
    },
  },
  plugins: [customContainerPlugin],
};

function customContainerPlugin({ addComponents }) {
  addComponents({
    ".container": {
      "@screen lg": {
        maxWidth: "1024px",
      },
      "@screen xl": {
        maxWidth: "1166px",
      },
    },
  });
}
