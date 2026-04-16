/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                'kconnect-blue': '#0A1128', // Deep blue
                'metallic-silver': '#C0C0C0', // Metallic silver
                'electric-green': '#00FF00', // Vibrant electric green
                'vibrant-orange': '#FF7F00', // Vibrant orange accent
                'kconnect-red': '#E63946', // Vibrant red
            },
        },
    },
    plugins: [],
};