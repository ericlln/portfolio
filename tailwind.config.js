/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'font-sans': ['Manrope'],
                title: ['"Markazi Text"'],
            },
            colors: { highlight: '#8ea7a0', teagreen: '#CCDDB7' },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
