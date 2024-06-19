import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.js'),
            fileName: 'bundle',
            formats: ['es'],
        },
    },
    server: {
        host: true
    },
})
