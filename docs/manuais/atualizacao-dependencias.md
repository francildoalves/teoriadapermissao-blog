---
title: "Atualizando Dependências e Core"
description: "Guia seguro para manter o projeto e o template AstroPaper atualizados."
version: "2.0"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T17:35:00-03:00
modDatetime: 2026-01-14T17:35:00-03:00
---

Este documento explica como manter as dependências do projeto saudáveis e como sincronizar melhorias do template original (AstroPaper) com segurança.

## 1. Atualizando Pacotes (Dependências)

Este projeto utiliza **pnpm**. Evite usar `npm` ou `yarn` para não gerar arquivos de lock conflitantes.

### Método Recomendado (`npm-check-updates`)

A forma mais segura e visual de atualizar é usando o utilitário `npm-check-updates` (ncu).

1.  **Instalação (Global):**
    ```bash
    npm install -g npm-check-updates
    ```

2.  **Verificar atualizações disponíveis:**
    Na raiz do projeto, rode:
    ```bash
    ncu
    ```
    Isso listará quais pacotes têm novas versões, mas **não altera nada** ainda.

3.  **Atualizar o `package.json`:**
    Se estiver tudo ok, rode:
    ```bash
    ncu -u
    ```

4.  **Instalar as novas versões:**
    Agora que o `package.json` foi alterado, mande o pnpm baixar os pacotes:
    ```bash
    pnpm install
    # ou simplesmente
    pnpm i
    ```

### Cuidados Importantes
*   **Major Versions (ex: v1.0.0 -> v2.0.0):** Tenha cuidado extra. Mudanças majoritárias geralmente quebram código (Breaking Changes). Leia o changelog da biblioteca antes de atualizar.
*   **Astro:** O Astro muda frequentemente. Sempre teste rodando `pnpm dev` e `pnpm build` após atualizar o core do Astro.

---

## 2. Atualizando o Template (AstroPaper)

O AstroPaper é o esqueleto deste blog. Para trazer melhorias do repositório oficial (`satnaing/astro-paper`) sem perder suas modificações (conteúdo, i18n, estilos), use o Git.

### O que NÃO deve ser sobrescrito?
Tenha cuidado para na atualização não perder arquivos que são exclusivamente seus:
*   `src/data/` (Seus posts e políticas)
*   `src/i18n/` (Suas configurações de idioma)
*   `src/config.ts` (Sua identidade)
*   `src/styles/` (Seu CSS customizado)

### Processo de Atualização (Via Git CLI)

> **Pré-requisito:** Saber resolver conflitos de merge (Merge Conflicts).

1.  **Adicione o remoto original (apenas na 1ª vez):**
    ```bash
    git remote add astro-paper https://github.com/satnaing/astro-paper.git
    ```

2.  **Crie uma branch segura:**
    Nunca atualize direto na main.
    ```bash
    git checkout -b chore/update-astropaper
    ```

3.  **Puxe as alterações:**
    ```bash
    git pull astro-paper main --allow-unrelated-histories
    ```

4.  **Resolva os Conflitos:**
    O Git vai reclamar sobre arquivos que ambos mexeram (ex: `astro.config.ts`).
    *   Abra o VS Code.
    *   Aceite suas mudanças ("Current Change") para configurações.
    *   Aceite as mudanças deles ("Incoming Change") para correções de bugs internos.

5.  **Valide:**
    Rode o site. Se tudo funcionar, faça o commit e merge para a `main`.
