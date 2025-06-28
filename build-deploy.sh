#!/bin/bash

# Script de Build e Deploy - Portfólio Kenylson Lourenço
echo "Iniciando processo de build para deploy..."

# Limpeza de builds anteriores
echo "Limpando builds anteriores..."
rm -rf dist/

# Build usando comando existente do package.json
echo "Fazendo build completo..."
npm run build

if [ $? -eq 0 ]; then
    echo "Build concluído com sucesso!"
else
    echo "Erro no build"
    exit 1
fi

# Verificação dos arquivos gerados
echo "Verificando arquivos gerados..."
if [ -d "dist" ]; then
    echo "Arquivos na pasta dist:"
    ls -la dist/
    echo ""
    echo "Build completo! Pronto para deploy."
    echo ""
    echo "Plataformas disponíveis:"
    echo "   - Netlify: Conecte via Git (deploy automático)"
    echo "   - Vercel: Conecte via Git (deploy automático)"
    echo "   - Railway: Conecte via Git (deploy automático)"
    echo "   - Render: Conecte via Git (deploy automático)"
    echo "   - Heroku: git push heroku main"
else
    echo "Pasta dist não foi criada"
    exit 1
fi