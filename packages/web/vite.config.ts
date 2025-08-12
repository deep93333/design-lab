import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@deep-design-lab/capture': resolve(__dirname, '../experiments/capture/index.ts'),
      '@deep-design-lab/ui': resolve(__dirname, '../ui/src'),
    },
  },
})
