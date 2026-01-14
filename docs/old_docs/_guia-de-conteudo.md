# Guia de Conteúdo e Postagens

Este guia explica como criar novas postagens no blog Teoria da Permissão.

## Onde ficam os posts?

Os artigos são escritos em **Markdown** (`.md`) e ficam organizados dentro da pasta `src/data/blog/`.

Recomendamos organizar por idioma:
*   `src/data/blog/pt-br/` -> Posts em Português
*   `src/data/blog/en/` -> Posts em Inglês
*   `src/data/blog/es/` -> Posts em Espanhol

## Estrutura do Arquivo (Frontmatter)

Cada arquivo `.md` deve começar com um cabeçalho (Frontmatter) entre três traços (`---`).

```yaml
---
title: Título do Post
author: FranCILDO Gryphon
pubDatetime: 2024-01-12T10:00:00Z
description: Uma breve descrição para aparecer nos cards e SEO.
featured: true # (Opcional) Se true, aparece na seção de destaque.
draft: false   # (Opcional) Se true, não é publicado no site final.
tags:
  - tech
  - governança
---

Aqui começa o conteúdo do post em Markdown...
```

### Campos Disponíveis

| Campo | Tipo | Obrigatório | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | Texto | Sim | O título principal do artigo (H1). |
| `pubDatetime` | Data | Sim | Data de publicação (ISO 8601). |
| `description` | Texto | Sim | Fica abaixo do título nas listagens. |
| `author` | Texto | Não | Padrão: Configurado em `config.ts`. |
| `featured` | Booleano | Não | Destaca o post na Home. |
| `draft` | Booleano | Não | Rascunho. `true` esconde o post. |
| `tags` | Lista | Não | Categorias do post. |
| `ogImage` | Imagem | Não | Imagem personalizada para compartilhamento social. |
| `canonicalURL`| Texto | Não | URL canônica (para SEO avançado). |

## Imagens nos Posts

Você pode colocar imagens na pasta `src/assets/` e referenciá-las nos posts de duas formas:
1.  **Caminho Relativo:** `![Legenda](../../../assets/images/minha-foto.png)`
2.  **Alias (Recomendado):** O Astro Paper suporta otimização automática se configurado na collection.

## Dicas de Escrita
*   Use `##` e `###` para subtítulos. O `H1` já é o título do post.
*   O sistema gera automaticamente o **Tempo de Leitura**.
*   O **Slug** (parte final da URL) é gerado a partir do nome do arquivo. Ex: `meu-post.md` vira `/posts/meu-post`.
