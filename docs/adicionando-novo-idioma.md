# Tutorial: Adicionando um Novo Idioma

Este guia detalha o processo completo para adicionar suporte a um novo idioma no Blog Teoria da Permissão.

## Visão Geral
Para adicionar um idioma (ex: Francês), você precisará:
1.  Criar um arquivo de tradução (dicionário).
2.  Registrar esse idioma na configuração principal.
3.  Verificar se tudo funcionou (Testes).

---

## Passo 1: Criar o Arquivo de Tradução

As traduções ficam na pasta `src/i18n/locales/`.

1.  Escolha um idioma existente como base (recomendamos o `pt-br.ts` ou `en.ts`).
2.  Duplique o arquivo e renomeie para o código do novo idioma (ex: `fr.ts` para Francês).

**Exemplo de estrutura do arquivo (`fr.ts`):**

```typescript
import type { I18nStrings } from "@/i18n/types";

const baseStrings = {
  "site.title": "Théorie de la Permission", // Traduza o título do site
  "site.desc": "Études et points de vue sur la théorie de la permission...",
};

const FRLocale: I18nStrings = {
  ...baseStrings,
  "hero.title": "Bienvenue",
  "hero.body": `Ce blog documente mes études...`,
  // ... continue traduzindo todas as chaves abaixo
  "search": "Rechercher",
  "footer.terms": "Conditions d'utilisation",
};

export default FRLocale;
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
import FRLocale from "./locales/fr";

// ...

export const localeToProfile = {
  // ... outros idiomas
  
  // 2. Adicione o novo bloco
  fr: {
    name: "Français",      // Nome que aparece no menu
    messages: FRLocale,    // O arquivo importado acima
    langTag: "fr-FR",      // Código oficial (para datas e SEO)
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
    
    *   **O que isso faz?** O teste varre a lista de idiomas suportados. Quando ele encontra o seu novo idioma (`fr`), ele verifica automaticamente:
        *   Se todas as configurações (langTag, direção) estão presentes.
        *   Se o formato das datas está correto.
    
    Se aparecer tudo verde (✓), seu idioma foi instalado com sucesso!

3.  **No GitHub (Rede de Segurança):**
    Se você esquecer de testar e enviar com erro, o **CI Pipeline** vai rodar no servidor e bloqueará o "sinal verde" no README do projeto, te avisando por e-mail.

---

## Passo 4: Criando Posts no Novo Idioma

Para que o idioma apareça no site, é ideal ter pelo menos um post publicado nele.

1.  Crie a pasta: `src/data/blog/fr/`
2.  Adicione um arquivo `.md` lá dentro.
3.  O site irá gerar automaticamente a rota `/fr/nome-do-post`.

---

## Resumo
1.  📄 Crie `src/i18n/locales/fr.ts`.
2.  ⚙️ Edite `src/i18n/config.ts` para incluir o `fr`.
3.  ✅ Rode `pnpm test` para garantir.
