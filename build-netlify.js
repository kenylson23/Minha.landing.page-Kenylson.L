#!/usr/bin/env node

// Netlify build script otimizado
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Iniciando build otimizado para Netlify...');

try {
  // Limpar pasta dist
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
    console.log('✅ Pasta dist limpa');
  }

  // Build com timeout maior e configurações otimizadas
  console.log('📦 Executando build do Vite...');
  
  execSync('npx vite build --config vite.config.simple.ts --mode production', {
    stdio: 'inherit',
    timeout: 300000, // 5 minutos
    env: {
      ...process.env,
      NODE_ENV: 'production',
      VITE_API_URL: '/.netlify/functions'
    }
  });

  console.log('✅ Build concluído com sucesso!');
  
  // Verificar se os arquivos foram gerados
  if (fs.existsSync('dist/index.html')) {
    console.log('✅ Arquivos estáticos gerados em dist/');
  } else {
    throw new Error('Arquivos de build não encontrados');
  }

} catch (error) {
  console.error('❌ Erro no build:', error.message);
  process.exit(1);
}