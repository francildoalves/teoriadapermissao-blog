---
title: "Personalizando Esquemas de Cores do AstroPaper"
description: "Como habilitar/desabilitar modo claro e escuro, e personalizar as cores do tema."
version: "1.0"
upstream_source: "customizing-astropaper-theme-color-schemes.md"
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2025-06-09T07:42:54.791Z
---

Este post explica como você pode habilitar/desabilitar o modo claro e escuro para o site. Além disso, você aprenderá como personalizar os esquemas de cores de todo o site.

## Índice

## Habilitar/desabilitar modo claro e escuro

O tema AstroPaper inclui modo claro e escuro por padrão. Em outras palavras, haverá dois esquemas de cores: um para o modo claro e outro para o modo escuro. Esse comportamento padrão pode ser desativado no objeto de configuração `SITE` do arquivo `src/config.ts`.

```js
// arquivo: src/config.ts
export const SITE = {
  website: "https://teoriadapermissao.com.br/",
  author: "Autor",
  desc: "Descrição...",
  title: "Teoria da Permissão",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true, // true por padrão
  postPerPage: 3,
};
```

Para desativar o `modo claro e escuro`, defina `SITE.lightAndDarkMode` como `false`.

## Escolher o esquema de cores primário

Por padrão, se desativarmos `SITE.lightAndDarkMode`, obteremos apenas o `prefers-color-scheme` do sistema do usuário.

Portanto, para escolher um esquema de cores primário em vez do `prefers-color-scheme`, temos que definir o esquema de cores na variável `primaryColorScheme` dentro de `public/toggle-theme.js`.

```js
/* arquivo: public/toggle-theme.js */
const primaryColorScheme = ""; // "light" | "dark"

// Obtém dados do tema do armazenamento local
const currentTheme = localStorage.getItem("theme");

// outros códigos etc...
```

A variável **primaryColorScheme** pode conter dois valores: `"light"` ou `"dark"`. Você pode deixar a string vazia (padrão) se não quiser especificar o esquema de cores primário.

- `""` - `prefers-color-scheme` do sistema. (padrão)
- `"light"` - usa o modo claro como esquema de cores primário.
- `"dark"` - usa o modo escuro como esquema de cores primário.

<details><summary>Por que 'primaryColorScheme' não está dentro de config.ts?</summary>

> Para evitar oscilação de cores (flickering) no recarregamento da página, temos que colocar os códigos JavaScript de alternância o mais cedo possível quando a página carrega. Isso resolve o problema de flickering, mas como troca, não podemos mais usar importações ESM.

[Clique aqui](https://docs.astro.build/en/reference/directives-reference/#isinline) para saber mais sobre o script `is:inline` do Astro.

</details>

## Personalizar esquemas de cores

Tanto os esquemas de cores claro quanto escuro do tema AstroPaper podem ser personalizados. Você pode fazer isso no arquivo `src/styles/base.css` (nota: no AstroPaper original era `global.css`, mas adaptamos para `base.css` no nosso projeto com Tailwind v4).

```css
/* arquivo: src/styles/base.css */

:root,
html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #282728;
  --accent: #006cac;
  --muted: #e6e6e6;
  --border: #ece9e9;
}

html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #ff6b01;
  --muted: #343f60bf;
  --border: #ab4b08;
}
```

No tema AstroPaper, os seletores `:root` e `html[data-theme="light"]` definem o esquema de cores claro, enquanto `html[data-theme="dark"]` define o esquema de cores escuro.

Para personalizar seu próprio esquema de cores, especifique suas cores claras dentro de `:root, html[data-theme="light"]`, e suas cores escuras dentro de `html[data-theme="dark"]`.

Aqui está a explicação detalhada das propriedades de cor.

| Propriedade de Cor | Definição & Uso                                            |
| ------------------ | ---------------------------------------------------------- |
| `--background`     | Cor primária do site. Geralmente o fundo principal.        |
| `--foreground`     | Cor secundária do site. Geralmente a cor do texto.         |
| `--accent`         | Cor de destaque do site. Cor de link, cor de hover, etc.   |
| `--muted`          | Cor de fundo de cartões e barras de rolagem para hover.    |
| `--border`         | Cor da borda. Especialmente usada em linhas horizontais.   |
