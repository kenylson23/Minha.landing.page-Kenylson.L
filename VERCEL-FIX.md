# Correção - Tela Preta no Deploy

## Problema Identificado
A tela preta no deploy é causada por:
1. Ícones inexistentes referenciados no manifest.json
2. Possíveis problemas de path resolution em produção
3. Configurações incorretas de build

## Correções Implementadas

### 1. Manifest.json Corrigido
- Removida referência a ícones inexistentes (/icon-192x192.png, /icon-512x512.png)
- Mantidas apenas configurações essenciais
- Background color: #000000 (preto cyberpunk)
- Theme color: #00ff00 (verde neon)

### 2. Configuração Simplificada do Vercel
```json
{
  "buildCommand": "npx vite build --config vite.config.prod.ts",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

### 3. Estrutura de Arquivos Verificada
- client/index.html → correto
- client/src/main.tsx → correto  
- client/src/index.css → estilos cyberpunk OK
- manifest.json → corrigido

## Possíveis Causas da Tela Preta

### 1. Ícones Faltando no Manifest
✅ **CORRIGIDO**: Removidos ícones inexistentes do manifest.json

### 2. Erro de Console JavaScript
- Verifique console do navegador após deploy
- Procure por erros de importação de módulos
- Verifique se todos os assets estão sendo carregados

### 3. Path Resolution em Produção
- Alias @/ configurado corretamente
- Public dir apontando para ../public
- Base path configurado como '/'

## Como Testar

### Após o Deploy:
1. Abra o console do navegador (F12)
2. Verifique por erros em vermelho
3. Vá para aba Network e veja se algum arquivo falha ao carregar
4. Se ainda estiver preto, documente os erros encontrados

### Debugging Steps:
```
1. Deploy novamente após as correções do manifest.json
2. Se ainda houver tela preta, copie os erros do console
3. Verifique se o arquivo index.html está sendo servido
4. Confirme se o build gerou arquivos em dist/
```

## Status Atual
✅ Manifest.json corrigido - ícones removidos
✅ Vercel.json simplificado
✅ CSS cyberpunk intacto
✅ Estrutura de arquivos verificada

**Próximo passo**: Faça um novo deploy e verifique o console do navegador para identificar erros específicos.