import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        colors: {
            foreground: {
                DEFAULT: "rgb(var(--foreground) / <alpha-value>)",
                muted: "rgb(var(--foreground-muted) / <alpha-value>)",
            },
            background: {
                DEFAULT: "rgb(var(--background) / <alpha-value>)",
                glass: {
                    DEFAULT: "rgb(var(--background-glass) / 0.2)",
                    accent: "rgb(var(--background-glass-accent) / 0.15)",
                },
            },
            highlight: {
                DEFAULT: "rgb(var(--highlight) / <alpha-value>)",
                accent: "rgb(var(--highlight-accent) / <alpha-value>)",
            },
            border: "rgb(var(--border) / 0.5)",
        },
        fontFamily: {
            sans: ["var(--font-geist-sans)"],
            serif: ["var(--font-noto-serif-display)"],
        },
        screens: {
            md: "686px",
        },
        extend: {
            borderRadius: {
                "2xl": "0.875rem",
                "3xl": "1.375rem",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-5deg)" },
                    "50%": { transform: "rotate(5deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 300ms ease-in-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        // @ts-ignore
        plugin(({ addUtilities }) => {
            addUtilities({
                ".no-scrollbar": {
                    "scrollbar-width": "none",
                    "-ms-overflow-style": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        }),
    ],
};
export default config;
