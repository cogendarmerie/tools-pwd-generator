/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            black: '#030711',
            white: '#e1e7ef',
            whiteLight: '#f8fafc',
            gray: '#7f8ea3',
            accent: '#1D283A',
        },
        fontFamily: {
            default: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}

