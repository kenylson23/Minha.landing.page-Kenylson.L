import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Starting build process...');

try {
  // Clean dist directory
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Run vite build
  console.log('Building with Vite...');
  execSync('npx vite build --config vite.config.prod.ts', { stdio: 'inherit' });

  // Verify build output
  if (fs.existsSync('dist/index.html')) {
    console.log('Build completed successfully!');
    
    // List files in dist directory
    const files = fs.readdirSync('dist');
    console.log('Generated files:', files);
  } else {
    throw new Error('index.html not found in dist directory');
  }
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}