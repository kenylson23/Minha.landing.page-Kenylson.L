# Correção - Tela Preta no Vercel

## Problema Identificado
O deploy no Vercel estava retornando tela preta devido a configurações incorretas de build e estrutura de arquivos.

## Correções Implementadas

### 1. Configuração Simplificada do Vercel
- Removidas configurações complexas de `vercel.json`
- Configuração direta: build command, output directory, install command
- Sem configurações de routes/rewrites desnecessárias

### 2. Otimização do Build Vite
- Configuração específica para produção em `vite.config.prod.ts`
- Manual chunks para otimizar carregamento
- Configuração correta de paths e aliases
- Tree shaking habilitado para reduzir bundle

### 3. Scripts de Build
- `vercel-build.mjs` para build customizado
- `build.js` para testes locais
- Verificação automática de arquivos gerados

## Como Fazer Deploy no Vercel

### Opção 1: Deploy Automático (Recomendado)
1. Conecte seu repositório no Vercel
2. As configurações em `vercel.json` serão aplicadas automaticamente
3. Build command: `npx vite build --config vite.config.prod.ts`
4. Output directory: `dist`

### Opção 2: Deploy Manual
```bash
npm install -g vercel
vercel --prod
```

## Verificação
Após o deploy, o site deve:
- Carregar sem tela preta
- Mostrar o design cyberpunk completo
- Todas as animações funcionando
- Navegação e scroll effects ativos

## Configuração Atual
- `vercel.json`: Configuração simplificada
- `vite.config.prod.ts`: Build otimizado
- Estrutura de arquivos: `client/` → `dist/`

Se ainda houver problemas, verifique:
1. Logs de build no Vercel Dashboard
2. Console do navegador para erros JS
3. Arquivos gerados na pasta `dist/`