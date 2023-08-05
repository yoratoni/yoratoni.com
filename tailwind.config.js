/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                "xs": "320px"
            },
            height: {
                screen: [
                    "100vh /* fallback for Opera, IE and etc. */", "100dvh"
                ],
            }
        },
    },
    plugins: [
        require("tailwind-scrollbar")
    ]
};