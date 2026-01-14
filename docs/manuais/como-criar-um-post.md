---
title: "Guia de Conteúdo e Postagens"
description: "Manual completo para autores sobre como criar, editar e publicar artigos no blog."
version: "2.1"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T18:00:00-03:00
modDatetime: 2026-01-14T18:00:00-03:00
---

Este manual é a referência definitiva para autores que desejam publicar conteúdo no **Teoria da Permissão**.

## 1. Estrutura e Localização

Diferente de projetos Astro padrão, nosso conteúdo é estritamente separado por **idioma**.
Todos os arquivos devem ser criados dentro de `src/data/blog/`.

| Idioma | Caminho da Pasta |
| :--- | :--- |
| 🇧🇷 **Português** | `src/data/blog/pt-br/` |
| 🇺🇸 **Inglês** | `src/data/blog/en/` |
| 🇪🇸 **Espanhol** | `src/data/blog/es/` |
| 🇫🇷 **Francês** | `src/data/blog/fr/` |
| 🇸🇦 **Árabe** | `src/data/blog/ar/` |
| 🇨🇳 **Chinês** | `src/data/blog/zh/` |

> **Importante:** Nunca crie posts na raiz de `blog/`. Sempre use a subpasta do idioma.

## 2. Criando o Arquivo (Frontmatter)

Crie um arquivo com extensão `.md` (Markdown). O início do arquivo **deve** conter o bloco de metadados (Frontmatter) entre três traços `---`.

### Modelo Padrão (Copie e Cole)

```yaml
---
title: "Título Impactante do Post"
author: "FranCILDO Gryphon"
pubDatetime: 2025-12-25T21:53:00-03:00
modDatetime: 2025-12-25T21:53:00-03:00 # Atualize se editar depois
description: "Resumo de 1 a 2 frases que aparecerá no Google e nos cards."
featured: false # Mude para 'true' para fixar na Home
draft: false    # Mude para 'true' para esconder o post (rascunho)
tags:
  - tutorial
  - astro
  - documentação
---
```

### Glossário dos Campos

1.  **title** (Obrigatório): O H1 da página.
2.  **pubDatetime** (Obrigatório): Formato ISO. Não esqueça o fuso horário (ex: `-03:00` para Brasília).
3.  **description** (Obrigatório): Essencial para SEO.
4.  **postSlug** (Opcional): Se omitido, a URL será o nome do arquivo. Use se quiser uma URL diferente do nome do arquivo (`meu-titulo-longo.md` -> slug: `resumo`).
5.  **ogImage** (Opcional): Caminho para uma imagem customizada de compartilhamento social. Se omitido, o sistema gera uma automática.

## 3. Escrevendo o Artigo

O corpo do post suporta **Markdown** e **MDX** (componentes React interativos).

### Títulos
Como o título principal já é o H1, comece seus tópicos com H2 (`##`).

```markdown
## Introdução
Texto...

### Um detalhe específico (H3)
Texto...
```

### Inserindo Imagens
Para melhor performance, salve as imagens em `src/assets/images/` e use caminhos relativos.

```markdown
![Descrição Acessível](../../../assets/images/exemplo-de-codigo.png)
```

O Astro irá converter automaticamente para WebP e criar versões responsivas.

## 4. Dicas de Workflow
*   **Rascunhos:** Marque `draft: true` enquanto escreve. O post só aparecerá no modo de desenvolvimento (`pnpm dev`), mas não no site final.
*   **Tags:** Use hífens para separar palavras (ex: `engenharia-de-software`).
