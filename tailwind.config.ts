// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                waco: {
                    red: "#DC2626", // Aggressive Logo Red
                    dark: "#111827", // Premium Charcoal Black
                    card: "#1F2937", // Slightly lighter black for car cards
                },
            },
        },
    },
    plugins: [],
};
export default config;