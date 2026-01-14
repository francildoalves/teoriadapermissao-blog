# Manual de Internacionalização (i18n)

Este projeto foi adaptado do `astro-paper-i18n` para oferecer suporte robusto a múltiplos idiomas, incluindo suporte a RTL (Right-to-Left) para Árabe.

---

## 1. Arquitetura de Idiomas

O sistema não usa apenas tradução de strings, mas **separação de conteúdo**.
*   Cada idioma tem sua própria pasta de conteúdo: `src/data/blog/[idioma]/`.
*   Cada idioma tem suas próprias rotas: `teoriadapermissao.com.br/en/posts/...`.

Isso é fundamental para SEO, pois cria URLs canônicas distintas para cada versão do post.

---

## 2. Adicionando um Novo Idioma (Passo a Passo)

### Passo A: Registro
Edite `src/i18n/config.ts` e adicione o idioma à constante `SUPPORTED_LOCALES`.
Defina se é `ltr` (padrão) ou `rtl`.

### Passo B: Dicionário de UI
Crie o arquivo de tradução em `src/i18n/locales/[codigo].ts`.
Você deve traduzir chaves como:
*   `nav.home`, `nav.about`: Menus.
*   `post.readingTime`: "Tempo de leitura".
*   `footer.copyright`: Texto do rodapé.

> **Regra:** Se faltar uma chave, o TypeScript bloqueará o build para evitar bugs de interface em branco.

### Passo C: Conteúdo
1.  Crie a pasta do idioma em `src/data/blog/`.
2.  Crie a versão traduzida da página Sobre em `src/data/about/`.
3.  Crie as políticas em `src/data/policies/[codigo]/`.

---

## 3. URLs Amigáveis (Slugs)

Para evitar erros 404, padronizamos os `slugs` (URLs) de páginas fixas.

*   **Políticas:** Nos arquivos Markdown de políticas, use sempre `postSlug: "privacy-policy"` ou `"terms-of-use"`, independente do idioma. O sistema de rotas traduz o *prefixo* (`/en/`, `/pt-br/`), mas mantém o slug base estável.

---

## 4. Detecção Automática

O arquivo `src/pages/index.astro` atua como um "Middleware" de redirecionamento.
1.  Verifica a preferência do navegador (`Accept-Language`).
2.  Verifica se o idioma é suportado.
3.  Redireciona o usuário (Ex: `teoriadapermissao.com.br` -> `.../pt-br/`).
