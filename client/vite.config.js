import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The v0 preview reaches the dev server through a proxy with an external Host header.
  server: {
    host: true,
    allowedHosts: true,
  },
})
