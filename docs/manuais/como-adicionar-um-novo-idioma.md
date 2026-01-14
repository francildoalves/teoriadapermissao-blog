---
title: "Como Adicionar um Novo Idioma"
description: "Guia passo-a-passo para traduzir a interface e configurar novos idiomas."
version: "2.1"
author: "FranCILDO Gryphon"
pubDatetime: 2026-01-14T18:15:00-03:00
modDatetime: 2026-01-14T18:15:00-03:00
---

Este documento detalha o processo para adicionar suporte a um novo idioma (ex: Alemão - `de`) no blog.

## 1. Arquitetura Básica

O sistema utiliza dois pilares para funcionar:
1.  **Dicionário de Interface:** Arquivos `.ts` que traduzem botões, menus e rodapés.
2.  **Roteamento de Conteúdo:** Pastas físicas (`src/data/blog/de/`) que contém os artigos traduzidos.

## 2. Passo-a-Passo de Implementação

### Passo 1: Criar o Dicionário de UI (Interface)
1.  Vá até `src/i18n/locales/`.
2.  Copie o arquivo `en.ts` e renomeie para o código do novo idioma (ex: `de.ts`).
3.  Traduza os valores **à direita**, mantendo as chaves **à esquerda** intactas.

```typescript
// src/i18n/locales/de.ts
const DE_Locale: I18nStrings = {
  "nav.home": "Startseite",  // Traduzido
  "nav.about": "Über uns",
  // ...
};
```

### Passo 2: Registrar o Idioma
1.  Abra `src/i18n/config.ts`.
2.  Importe seu novo arquivo.
3.  Adicione ao objeto `localeToProfile`.

```typescript
// src/i18n/config.ts
import DELocale from "./locales/de"; // 1. Importar

export const localeToProfile = {
  // ...
  de: { // 2. Configurar
    name: "Deutsch",
    messages: DELocale,
    langTag: "de-DE",
    direction: "ltr",
  },
};
```

---

## 3. Regras para Políticas (Termos de Uso e Privacidade) ⚠️ Importante

Ao criar as páginas de Termos de Uso e Política de Privacidade no novo idioma, você **DEVE** ter um cuidado especial para não quebrar a navegação.

O rodapé do site usa links fixos que trocam de idioma automaticamente. Para isso funcionar, o sistema espera que o **slug (URL)** da página seja idêntico em todos os idiomas (em inglês).

### Como fazer corretamente:

1.  Crie a pasta: `src/data/policies/de/`.
2.  Crie o arquivo: `privacy-policy.md`.
3.  **No Frontmatter, force o slug em inglês:**

```yaml
---
title: "Datenschutzerklärung"  # Título TRADUZIDO (Aparece na tela)
postSlug: "privacy-policy"     # Slug em INGLÊS (Obrigatório para o link funcionar)
description: "..."
---
```

**Se você traduzir o slug** (ex: `postSlug: "datenschutzerklaerung"`), o link do rodapé "Política de Privacidade" vai falhar (Erro 404) quando o usuário estiver vendo o site em Alemão.

---

## 4. Pastas de Conteúdo Obrigatórias

Para evitar erros no build, lembre-se de criar as pastas vazias para o novo idioma, mesmo que ainda não tenha posts:

*   `src/data/blog/de/`
*   `src/data/policies/de/`

Recomendamos criar um post de "Olá Mundo" (`src/data/blog/de/ola-mundo.md`) para visualizar o idioma funcionando na lista de posts.
