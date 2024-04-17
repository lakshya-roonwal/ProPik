/** @type {import('tailwindcss').Config} */
// const {nextui} = require("@nextui-org/react");
import {nextui} from "@nextui-org/react"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
                primary: "#d45434",
                "primary-content": "#ffffff",
                "primary-dark": "#b04125",
                "primary-light": "#dd775e",

                secondary: "#64d434",
                "secondary-content": "#030702",
                "secondary-dark": "#4fb025",
                "secondary-light": "#84dd5e",

                background: "#f1efef",
                foreground: "#fbfbfb",
                border: "#e2dedd",

                copy: "#292523",
                "copy-light": "#6e615e",
                "copy-lighter": "#958784",

                success: "#34d434",
                warning: "#d4d434",
                error: "#d43434",

                "success-content": "#020702",
                "warning-content": "#070702",
                "error-content": "#ffffff"
            },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

