---
title: "DevOps & CI/CD Pipeline"
description: "Manual técnico sobre a automação de qualidade e deploy do projeto."
version: "2.0"
pubDatetime: 2026-01-14T17:00:00-03:00
modDatetime: 2026-01-14T17:00:00-03:00
author: FranCILDO Gryphon
---

Este documento detalha a infraestrutura de automação (DevOps) configurada no GitHub Actions para garantir a qualidade, testabilidade e entrega contínua do Blog Teoria da Permissão.

## 1. Visão Geral dos Workflows

O projeto possui 6 fluxos de trabalho (workflows) automatizados localizados em `.github/workflows/`. Cada um tem uma responsabilidade específica:

| Arquivo | Gatilho | Função Principal |
| :--- | :--- | :--- |
| `ci.yml` | `push` na `main` | **Maestro.** Orquestra a verificação de qualidade e testes a cada commit direto. |
| `pr-checks.yml` | `pull_request` | Garante que PRs não quebrem o código. Roda builds de teste. |
| `code-standards-checks.yml` | Reutilizável | Verifica ESLint, Prettier e TypeScript (Type-Check). |
| `tests.yml` | Reutilizável | Executa a suíte de testes unitários (`vitest`). |
| `release.yml` | `push` na `main` | Automação de versionamento e Changelog (Release Please). |
| `pr-title.yml` | `pull_request` | Valida se o título do PR segue o padrão Conventional Commits. |

---

## 2. Detalhes dos Pipelines

### Pipeline de Qualidade (`code-standards-checks.yml`)
Este é o guardião da qualidade do código. Ele executa:
1.  **Lint:** `pnpm lint` (ESLint) para encontrar erros lógicos e de estilo.
2.  **Format:** `pnpm format:check` (Prettier) para garantir indentação correta.
3.  **Type Check:** `pnpm type-check` (Astro Check) para validar tipos TypeScript.
4.  **Build:** (Opcional) Tenta compilar o projeto para garantir que não há erros de build.

### Pipeline de Testes (`tests.yml`)
Executa os testes unitários definidos com **Vitest**.
*   Comando: `pnpm test`
*   Escopo: Testa lógica de internacionalização, utilitários, etc.

### Validação de Pull Request (`pr-title.yml`)
Para manter o histórico do Git limpo, exigimos o padrão [Conventional Commits](https://www.conventionalcommits.org/).
*   **Aceito:** `feat: adiciona dark mode`, `fix: corrige menu`, `docs: atualiza manual`.
*   **Rejeitado:** `atualizei o menu`, `WIP`.

---

## 3. Automação de Release (`release.yml`)

Utilizamos o **Google Release Please** para automatizar o versionamento.

### Como funciona?
1.  O sistema analisa seus commits desde a última versão.
2.  Se encontrar `feat:`, ele entende que é uma nova funcionalidade (Minor version).
3.  Se encontrar `fix:`, ele entende que é uma correção (Patch version).
4.  Ele cria um **Pull Request de Release** automaticamente.
5.  Quando você aprova e faz merge desse PR, ele:
    *   Cria uma nova Tag no Git (ex: `v1.3.0`).
    *   Gera uma Release no GitHub.
    *   Atualiza o `CHANGELOG.md`.

---

## 4. Badges do README

Os "escudos" no topo do README refletem o status desses pipelines em tempo real.

*   ![CI Pipeline](https://img.shields.io/github/actions/workflow/status/francildoalves/teoriadapermissao-blog/ci.yml?branch=main) **CI Pipeline:** Indica se o último commit na `main` passou em todos os testes.
*   ![Release](https://img.shields.io/github/v/release/francildoalves/teoriadapermissao-blog) **Release:** Mostra a última versão estável gerada.

---

## 5. Como Manter (Troubleshooting)

### O Badge ficou vermelho?
1.  Clique no badge ou vá até a aba "Actions" no GitHub.
2.  Identifique em qual etapa falhou (Lint? Test?).
3.  Rode o comando equivalente localmente para depurar (ex: `pnpm lint`).

### O Release não foi criado?
Verifique se seus commits seguiram o padrão Conventional Commits. Commits simples sem prefixo (ex: "update readme") não disparam novas versões.
