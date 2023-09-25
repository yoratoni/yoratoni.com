import plugin from "tailwindcss/plugin";


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
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
                p: "2px 2px 4px rgba(0, 0, 0, 1)"
            },
            boxShadow: {
                io: "-2px 4px 4px -1px rgba(0,0,0,0.30)"
            }
        },
    },
    plugins: [
        require("tailwind-scrollbar"),
        require("tailwindcss-animated"),
        plugin(function({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ]
};