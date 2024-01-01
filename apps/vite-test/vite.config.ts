import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vanyaPlugin from '@repo/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    vanyaPlugin()
  ],
  resolve: {
    alias: {
      "@vanya/vee": "./src/.vanya/index.js"
    }
  }
})
