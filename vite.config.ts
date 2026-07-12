import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ],
          'animations': [
            'gsap',
            'framer-motion'
          ],
          'ui': [
            'shadcn-ui',
            'lucide-react',
            'react-icons'
          ],
          'carousel': [
            'swiper',
            'embla-carousel-react'
          ],
          'forms': [
            'react-hook-form',
            'zod',
            '@hookform/resolvers'
          ]
        }
      }
    }
  },
  publicDir: 'public'
})
