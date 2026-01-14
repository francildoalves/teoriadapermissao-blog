---
title: "Geração de Imagens Sociais (OG Images)"
description: "Como funciona e como personalizar a geração automática de imagens de compartilhamento."
version: "2.0"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T17:40:00-03:00
modDatetime: 2026-01-14T17:40:00-03:00
---

Este documento detalha o sistema de geração automática de "Cards" para redes sociais (aquelas imagens que aparecem quando você compartilha um link no WhatsApp ou LinkedIn).

## 1. Como Funciona

O projeto utiliza a biblioteca **Satori** (da Vercel) para converter HTML/CSS em imagens PNG no momento do build (Static Site Generation).

A lógica é:
1.  O sistema lê o Título, Autor e Site Title do post.
2.  Desenha um layout usando Satori.
3.  Salva como imagem na pasta final `dist/assets/`.
4.  Insere a meta tag `<meta property="og:image" ...>` no HTML da página.

## 2. Personalizando o Template

Os templates visuais estão localizados em:
*   `src/utils/og-templates/post.tsx`: O layout visual do card.
*   `src/utils/og-templates/site.tsx`: Layout genérico para páginas que não são posts.

Se você quiser mudar cores, fontes ou layout, edite esses arquivos. Eles usam uma sintaxe parecida com React/JSX.

## 3. Fontes Customizadas (Importante)

Para que o Satori desenhe o texto, ele precisa carregar a fonte bruta. Isso é configurado em:
*   `src/utils/loadGoogleFont.ts`

Se você mudar a fonte do site ou adicionar um idioma que use caracteres especiais (como Árabe ou Chinês), você **precisa** garantir que a fonte correspondente esteja sendo carregada neste arquivo.

```typescript
// Exemplo em src/utils/loadGoogleFont.ts
const fontsConfig = [
  {
    name: "IBM Plex Mono", // Fonte Padrão
    // ...
  },
  {
    name: "Cairo", // Adicionado para Árabe
    // ...
  },
];
```

## 4. Desempenho (Trade-offs)

Gerar imagens leva tempo (cerca de 100ms a 1s por imagem).
*   **Em desenvolvimento:** É rápido.
*   **No build final:** Se você tiver 1.000 posts, o build pode demorar alguns minutos a mais.

Para desativar globalmente (se o build estiver muito lento), edite `src/config.ts`:
```typescript
export const SITE = {
  // ...
  dynamicOgImage: false, // Mude para false
};
```
