# Manual de Configuração

Este guia detalha como alterar as configurações globais do site, desde metadados básicos até ajustes finos de comportamento.

---

## 1. O Arquivo Mestre: `src/config.ts`

Este é o painel de controle principal do blog. Evite editar valores "hardcoded" nos componentes; use este arquivo.

```typescript
export const SITE = {
  website: "https://teoriadapermissao.com.br/", // Domínio final (Vital para SEO e OG Images)
  author: "FranCILDO Gryphon",                  // Nome padrão do autor
  profile: "https://instagram.com/...",         // Link do perfil principal
  desc: "Descrição global para SEO...",         
  title: "Teoria da Permissão",                 // Título do site (sufijo)
  ogImage: "astropaper-og.jpg",                 // Imagem padrão de fallback
  lightAndDarkMode: true,                       // Ativa alternância de tema
  postPerIndex: 4,                              // Posts na Home
  postPerPage: 4,                               // Posts na paginação
  scheduledPostMargin: 15 * 60 * 1000,          // Margem para posts agendados (15 min)
  dynamicOgImage: true,                         // Geração automática de cards
};

export const LOCALE = {
  lang: "pt-BR", // Atributo <html lang="..."> padrão
  langTag: ["pt-BR"], // BCP 47 tag
} as const;
```

---

## 2. Redes Sociais e Compartilhamento: `src/constants.ts`

Controla dois grupos de links:

1.  **`SOCIALS`**: Ícones do rodapé e página Sobre (Links para *seus* perfis).
2.  **`SHARE_LINKS`**: Botões ao final do post (Funções para *compartilhar* conteúdo).

> **Atenção:** Ao adicionar uma nova rede social, certifique-se de importar o ícone correspondente em `src/components/Socials.astro` ou `ShareLinks.astro`.

---

## 3. Configuração de Idiomas: `src/i18n/config.ts`

Para adicionar ou remover idiomas suportados.

```typescript
export const SUPPORTED_LOCALES: LocaleProfile[] = [
  {
    lang: "pt-br",    // ID na URL
    label: "Português", // Nome no menu
    direction: "ltr", // 'ltr' (Esq->Dir) ou 'rtl' (Dir->Esq)
  },
  // ... outros
];
```

---

## 4. Configuração do Astro: `astro.config.ts`

Arquivo de nível de sistema (Node.js). Mexa aqui apenas se souber o que está fazendo.

*   **Sitemap:** Configurado para respeitar i18n.
*   **Markdown:** Plugins `remarkToc` (Sumário) e `remarkCollapse` configurados aqui.
*   **Tailwind:** Integração via plugin Vite.
*   **Security:** `checkOrigin: true` impede CSRF em formulários (se houver).

## 5. Variáveis de Ambiente (`.env`)

O projeto suporta variáveis de ambiente, embora atualmente priorize a configuração estática.
*   `PUBLIC_GOOGLE_SITE_VERIFICATION`: Token para Search Console.

---

## 6. Personalização Avançada

### A. Largura do Site (Layout)
A largura máxima do blog é definida globalmente via CSS. Para alterar (padrão `max-w-4xl`), edite `src/styles/base.css`:

```css
@utility max-w-app {
   @apply max-w-4xl xl:max-w-5xl; /* Ajuste aqui */
}
```

### B. Logo do Site
Por padrão, o site exibe `SITE.title` como texto. Existem 3 formas de alterar:

1.  **Texto Simples:** Apenas edite `SITE.title` em `src/config.ts`.
2.  **SVG (Recomendado):**
    *   Salve seu logo em `src/assets/logo.svg`.
    *   Importe em `src/components/Header.astro`: `import Logo from "@/assets/logo.svg"`.
    *   Substitua `{t("site.title")}` pelo componente `<Logo />`.
3.  **Imagem (PNG/JPG):**
    *   Use o componente `<Image />` do Astro (`astro:assets`) da mesma forma que o SVG.
