# TODO APP – Backend

Backend da aplicação **Todo App**, desenvolvido com Node.js, Express e Sequelize, utilizando **MySQL em Docker**.

Este projeto foi configurado para rodar **100% via Docker**, sem necessidade de instalar MySQL ou Node.js localmente.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Docker
- Docker Compose

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Docker**
- **Docker Compose**

Verifique com:

```bash
docker --version
docker compose version
```

## Como rodar o projeto (Docker)

1. Clone o repositório

```bash
git clone https://github.com/flaviare1s/todo-app-backend.git
cd todo-app-backend
```

2. Crie o arquivo .env

Na raiz do projeto, crie um arquivo chamado .env com o seguinte conteúdo:

DB_NAME=todo_db
DB_USER=todo
DB_PASSWORD=todo123
DB_HOST=mysql
DB_PORT=3306
PORT=3000


⚠️ Importante

DB_HOST=mysql é o nome do serviço no docker-compose

Não use localhost para conexão entre containers

3. Suba a aplicação com Docker Compose

Execute o comando abaixo:

```bash
docker compose up --build
```


Esse comando irá:

Criar a rede Docker

Criar o volume do MySQL

Subir o banco de dados

Criar o banco automaticamente

Subir a API apenas quando o banco estiver pronto

4. Acesse a API

A API ficará disponível em:

http://localhost:3000


Use Postman, Insomnia ou o navegador para testar as rotas.
