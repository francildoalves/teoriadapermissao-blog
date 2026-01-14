# Manual de Componentes & UI

Guia de utilização dos componentes reutilizáveis disponíveis no projeto `astro-paper`.

---

## 1. Blocos de Alerta (Admonitions)

Para enriquecer o Markdown, usamos componentes estilizados via CSS personalizado.
**Uso:** Digite o prefixo no editor (se configurado snippets) ou use a sintaxe HTML direta.

*   **Info:** `<div class="alert-info">Nota técnica...</div>`
*   **Sucesso/Dica:** `<div class="alert-dica">Sugestão...</div>`
*   **Atenção:** `<div class="alert-atencao">Cuidado com...</div>`
*   **Perigo:** `<div class="alert-perigo">Erro crítico...</div>`

---

## 2. Botão de Link (`LinkButton.astro`)

Componente padrão para links que parecem botões.
*   **Props:** `href`, `className`, `ariaLabel`, `title`, `disabled`.
*   **Melhoria Recente:** Suporta `target="_blank"` e outros atributos nativos HTML.

```astro
<LinkButton href="/sobre" className="my-4">
  Saiba Mais
</LinkButton>
```

---

## 3. Data e Hora (`Datetime.tsx`)

Componente React para renderizar datas formatadas corretamente por locale e exibir o ícone de "Relógio" (Tempo de leitura) ou "Calendário" (Publicação/Atualização).
*   Lógica inteligente: Se a data de atualização (`modDatetime`) for significativamente diferente da publicação, ele exibe "Atualizado em: ...".

---

## 4. Busca (`SearchBar.tsx`)

Barra de pesquisa *Client-Side*.
*   Carrega um índice JSON leve de todos os posts.
*   Usa `Fuse.js` para permitir erros de digitação (fuzzy search).
*   **Atenção:** Se o blog passar de 1.000 posts, pode ser necessário migrar para uma busca server-side (Algolia/Pagefind) para não pesar o carregamento inicial.

---

## 5. Cards de Post (`Card.tsx`)

O cartão de visualização do post nas listagens.
*   Exibe: Título (com *View Transitions*), Data, Descrição e Tags.
*   Acessibilidade: A área clicável é otimizada, mas o link real está no título (padrão WCAG).

---

## 6. Paginação (`Pagination.astro`)

Gerada automaticamente nas páginas de listagem (`src/pages/[lang]/posts/[...page].astro`).
*   Configurável via `postPerPage` em `config.ts`.
*   Suporta Navegação Anterior/Próximo com setas SVG.
