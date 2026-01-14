# Manual de Arquitetura Técnica

Este documento descreve a estrutura técnica do blog `teoriadapermissao.com.br`, construído sobre o ecossistema Astro, utilizando os templates `astro-paper` e `astro-paper-i18n` como base.

---

## 1. Visão Geral da Stack

*   **Core:** [Astro 5.x](https://astro.build) (Renderização Híbrida/Estática).
*   **Linguagem:** TypeScript Estrito (Strict Mode).
*   **Estilização:** Tailwind CSS v4 (via plugin Vite).
*   **Conteúdo:** Markdown (`.md`) com Frontmatter tipado via Content Collections.
*   **Internacionalização:** Roteamento baseado em subdiretórios (`/pt-br/`, `/en/`) com suporte a LTR/RTL.
*   **Busca:** Fuse.js (Client-side fuzzy search).
*   **Imagens:** Satori (Geração de OG Images) + Astro Image (Otimização estática).

---

## 2. Estrutura de Diretórios

```plaintext
/
├── public/             # Arquivos estáticos (favicon, robots.txt, imagens globais)
├── src/
│   ├── assets/         # Imagens otimizadas pelo Astro
│   ├── components/     # Componentes UI reutilizáveis (.astro, .tsx)
│   ├── content/        # Definição das Collections (config.ts)
│   ├── data/           # O CONTEÚDO REAL DO SITE
│   │   ├── about/      # Páginas 'Sobre' por idioma (.md)
│   │   ├── blog/       # Postagens organizadas por idioma (/pt-br/, /en/)
│   │   └── policies/   # Documentos legais (Privacidade, Termos)
│   ├── i18n/           # Núcleo de Internacionalização
│   │   ├── locales/    # Dicionários de tradução (pt-br.ts, en.ts)
│   │   └── ...         # Utilitários de rota e config
│   ├── layouts/        # Layouts base (Layout.astro, PostDetails.astro)
│   ├── pages/          # Rotas do Astro (File-based routing)
│   │   ├── [lang]/     # Rotas dinâmicas por idioma
│   │   ├── index.astro # Redirecionamento da raiz
│   │   └── 404.astro   # Página de erro
│   ├── styles/         # CSS Global e Tailwind base
│   └── utils/          # Funções auxiliares (Data, SEO, OG Image)
└── astro.config.ts     # Configuração vital do projeto
```

---

## 3. Conceitos Chave

### A. Content Collections
O Astro 5 gerencia o conteúdo através de "Coleções". Definidas em `src/content/config.ts`, elas garantem que todo Markdown tenha os campos obrigatórios (título, data, autor).
*   **Blog Collection:** Artigos principais.
*   **Políticas:** Termos de uso e privacidade.

### B. Ilhas de Interatividade (Islands)
O site é 95% HTML estático (Zero JS). JavaScript é carregado apenas onde necessário:
*   `SearchBar.tsx`: Componente React hidratado em `client:load` para busca instantânea.
*   `ToggleTheme.ts`: Script inline para evitar FOUC (Flash of Unstyled Content) no modo escuro.

### C. Geração de OG Images (Satori)
Ao contrário de sites comuns que usam imagens estáticas para compartilhamento, nós geramos imagens dinâmicas em `src/utils/og-templates/`.
*   Script lê o Título + Autor do Markdown -> Gera um SVG -> Converte para PNG -> Salva no Build.

### D. Internacionalização (i18n)
O sistema não usa o i18n nativo padrão do Astro de forma isolada, mas uma adaptação do `astro-paper-i18n` para permitir maior controle sobre URLs traduzidas e slugs personalizados.
*   **Dicionários:** `src/i18n/locales/*.ts` contém as strings de UI (botões, menus).
*   **Rotas:** `src/pages/[lang]/...` captura o idioma da URL e injeta o conteúdo correspondente.
