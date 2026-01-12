# Estrutura do Projeto

Este documento mapeia a estrutura de pastas e arquivos do projeto **Teoria da Permissão Blog** em seu estado atual.

## Raiz do Projeto `.`

| Caminho | Descrição |
| :--- | :--- |
| `.github/workflows/` | Configurações do GitHub Actions (`ci.yml`, `code-standards.yml`, etc). |
| `dist/` | Pasta gerada automaticamente após o build (site estático final). |
| `docs/` | Documentação técnica do projeto (Manuais, Guias, Capturas de tela). |
| `node_modules/` | Dependências instaladas pelo `pnpm`. |
| `public/` | Arquivos estáticos servidos diretamente (`robots.txt`, `favicon.svg`, imagens globais). |
| `src/` | Código-fonte principal do site (Astro Components, Lógica, Conteúdo). |
| `astro.config.ts` | Configuração principal do framework Astro. |
| `package.json` | Lista de dependências e scripts (`dev`, `build`, `test`). |
| `tsconfig.json` | Configuração do TypeScript. |
| `tailwind.config.mjs` | Configuração de estilos do Tailwind CSS. |

---

## Estrutura Detalhada de `src/`

A pasta `src` contém toda a lógica da aplicação:

### `src/assets/`
Imagens, ícones e fontes utilizados nos componentes e posts. O Astro otimiza imagens aqui automaticamente.

### `src/components/`
Componentes Vue/Astro reutilizáveis.
*   `Card.astro`: Cartão de exibição de post.
*   `Footer.astro`: Rodapé (com lógica de links de políticas).
*   `Header.astro`: Cabeçalho e navegação.
*   `Datetime.tsx`: Componente React para formatar datas.

### `src/content.config.ts`
Define as "Coleções de Conteúdo" (Blog, About, Policies) e seus esquemas de dados (Frontmatter).

### `src/config.ts`
Configurações globais do site (Título, Autor, Redes Sociais, Paginação).

### `src/data/`
Todo o conteúdo escrito (Markdown).
*   `blog/`: Postagens organizadas por idioma (`en/`, `pt-br/`, `es/`, `ar/`, `zh/`).
*   `policies/`: Termos de Uso e Políticas de Privacidade, também por idioma.

### `src/i18n/`
Núcleo de Internacionalização.
*   `config.ts`: Onde novos idiomas são registrados.
*   `types.ts`: Definições de tipos TypeScript para garantir segurança.
*   `locales/`: Dicionários de tradução (`pt-br.ts`, `en.ts`, `es.ts`, etc).

### `src/layouts/`
Estruturas de página base.
*   `Layout.astro`: O esqueleto HTML principal (`<html>`, `<head>`, `<body>`).
*   `PostDetails.astro`: Layout para exibir um post único.
*   `Posts.astro`: Layout para listas de posts.

### `src/pages/`
Roteamento do Astro.
*   `[...locale]/`: Rota dinâmica que captura o idioma da URL.
    *   `index.astro`: Página Inicial.
    *   `posts/`: Listagens de posts.
    *   `tags/`: Listagens por tag.
    *   `about.astro`: Página Sobre.
*   `404.astro`: Página de erro.
*   `rss.xml.ts`: Gerador do Feed RSS.

### `src/styles/`
Arquivos CSS globais e do Tailwind.
*   `base.css`: Estilos base.

### `src/utils/`
Funções utilitárias (Helpers).
*   `getPostsByLocale.ts`: Filtra posts pelo idioma atual.
*   `getSortedPosts.ts`: Ordena posts por data.
*   `og-templates/`: Templates para gerar imagens de compartilhamento social.
