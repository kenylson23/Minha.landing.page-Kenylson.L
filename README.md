# 🚀 Kenylson Lourenço - Landing Page Portfolio

Uma landing page imersiva e interativa desenvolvida para apresentar os serviços de desenvolvimento web de Kenylson Lourenço, com animações espetaculares e design futurista em tons de preto e verde neon.

## ✨ Características

- **Design Futurista**: Interface moderna com tema cyberpunk em preto e verde neon
- **Animações Avançadas**: Efeitos de scroll, parallax, rotações 3D e transições suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Formulário Funcional**: Sistema de contato integrado com validação
- **Performance Otimizada**: Build otimizado para carregamento rápido
- **SEO Friendly**: Meta tags e estrutura otimizada para motores de busca

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Framer Motion** - Animações avançadas
- **Tailwind CSS** - Estilização utilitária
- **Radix UI** - Componentes acessíveis
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de dados

### Backend
- **Netlify Functions** - Serverless functions
- **Express.js** - Framework para desenvolvimento local

### Build & Deploy
- **Vite** - Build tool moderno
- **Netlify** - Hospedagem e deploy

## 📁 Estrutura do Projeto

```
kenylson-portfolio/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilitários e configurações
│   │   └── index.css       # Estilos globais
│   └── index.html          # Template HTML
├── netlify/
│   └── functions/          # Serverless functions
├── shared/                 # Código compartilhado
│   └── schema.ts           # Schemas de validação
├── netlify.toml            # Configuração Netlify
├── vite.config.prod.ts     # Configuração Vite para produção
└── build.sh               # Script de build
```

## 🚀 Deploy no Netlify

### Opção 1: Deploy via Git (Recomendado)

1. **Push para GitHub**:
   ```bash
   git add .
   git commit -m "Preparar para deploy no Netlify"
   git push origin main
   ```

2. **Conectar no Netlify**:
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub
   - Configure as seguintes settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: `20`

### Opção 2: Deploy Manual

1. **Executar build local**:
   ```bash
   ./build.sh
   ```

2. **Upload da pasta dist**:
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta `dist` para o deploy manual

## ⚙️ Configurações Importantes

### Variables de Ambiente (Opcional)
Se precisar de integrações externas, configure no painel do Netlify:

```env
# Exemplo para analytics
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_HOTJAR_ID=your_hotjar_id
```

### Domínio Personalizado
No painel do Netlify:
1. Vá em "Domain settings"
2. Adicione seu domínio customizado
3. Configure os DNS conforme instruções

## 📱 Seções da Landing Page

1. **Hero Section** - Apresentação principal com animações neon
2. **Services** - Serviços oferecidos com cards interativos
3. **Portfolio** - Projetos em destaque com efeitos 3D
4. **Enhanced Results** - Estatísticas animadas com contadores
5. **Skills** - Habilidades técnicas com barras de progresso animadas
6. **Contact** - Formulário funcional de contato

## 🎨 Customizações

### Cores
As cores principais estão definidas em `client/src/index.css`:
- **Primary**: Verde neon (#22c55e)
- **Background**: Preto (#000000)
- **Secondary**: Tons de cinza

### Animações
As animações personalizadas estão em:
- `client/src/components/ui/scroll-trigger-animations.tsx`
- `client/src/components/ui/scroll-animations.tsx`
- `client/src/components/ui/advanced-scroll-effects.tsx`

## 📞 Contato

- **Telefone**: +244 949639932
- **Email**: Configurar no formulário de contato
- **Localização**: Angola, Luanda

## 📄 Licença

Este projeto é propriedade de Kenylson Lourenço. Todos os direitos reservados.

---

**Desenvolvido com ❤️ e muita tecnologia por Kenylson Lourenço**