import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: true,
    watch: {
      usePolling: true
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'lit': ['lit', '@lit/reactive-element']
        }
      }
    }
  }
})
