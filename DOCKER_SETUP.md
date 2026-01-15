# Docker Setup — Todo App Backend

Este documento descreve como executar a API **Todo App Backend** utilizando **Docker** e **Docker Compose**, incluindo a configuração do banco de dados MySQL e a integração com Sequelize.

---

## Visão Geral da Arquitetura

A aplicação é composta por dois serviços principais:

- **API**: Node.js (Express + Sequelize)
- **Banco de Dados**: MySQL

Ambos os serviços rodam em containers separados, conectados pela mesma rede Docker criada automaticamente pelo Docker Compose.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Docker
- Docker Compose (ou Docker Desktop)

Verificação:

```bash
docker --version
docker compose version
