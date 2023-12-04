import plugin from "tailwindcss/plugin";


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                // Min width
                "xs": "320px",
                "xsm": "480px",
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
                "2xl": "1536px",

                // Max width
                "max-xs": { "raw": "(max-width: 320px)" },
                "max-xsm": { "raw": "(max-width: 480px)" },
                "max-sm": { "raw": "(max-width: 640px)" },
                "max-md": { "raw": "(max-width: 768px)" },
                "max-lg": { "raw": "(max-width: 1024px)" },
                "max-xl": { "raw": "(max-width: 1280px)" },
                "max-2xl": { "raw": "(max-width: 1536px)" },

                // Min height
                "hsm": { "raw": "(min-height: 640px)" },
                "hmd": { "raw": "(min-height: 768px)" },
                "hlg": { "raw": "(min-height: 1024px)" },
                "hxl": { "raw": "(min-height: 1280px)" },
                "h2xl": { "raw": "(min-height: 1536px)" },

                // Max height
                "max-hsm": { "raw": "(max-height: 640px)" },
                "max-hmd": { "raw": "(max-height: 768px)" },
                "max-hlg": { "raw": "(max-height: 1024px)" },
                "max-hxl": { "raw": "(max-height: 1280px)" },
                "max-h2xl": { "raw": "(max-height: 1536px)" }
            },
            height: {
                screen: [
                    "100vh /* fallback for Opera, IE and etc. */", "100dvh"
                ],
            },
            textShadow: {
                none: "0 0 0 transparent",
                inherit: "inherit",
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
                p: "2px 2px 4px rgba(0, 0, 0, 1)"
            },
            boxShadow: {
                io: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            },
            keyframes: {
                shimmer: {
                    "100%": {
                        "transform": "translateX(100%)"
                    }
                }
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