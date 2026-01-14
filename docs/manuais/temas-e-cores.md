---
title: "Temas, Cores e Customização Visual"
description: "Como configurar os modos Claro/Escuro e aplicar paletas de cores personalizadas."
version: "2.0"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T17:50:00-03:00
modDatetime: 2026-01-14T17:50:00-03:00
---

Este documento guia você na personalização visual do blog, desde a ativação do Dark Mode até a aplicação de paletas de cores prontas.

## 1. Configuração do Modo Claro/Escuro 🌗

Por padrão, o site oferece um botão para alternar entre temas.

### Desativar a Alternância (Forçar um tema)
Se você quiser que o site seja **sempre** Escuro ou **sempre** Claro, edite `src/config.ts`:

```typescript
// src/config.ts
export const SITE = {
  // ...
  lightAndDarkMode: false, // Define para 'false' para remover o botão de toggle
};
```

### Definir o Tema Padrão
Se a alternância estiver desligada (ou para definir a primeira impressão), configure a variável `primaryColorScheme` no arquivo `public/toggle-theme.js`.

> **Por que nesse arquivo?** Ele é um script bloqueante (`is:inline`) que roda antes do React/Astro carregar para evitar que a tela pisque (FOUC).

```javascript
/* public/toggle-theme.js */
// Opções: "light", "dark" ou "" (sistema operacional)
const primaryColorScheme = "dark"; 
```

---

## 2. Editando as Cores (CSS) 🎨

As cores são definidas como Variáveis CSS (Custom Properties) no arquivo **`src/styles/base.css`**.

| Variável | Onde é usada? |
| :--- | :--- |
| `--background` | Fundo principal da página. |
| `--foreground` | Cor principal do texto. |
| `--accent` | Cor de destaque (Links, botões, hover). |
| `--muted` | Elementos secundários (bordas sutis, fundos de cards). |
| `--border` | Linhas divisórias e bordas. |

### Exemplo de Estrutura

```css
/* src/styles/base.css */

/* Tema CLARO */
:root,
html[data-theme="light"] {
  --background: #fdfdfd;
  --foreground: #282728;
  --accent: #006cac;
  --muted: #e6e6e6;
  --border: #ece9e9;
}

/* Tema ESCURO */
html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #ff6b01;
  --muted: #343f60bf;
  --border: #ab4b08;
}
```

---

## 3. Galeria de Temas Prontos 🖼️

Abaixo estão algumas combinações de cores testadas. Para usar, basta copiar o código CSS e substituir no seu `src/styles/base.css`.

### Temas Claros

**Lobster (Creme e Vermelho)** 🦞
```css
:root, html[data-theme="light"] {
  --background: #f6eee1;
  --foreground: #012c56;
  --accent: #e14a39;
  --muted: #efd8b0;
  --border: #dc9891;
}
```

**Leaf Blue (Verde e Azul suave)** 🍃
```css
:root, html[data-theme="light"] {
  --background: #f2f5ec;
  --foreground: #353538;
  --accent: #1158d1;
  --muted: #bbc789;
  --border: #7cadff;
}
```

**Pinky Light (Rosa)** 🌸
```css
:root, html[data-theme="light"] {
  --background: #fafcfc;
  --foreground: #222e36;
  --accent: #d3006a;
  --muted: #f1bad4;
  --border: #e3a9c6;
}
```

---

### Temas Escuros

**Deep Oyster (Roxo Profundo)** 🦪
```css
html[data-theme="dark"] {
  --background: #21233d;
  --foreground: #f4f7f5;
  --accent: #ff5256;
  --muted: #4a4e86;
  --border: #b12f32;
}
```

**Astro Dark (Alto Contraste)** 🚀
```css
html[data-theme="dark"] {
  --background: #212737;
  --foreground: #eaedf3;
  --accent: #ff6b01;
  --muted: #8a3302;
  --border: #ab4b08;
}
```

**Cosmic Blue (AstroPaper v4)** 🌌
```css
html[data-theme="dark"] {
  --background: #000123;
  --foreground: #eaedf3;
  --accent: #617bff;
  --muted: #0c0e4f;
  --border: #303f8a;
}
```
