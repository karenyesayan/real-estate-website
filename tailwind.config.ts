import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-amber": "#FF7A00",
        "blue-crayola": "#1A64FF",
        "vivid-orange": "#FF9533",
        "light-orange": "#FFCA99",
        "pale-orange": "#FFE4CC",
        creamy: "#FFF1E5",
        linen: "#FFF7F0",
        "snow-white": "#FFFCFA",
        "grayish-blue": "#E4E4E7",
        "smoky-white": "#F1F1F3",
        alice: "#F7F7F8",
        "light-grayish-blue": "#FCFCFD",
        "dark-gray": "#141414",
        "graphite-black": "#1A1A1A",
        "signal-black": "#262626",
        "black-olive": "#333333",
        "tarpaulin-grey": "#4D4D4D",
        "dull-grey": "#666666",
        "dusty-grey": "#808080",
        telegrey: "#999999",
        "grey-30": "#4D4D4D",
      },
      screens: {
        desktop: "1920px",
        laptop: "1440px",
        xs: "480px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
