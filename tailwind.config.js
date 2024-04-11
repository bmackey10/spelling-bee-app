/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.js"],
    theme: {
        extend: {
            colors: {
                "bee-yellow": "#f7da00",
                "bee-yellow-dark": "#f8cd0e",
            },
            fontFamily: {
                "zilla-slab": ['"Zilla Slab"', "sans-serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
