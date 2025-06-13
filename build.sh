#!/bin/bash

# Script de build para Netlify
echo "Iniciando processo de build..."

# Instalar dependências
npm install

# Build do projeto usando configuração de produção
echo "Construindo aplicação para produção..."
npx vite build --config vite.config.prod.ts

# Copiar arquivos necessários para a pasta dist
echo "Copiando arquivos de configuração..."
cp _redirects dist/
cp netlify.toml ./

# Verificar se o build foi bem-sucedido
if [ -d "dist" ]; then
    echo "Build concluído com sucesso!"
    echo "Arquivos gerados em: dist/"
    ls -la dist/
else
    echo "Erro no build!"
    exit 1
fi