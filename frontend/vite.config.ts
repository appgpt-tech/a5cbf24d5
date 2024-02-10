
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/a5cbf24d5/',
    build: {
      outDir: '.output/a5cbf24d5',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
