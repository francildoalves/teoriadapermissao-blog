---
title: "Arquitetura e Estrutura Técnica"
description: "Visão aprofundada da stack tecnológica, padrões de código e organização de pastas."
version: "3.0"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T18:30:00-03:00
modDatetime: 2026-01-14T18:30:00-03:00
---

Este documento serve como a referência técnica oficial do blog `teoriadapermissao.com.br`, explicando como o sistema foi construído e onde cada componente reside.

## 1. Stack Tecnológica 🛠️

O projeto é um site estático (SSG) de alta performance, construído sobre o ecossistema Astro.

| Componente | Tecnologia | Função |
| :--- | :--- | :--- |
| **Framework**| [Astro 5](https://astro.build) | Motor de renderização e build estático. |
| **Linguagem** | TypeScript | Tipagem estrita para segurança do código. |
| **Estilos** | Tailwind CSS v4 | Estilização utility-first (integrado via Vite). |
| **Conteúdo** | Markdown / MDX | Artigos com frontmatter validado (Zod). |
| **Busca** | Fuse.js / Pagefind | Motor de busca client-side leve. |
| **Imagens** | Satori + Resvg | Geração automática de cards para redes sociais (OG Images). |

---

## 2. Estrutura de Diretórios 📂

Abaixo está o mapa completo da pasta `src/`, onde reside toda a lógica da aplicação.

### Raiz `src/`
*   `config.ts`: **Arquivo Vital.** Contém as configurações globais (Título do Site, Autor, Paginação, Toggle de Tema).
*   `constants.ts`: Definição de links sociais (Footer) e botões de compartilhamento.
*   `content.config.ts`: Define os *Schemas* das coleções (valida se o Markdown tem título, data, etc).

### Conteúdo (`src/data/`)
Diferente de projetos Astro padrão, utilizamos `src/data/` para separar fisicamente os idiomas.
*   `blog/[idioma]/`: Aqui ficam os artigos `.md`. Ex: `src/data/blog/en/post-1.md`.
*   `policies/[idioma]/`: Documentos legais (Privacidade, Termos).

### Internacionalização (`src/i18n/`)
O cérebro do suporte multilíngue.
*   `config.ts`: Registro de idiomas ativos e metadados (RTL/LTR).
*   `locales/`: Arquivos `.ts` contendo o dicionário de tradução da interface (Botões, Menus).

### Componentes (`src/components/`)
Blocos de construção da interface.
*   `Card.astro`: O componente visual que exibe o resumo de um post nas listagens.
*   `Header.astro` / `Footer.astro`: Cabeçalho e rodapé globais.
*   `Datetime.tsx`: Componente React (Island) para formatar datas no navegador do usuário.

### Páginas e Rotas (`src/pages/`)
O Astro usa roteamento baseado em arquivos.
*   `[...locale]/`: Rota dinâmica "Coringa". Ela captura o idioma da URL (ex: `/pt-br/`) e renderiza todo o site baseada nisso.
    *   `index.astro`: A Home Page.
    *   `posts/`: Listagem de artigos.
    *   `tags/`: Listagem de categorias.

---

## 3. Conceitos Arquiteturais Chave 🧠

### A. Content Collections
O Astro valida rigorosamente o metadado (Frontmatter) de cada post. Se você esquecer um campo obrigatório (como `description`), o build falhará propositalmente para evitar erros em produção. As regras estão em `src/content.config.ts`.

### B. Ilhas de Interatividade (Islands)
O site segue o princípio de "Zero JavaScript por padrão". O HTML é gerado 100% estático no servidor. O JavaScript só é carregado em "Ilhas" específicas:
*   **Busca:** A barra de pesquisa precisa rodar no cliente.
*   **Tema:** O script de troca de tema (Claro/Escuro) roda instantaneamente para evitar *flicker*.

### C. Geração de Imagens (OG Cards)
Ao invés de criar imagens no Photoshop para cada post, o sistema usa **Satori**. Durante o build, ele lê o título do seu post e "desenha" uma imagem PNG automaticamente, salvando na pasta `dist/`.

### D. Estratégia de i18n
Utilizamos uma estratégia de **Roteamento Híbrido**:
1.  **URL:** Define o idioma do conteúdo (`teoriadapermissao.com.br/en/post`).
2.  **Detecção:** Se o usuário entra na raiz (`/`), um middleware detecta o idioma do navegador e redireciona (ex: de `/` para `/pt-br/`).
