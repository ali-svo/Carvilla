// /** @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        banafh: "#4e4ffa",
        naft: "#2a2d54",
        shiri: "#d1d7e9",
        naftTow: "#666c81",
        botton: "#0102fa",
      },
      screens: {
        phone: "0px",
        // => @media (min-width: 640px) { ... }
      },
      fontFamily: {
        rufina: ["Rufina-Regular"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
