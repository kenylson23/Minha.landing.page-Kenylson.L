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
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
          'vendor': ['framer-motion', '@tanstack/react-query']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});