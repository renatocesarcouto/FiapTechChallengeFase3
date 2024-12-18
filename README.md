# Arquitetura e Uso da Aplicação - API para plataforma de blog do Tech Challenge

## 1 Visão Geral
A API para plataforma de blog do Tech Challenge é uma aplicação fullstack desenvolvida em Node.js (backend) e React (frontend) para permitir que professores da rede pública de educação postem e gerenciem conteúdo educacional online.

## 2 Tecnologias Utilizadas

Backend:
- Node.js com Express.js
- PostgreSQL
- Docker
- Jest

Frontend:
- React
- Styled Components
- React Router
- Context API

## 3 Arquitetura do Sistema

Backend:
- app.js: Arquivo principal da aplicação
- /models: Contém o modelo Post.js
- /routes: Gerencia as rotas da API
- /tests: Contém os testes unitários
- Dockerfile: Configuração para containerização
- docker-compose.yml: Orquestra os containers

Frontend:
- /components: Componentes React reutilizáveis
- /hooks: Custom hooks (useForm, usePagination)
- /contexts: Contextos globais (Auth, Toast)
- /services: Serviços de API
- /styles: Componentes estilizados

## 4 Banco de Dados
Estrutura da Tabela 'posts':
- id: integer (chave primária, auto-incremento)
- title: string(150) (não nulo)
- author: string(120) (não nulo)
- date: datetime (não nulo)
- content: text (não nulo)

## 5 Endpoints da API
- GET /posts: Lista todos os posts para alunos
- GET /posts/admin: Lista todos os posts para professores
- GET /posts/search: Busca posts por termo
- GET /posts/:id: Retorna um post específico
- POST /posts: Cria um novo post
- PUT /posts/:id: Atualiza um post existente
- DELETE /posts/:id: Remove um post

## 6 Funcionalidades Frontend
- Autenticação de usuários
- CRUD completo de posts
- Paginação e filtros de busca
- Interface responsiva
- Gestão de erros e loading states
- Sistema de notificações toast
- Formulários com validação

## 7 Inicialização
Backend: Use docker-compose up
Frontend: npm start no diretório frontend

## 8 Testes
Backend: docker-compose run test
Frontend: npm test no diretório frontend
