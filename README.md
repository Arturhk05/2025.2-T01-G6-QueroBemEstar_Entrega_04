# Backend - Quero Bem Estar

Este é o backend do projeto Quero Bem Estar, desenvolvido com Node.js, TypeScript, Express e TypeORM.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Como executar o projeto

### 1. Instalação das dependências

Clone o repositório e navegue até a pasta do backend:

```bash
cd backend
npm install
```

### 2. Configuração das variáveis de ambiente

Copie o arquivo de exemplo e configure suas variáveis de ambiente:

```bash
# Copie o arquivo .env.example para .env
cp .env.example .env
```

Ou no Windows:

```cmd
copy .env.example .env
```

Edite o arquivo `.env` conforme necessário. As configurações padrão já estão adequadas para desenvolvimento local com Docker.

**Variáveis principais:**

- `NODE_ENV` - Ambiente de execução (development/production)
- `PORT` - Porta do servidor (padrão: 3000)
- `JWT_SECRET` - Chave secreta para tokens JWT (altere em produção!)
- `DB_*` - Configurações do banco de dados MySQL

### 3. Configuração do banco de dados

O projeto utiliza MySQL como banco de dados. Para facilitar o desenvolvimento, utilizamos Docker Compose:

```bash
# Iniciar o banco de dados MySQL com Docker
npm run up
```

Este comando irá:

- Criar um container MySQL na porta 3306
- Criar o banco de dados `quero_bem_estar`
- Configurar as credenciais de acesso

**Credenciais do banco:**

- Host: `localhost`
- Porta: `3306`
- Database: `quero_bem_estar`
- Usuário: `user`
- Senha: `password`
- Root password: `root`

### 4. Executar o projeto

#### Modo de desenvolvimento (recomendado)

```bash
npm run start:dev
```

Este comando:

- Utiliza `nodemon` para reiniciar automaticamente o servidor quando arquivos são modificados
- Executa com `ts-node` para compilar TypeScript em tempo real
- Monitora alterações na pasta `src`

#### Modo de produção

```bash
# Primeiro, compile o projeto
npm run build

# Depois execute
npm start
```

### 5. Parar o banco de dados

Quando terminar de trabalhar, você pode parar o container do banco:

```bash
npm run down
```

## 📚 Scripts disponíveis

- `npm start` - Executa o projeto compilado em modo produção
- `npm run start:dev` - Executa o projeto em modo desenvolvimento com hot-reload
- `npm run build` - Compila o TypeScript para JavaScript
- `npm run up` - Inicia o banco de dados MySQL com Docker Compose
- `npm run down` - Para e remove os containers do Docker Compose
- `npm run prettier` - Formata o código usando Prettier

## 🔧 Estrutura do projeto

```
src/
├── main/           # Configuração principal da aplicação
├── modules/        # Módulos da aplicação (auth, receitas, social, users)
└── shared/         # Código compartilhado (errors, helpers, middleware, etc.)
```

## 🌐 Endpoints da API

O servidor será executado em `http://localhost:3000` (ou a porta configurada).

Para testar os endpoints, você pode usar o arquivo `requests.http` na raiz do projeto com uma extensão como REST Client no VS Code.

## 🐛 Troubleshooting

### Erro de conexão com o banco de dados

- Certifique-se de que o Docker está rodando
- Execute `npm run up` para garantir que o container MySQL está ativo
- Verifique se a porta 3306 não está sendo usada por outro serviço

### Erro de permissões no Docker

- No Linux/Mac, talvez seja necessário executar os comandos Docker com `sudo`
- Certifique-se de que seu usuário está no grupo `docker`

### Porta já em uso

- Se a porta 3000 estiver em uso, modifique a configuração no arquivo de ambiente
- Para o MySQL, se a porta 3306 estiver em uso, modifique no `docker-compose.yml`

## 📝 Notas adicionais

- O projeto utiliza TypeORM para gerenciamento do banco de dados
- A autenticação é feita com JWT (JSON Web Tokens)
- As senhas são criptografadas com bcrypt
- O projeto segue padrões de Clean Architecture
