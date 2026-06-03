import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px"
        },
        extend: {
            fontFamily: {
                sans: "var(--font-archivo)",
                syne: "var(--font-syne)",
            },
            container: {
                center: true,
                padding: {
                    DEAFULT: "1rem",
                    md: "2rem",
                    lg: "4rem"
                }
            },
            colors: {
                cream: {
                    50: '#fffdf7',
                    100: '#fbf8ee',
                    200: '#f7f3e9',
                },
                night: '#210b2c',
                "red-orange": {
                    500: '#bc96ec',
                },
            },
        },
    },
    plugins: [],
};
export default config;
