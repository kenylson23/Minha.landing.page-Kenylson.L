import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
      '@assets': path.resolve(__dirname, './client/src/assets')
    }
  },
  root: './client',
  publicDir: './public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
    minify: false, // Desabilitar minificação para acelerar
    target: 'es2020',
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      external: [],
      output: {
        // Chunk único para acelerar build
        manualChunks: () => 'everything.js'
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});