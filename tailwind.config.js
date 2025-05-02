/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "inter": ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
        },
        extend: {
            scale: {
                '1/3': '33.333333%'
            }
        }
    },
    plugins: [
        typography,
        forms,
    ]
}
