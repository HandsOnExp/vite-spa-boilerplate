import { defineConfig } from 'vite'

export default defineConfig({
  // Server configuration
  server: {
    port: 5173,
    open: true,
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vite']
        }
      }
    }
  },
  
  // Base URL for production
  base: './',
})