# Guia de Deploy - Portfólio Kenylson Lourenço

Este guia mostra como fazer deploy do seu portfólio em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 20+ instalado
- Conta na plataforma escolhida
- Código fonte no GitHub/GitLab

## 🚀 Plataformas Suportadas

### 1. Netlify (Recomendado para sites estáticos)

**Configuração automática:**
- Arquivo: `netlify.toml` já configurado
- Build command: `npx vite build --config vite.config.prod.ts`
- Publish directory: `dist`

**Deploy manual:**
```bash
npm install -g netlify-cli
npm run build:static
netlify deploy --prod --dir=dist
```

**Deploy via Git:**
1. Conecte seu repositório no Netlify
2. Configure as variáveis:
   - Build command: `npx vite build --config vite.config.prod.ts`
   - Publish directory: `dist`
   - Node version: `20`

### 2. Vercel

**Configuração automática:**
- Arquivo: `vercel.json` já configurado
- Suporta tanto frontend quanto backend

**Deploy via Git:**
1. Conecte seu repositório no Vercel
2. As configurações são automáticas via `vercel.json`

**Deploy manual:**
```bash
npm install -g vercel
vercel --prod
```

### 3. Railway

**Configuração automática:**
- Arquivo: `railway.json` já configurado
- Build e start commands configurados

**Deploy via Git:**
1. Conecte seu repositório no Railway
2. As configurações são automáticas

### 4. Render

**Configuração automática:**
- Arquivo: `render.yaml` já configurado
- Plano gratuito suportado

**Deploy via Git:**
1. Conecte seu repositório no Render
2. Selecione "Web Service"
3. Use as configurações do `render.yaml`

### 5. Heroku

**Configuração automática:**
- Arquivo: `Procfile` já configurado

**Deploy via Git:**
```bash
# Instale Heroku CLI
heroku create seu-portfolio-nome
git push heroku main
```

## 🔧 Variáveis de Ambiente

Para todas as plataformas, configure:

```
NODE_ENV=production
```

Se usar banco de dados, adicione:
```
DATABASE_URL=sua_url_do_banco
```

## 📦 Builds Disponíveis

- `npm run build` - Build completo (frontend + backend)
- `npm run build:client` - Apenas frontend
- `npm run build:server` - Apenas backend
- `npm run build:static` - Build estático otimizado

## 🌐 Domínio Personalizado

Após o deploy, você pode configurar um domínio personalizado:

1. **Netlify**: Dashboard > Domain Settings
2. **Vercel**: Dashboard > Domains
3. **Railway**: Dashboard > Settings > Domains
4. **Render**: Dashboard > Settings > Custom Domains

## 🔍 Troubleshooting

**Erro de build:**
- Verifique se a versão do Node.js é 20+
- Execute `npm install` localmente
- Verifique os logs de build na plataforma

**Site não carrega:**
- Verifique se o diretório de publicação está correto (`dist`)
- Verifique se os redirects estão configurados para SPAs

**API não funciona:**
- Verifique se as rotas da API estão configuradas
- Para sites estáticos, use Netlify Functions ou Vercel Serverless

## 📈 Recomendações

- **Para portfólio simples**: Netlify ou Vercel
- **Para aplicação completa**: Railway ou Render
- **Para projetos maiores**: Heroku (pago)

## 🔄 Deploy Contínuo

Todas as plataformas suportam deploy automático via Git. Configure:

1. Push para branch principal = deploy automático
2. Pull requests = preview deploys
3. Variáveis de ambiente na dashboard da plataforma

---

✅ **Seu portfólio está pronto para deploy em qualquer uma dessas plataformas!**