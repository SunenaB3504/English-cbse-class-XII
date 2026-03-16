import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/English-cbse-class-XII/',
  plugins: [react()],
  server: {
    port: 5180,
    strictPort: true,
  },
  css: {
    // Preparing for shared theme from @suncube/tailwind-config
    devSourcemap: true,
  }
})
