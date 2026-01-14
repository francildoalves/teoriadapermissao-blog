# Manual Técnico de Manutenção

Este documento serve como guia de referência de como confugurar o compartilhamento de posts do blog e os botões que levam para as redes sociais.

---

## 1. Geração Automática de Imagens (OG Cards) 🖼️

O blog utiliza a biblioteca **Satori** (da Vercel) para gerar automaticamente "cartões de pré-visualização" (Open Graph Images) sempre que o site é construído. Isso elimina a necessidade de criar artes manuais para cada post.

### Como Funciona
*   **Scripts:** `src/utils/og-templates/post.js` e `site.js`.
*   **Processo:** O script recebe os metadados do Markdown (Título, Autor) -> Desenha um layout usando Satori -> Converte para SGV/PNG -> Salva na pasta final `dist`.
*   **Edição:** Para alterar o design (cores, bordas, fontes), edite o objeto de estilo dentro desses arquivos `.js`. O código se assemelha a CSS-in-JS.

> **Nota:** Esses arquivos são mantidos em Javascript puro (`.js`) para evitar complexidade desnecessária de tipagem com a biblioteca Satori, mas funcionam dentro do ecossistema TypeScript do projeto.

---

## 2. Configuração de Redes Sociais e Compartilhamento 🔗

Todas as redes sociais do site são controladas por um **ÚNICO** arquivo de configuração.

**Arquivo Mestre:** `src/constants.ts`

## 2. Configuração de Redes Sociais e Compartilhamento 🔗

O controle de links sociais é centralizado no arquivo `src/constants.ts`. Existem duas listas distintas com propósitos diferentes:

### A. Links de Perfil (`SOCIALS`)
Estes são os links para **SUAS** redes sociais.
*   **Onde aparecem:** No rodapé de todas as páginas e na página "Sobre".
*   **Objetivo:** Levar o usuário para te seguir.

```typescript
// Adicione ou remova objetos desta lista para alterar o rodapé
export const SOCIALS: Social[] = [
  {
    name: "Instagram", // Nome da rede
    href: "https://instagram.com/seu.perfil", // Seu link direto
    // ...
  },
];
```

### B. Botões de Compartilhamento (`SHARE_LINKS`)
Estes são os botões que permitem ao **LEITOR** divulgar seu conteúdo.
*   **Onde aparecem:** Ao final de cada artigo (post).
*   **Objetivo:** Espalhar seu conteúdo na rede do leitor.

```typescript
// Adicione ou remova objetos desta lista para alterar os botões de share
export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=", // Link de API de compartilhamento (não altere a estrutura)
    // ...
  },
];
```

---

## 3. Arquitetura Híbrida (TypeScript + JavaScript) 🏗️

O projeto é majoritariamente **TypeScript (>90%)** para garantir segurança e robustez. No entanto, arquivos `.js` são mantidos estrategicamente em três cenários:

1.  **Scripts de Bloqueio (Critical Path):** Como `public/toggle-theme.js`. Scripts que rodam antes do carregamento total da página para evitar "Flash of Unstyled Content" (FOUC) devem ser JS puro para execuão imediata pelo navegador.
2.  **Configurações de Tooling:** Arquivos como `eslint.config.js` e `tailwind.config.mjs` rodam no ambiente Node.js de desenvolvimento, onde JS é nativo e mais rápido.
3.  **Legado de Templates:** Scripts de geração de OG Image (Item 1) mantidos em JS para facilitar a manipulação flexível de estilos sem a rigidez de tipos do TS.
