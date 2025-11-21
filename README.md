# Frontend - Quero Bem Estar

Este é o frontend do projeto Quero Bem Estar, uma aplicação web moderna para gerenciamento de receitas, competições e bem-estar social.

## 🚀 Tecnologias utilizadas

- **React** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Ferramenta de build rápida e moderna
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Biblioteca de componentes UI
- **Tanstack Query** - Gerenciamento de estado para requisições
- **React Hook Form** - Gerenciamento de formulários
- **Framer Motion** - Animações e transições

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🚀 Como executar o projeto

### 1. Instalação das dependências

Clone o repositório e navegue até a pasta do frontend:

```bash
cd frontend
npm install
```

### 2. Executar em modo desenvolvimento

```bash
npm run dev
```

O projeto será executado em `http://localhost:5173` (ou outra porta disponível).

### 3. Build para produção

```bash
# Build otimizado para produção
npm run build

# Visualizar o build local
npm run preview
```

### 4. Linting

```bash
# Verificar problemas de código
npm run lint
```

## 📚 Scripts disponíveis

- `npm run dev` - Executa o projeto em modo desenvolvimento com hot-reload
- `npm run build` - Cria build otimizado para produção
- `npm run build:dev` - Cria build em modo desenvolvimento
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa verificações de linting no código

## 🗂️ Estrutura do projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── atoms/          # Componentes básicos (botões, inputs, etc.)
│   ├── molecules/      # Componentes compostos
│   ├── organisms/      # Componentes complexos
│   ├── templates/      # Templates de página
│   └── ui/            # Componentes do shadcn/ui
├── contexts/           # Contextos React (auth, etc.)
├── hooks/             # Custom hooks
├── lib/               # Utilitários e configurações
├── pages/             # Páginas da aplicação
├── services/          # Serviços (API, etc.)
└── types/             # Tipos TypeScript
```

## 🌐 Principais funcionalidades

- **Autenticação** - Login e registro de usuários
- **Gerenciamento de Receitas** - Criação, visualização e interação com receitas
- **Sistema Social** - Curtidas, comentários e interações entre usuários
- **Competições** - Participação em competições de receitas
- **Configurações** - Personalização do perfil e preferências

## 🔧 Configuração do ambiente

### Variáveis de ambiente

Se necessário, crie um arquivo `.env` na raiz do frontend com as configurações:a

```env
VITE_API_URL=http://localhost:3000
```

### Conectando com o Backend

Certifique-se de que o backend esteja rodando em `http://localhost:3000` (ou ajuste a URL no arquivo de configuração da API).

Para mais informações sobre como executar o backend, consulte o README na pasta `backend/`.

## 🎨 Customização

### Cores e Tema

O projeto utiliza Tailwind CSS com configuração customizada. Você pode modificar as cores e temas no arquivo:

- `tailwind.config.ts` - Configuração do Tailwind
- `src/index.css` - Variáveis CSS customizadas

### Componentes UI

Os componentes UI são baseados no shadcn/ui. Para adicionar novos componentes:

1. Consulte a [documentação do shadcn/ui](https://ui.shadcn.com/)
2. Use o CLI para adicionar componentes: `npx shadcn@latest add [component]`

## 🐛 Troubleshooting

### Porta já em uso

- Se a porta 5173 estiver em uso, o Vite automaticamente tentará a próxima porta disponível
- Você pode especificar uma porta específica: `npm run dev -- --port 3001`

### Erro de conexão com a API

- Certifique-se de que o backend está rodando
- Verifique se a API_BASE_URL está correta no arquivo `src/services/api.ts`
- Verifique se não há problemas de CORS

### Problemas de dependências

- Remova a pasta `node_modules` e execute `npm install` novamente
- Certifique-se de estar usando a versão correta do Node.js
