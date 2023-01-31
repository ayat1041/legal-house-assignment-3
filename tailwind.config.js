/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
    plugins: [],
    daisyui: {
        styled: false,
        themes: false,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        // darkTheme: "dark",
      },
  }