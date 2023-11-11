import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
            backgroundColor: {
                glass: "rgba(255, 255, 255, .22)",
            },
        },
    },
    plugins: [],
};
export default config;