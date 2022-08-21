/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    mode: "jit",
    purge: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
