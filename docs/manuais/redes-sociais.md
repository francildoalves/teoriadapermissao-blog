---
title: "Configuração de Redes Sociais"
description: "Como gerenciar links de perfil e botões de compartilhamento (Share)."
version: "1.0"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T17:45:00-03:00
modDatetime: 2026-01-14T17:45:00-03:00
---

Este documento explica como configurar os ícones de redes sociais que aparecem no rodapé e os botões de compartilhamento nos artigos.

**Arquivo Central:** Todo o controle é feito em `src/constants.ts`.

## 1. Links de Perfil (Footer e Sobre) 👤

Esta lista define **quais redes sociais do Blog** serão exibidas. Elas aparecem no rodapé de todas as páginas e na seção "Sobre".

Para adicionar ou remover, edite a constante `SOCIALS`:

```typescript
// src/constants.ts
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/seu-perfil",
    linkTitle: " ${SITE.title} no Github", // Texto para acessibilidade
    active: true, // Mude para false para esconder sem deletar
  },
  {
    name: "Instagram",
    href: "https://instagram.com/seu-perfil",
    linkTitle: "${SITE.title} no Instagram",
    active: true,
  },
];
```

> **Nota:** O ícone (SVG) é carregado automaticamente baseado no `name`. Se você colocar um nome desconhecido (ex: "MinhaRede"), pode ser necessário adicionar o ícone em `src/components/Socials.astro`.

## 2. Botões de Compartilhamento (Share) 🔗

Esta lista define os botões que aparecem **ao final de cada post**, permitindo que o leitor compartilhe o conteúdo.

Para alterar, edite a constante `SHARE_LINKS`:

```typescript
// src/constants.ts
export const SHARE_LINKS: ShareLink[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=", // A URL base de API
    linkTitle: "Compartilhar via WhatsApp",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: "Compartilhar no LinkedIn",
    active: true,
  },
];
```

**Importante:** Não altere o `href` dessas redes a menos que a API delas mude. O código do blog adiciona automaticamente o link do post ao final dessa URL.
