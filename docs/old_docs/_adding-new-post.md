---
title: "Adicionando um novo post"
description: "Como adicionar um novo post no blog AstroPaper."
version: "1.0"
upstream_source: "adding-new-post.md (reconstructed)"
pubDatetime: 2022-09-23T04:58:53Z
modDatetime: 2025-03-20T03:15:57.792Z
---

Para adicionar um novo post, você só precisa criar um arquivo markdown (`.md`) dentro do diretório `src/content/blog/`. O nome do arquivo será usado como o slug da URL se `postSlug` não for especificado no frontmatter.

## Frontmatter

O frontmatter é onde você define metadados para o seu post. Aqui está um exemplo de frontmatter:

```yaml
---
title: "Título do Post"
author: "Seu Nome"
pubDatetime: 2023-09-23T04:58:53Z
modDatetime: 2023-09-23T04:58:53Z # Opcional
postSlug: "titulo-do-post" # Opcional
featured: true # Opcional
draft: false # Opcional
tags:
  - tag1
  - tag2
description: "Descrição do post para SEO e listagens."
ogImage: "" # Opcional: URL ou caminho para imagem em public/
---
```

### Campos do Frontmatter

- **title** (obrigatório): O título do seu post.
- **author** (opcional): O nome do autor. Padrão para `SITE.author` em `config.ts` se não especificado.
- **pubDatetime** (obrigatório): A data e hora de publicação.
- **modDatetime** (opcional): Data e hora de modificação.
- **postSlug** (opcional): URL personalizada para o post.
- **featured** (opcional): Fixar post na seção "Destaques" da Home.
- **draft** (opcional): Se `true`, o post não aparecerá em produção.
- **tags** (opcional): Lista de tags.
- **description** (obrigatório): Resumo do post.
- **ogImage** (opcional): Imagem para compartilhamento social.

## Conteúdo

Após o frontmatter, você pode escrever seu conteúdo usando Markdown padrão.

```markdown
## Subtítulo

Aqui vai o conteúdo do post...
```
