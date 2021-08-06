import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
    theme: {
        fontFamily: {
            lato: 'Lato'
        },
        colors: {
            gr1: "#0055f5",
            gr2: "#40a4fd",
            white: "#ffffff",
            grey:"#858586",
            discord:"#5865F2"

        }
    },
})