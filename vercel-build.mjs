import { build } from 'vite';
import { resolve } from 'path';

async function buildForVercel() {
  try {
    console.log('Building for Vercel deployment...');
    
    await build({
      root: './client',
      publicDir: '../public',
      base: '/',
      build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        minify: true,
        target: 'esnext',
        rollupOptions: {
          input: resolve(process.cwd(), 'client/index.html'),
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              motion: ['framer-motion']
            }
          }
        }
      },
      resolve: {
        alias: {
          '@': resolve(process.cwd(), 'client/src'),
          '@shared': resolve(process.cwd(), 'shared'),
          '@assets': resolve(process.cwd(), 'client/src/assets')
        }
      },
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    });
    
    console.log('Build completed successfully for Vercel!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForVercel();