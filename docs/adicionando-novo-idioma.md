# Tutorial: Adicionando um Novo Idioma

Este guia detalha o processo completo para adicionar suporte a um novo idioma no Blog Teoria da Permissão.

## Visão Geral
Para adicionar um idioma (ex: Alemão), você precisará:
1.  Criar um arquivo de tradução (dicionário).
2.  Registrar esse idioma na configuração principal.
3.  Verificar se tudo funcionou (Testes).

---

## Passo 1: Criar o Arquivo de Tradução

As traduções ficam na pasta `src/i18n/locales/`.

1.  Escolha um idioma existente como base (recomendamos o `pt-br.ts` ou `en.ts`).
2.  Duplique o arquivo e renomeie para o código do novo idioma (ex: `de.ts` para Alemão).
3. Traduza do idioma base para o novo idioma.

**Exemplo de estrutura do arquivo (`de.ts`):**

```typescript
import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Permission Theory", // Traduza o título do site (Teoria da Permissão)
  "site.desc": "Studies and points of view on the permission theory...",
};

const DE_Locale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Willkommen",
  "hero.body": `Dieser Blog dokumentiert meine Studien...`,
  // ... continue traduzindo todas as chaves abaixo
  "search": "Suche",
  "footer.terms": "Nutzungsbedingungen",
};

export default DE_Locale;
```

> **Dica:** Mantenha as chaves (ex: `"hero.title"`) exatamente iguais. Só altere o texto da direita.

---

## Passo 2: Registrar na Configuração

Agora você precisa "avisar" ao sistema que esse arquivo existe.

1.  Abra o arquivo `src/i18n/config.ts`.
2.  Importe o arquivo que você criou no Passo 1.
3.  Adicione uma nova entrada no objeto `localeToProfile`.

**Código para adicionar em `src/i18n/config.ts`:**

```typescript
// 1. Importe o novo arquivo no topo
import DELocale from "./locales/de";

// ...

export const localeToProfile = {
  // ... outros idiomas
  
  // 2. Adicione o novo bloco
  de: {
    name: "Deutsch",       // Nome que aparece no menu
    messages: DELocale,    // O arquivo importado acima
    langTag: "de-DE",      // Código oficial (para datas e SEO)
    direction: "ltr",      // "ltr" (Esquerda p/ Direita) ou "rtl"
    googleFontName: "IBM+Plex+Mono", // Fonte padrão
  },
};
```

---

## Passo 3: Testes e Verificação (Importante!)

Este projeto possui um sistema de **testes automatizados** que garante a qualidade da tradução.

### Como saber se deu certo?

1.  **Automaticamente:**
    Ao salvar os arquivos, o sistema de Inteligência do código já pode te avisar se faltar alguma chave obrigatória (o TypeScript vai sublinhar de vermelho).

2.  **Rodando Testes Manuais (Recomendado):**
    Antes de enviar para o GitHub, abra o terminal e rode:
    ```bash
    pnpm test
    ```
    
    *   **O que isso faz?** O teste varre a lista de idiomas suportados. Quando ele encontra o seu novo idioma (`de`), ele verifica automaticamente:
        *   Se todas as configurações (langTag, direção) estão presentes.
        *   Se o formato das datas está correto.
    
    Se aparecer tudo verde (✓), seu idioma foi instalado com sucesso!

3.  **No GitHub (Rede de Segurança):**
    Se você esquecer de testar e enviar com erro, o **CI Pipeline** vai rodar no servidor e bloqueará o "sinal verde" no README do projeto, te avisando por e-mail.


---

## Passo 3.5: Criar Políticas (Específico deste Projeto)

Este blog possui uma seção de **Políticas** (Privacidade e Termos) que também precisa ser traduzida. Sem isso, os links no rodapé quebrarão.

1.  Crie a pasta: `src/data/policies/[novo-lang]/` (ex: `src/data/policies/de/`).
2.  Copie os arquivos `privacy.md` e `terms.md` de outra pasta (ex: `pt-br`).
3.  Edite o conteúdo em Markdown.

**Importante: O `postSlug` no arquivo Markdown deve bater com a tradução!**

No seu arquivo de tradução (`src/i18n/locales/de.ts`), você definiu:
```typescript
"footer.privacySlug": "datenschutz",
"footer.termsSlug": "nutzungsbedingungen",
```

Então, no arquivo `src/data/policies/de/privacy.md`:
```yaml
---
title: Datenschutzerklärung
postSlug: datenschutz  <-- TEM QUE SER IGUAL AO DO ARQUIVO .TS
---
Conteúdo traduzido...
```

---

## Passo 4: Criando Posts no Novo Idioma

Para que o idioma apareça no site, é ideal ter pelo menos um post publicado nele.

1.  Crie a pasta: `src/data/blog/de/`
2.  Adicione um arquivo `.md` lá dentro.
3.  O site irá gerar automaticamente a rota `/de/nome-do-post`.

---

## Resumo
1.  📄 Crie `src/i18n/locales/de.ts`.
2.  ⚙️ Edite `src/i18n/config.ts` para incluir o `de`.
3.  ✅ Rode `pnpm test` para garantir.
