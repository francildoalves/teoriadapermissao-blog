# Arquitetura e Internacionalização (i18n)

Este projeto utiliza uma arquitetura baseada no **Astro Paper i18n**, permitindo suporte completo a múltiplos idiomas com roteamento dinâmico.

## Estrutura de Pastas

*   `src/i18n/`: Núcleo da lógica de internacionalização.
    *   `config.ts`: Define os idiomas suportados e o idioma padrão.
    *   `locales/`: Contém os arquivos de tradução (JSON/TS) com as strings da interface para cada idioma.
*   `src/pages/[...locale]/`: Rotas dinâmicas do Astro. O parâmetro `[...locale]` captura o idioma da URL (ex: `/en/post-1`, `/es/hola`).

## Configuração de Idiomas

Os idiomas são definidos no arquivo `src/i18n/config.ts` através do objeto `localeToProfile`.

Exemplo de configuração (extraído do código atual):

```typescript
export const localeToProfile = {
  ar: {
    name: "العربية",
    messages: ARLocale,
    langTag: "ar-EG",
    direction: "rtl", // Suporte a Right-to-Left
  },
  es: {
    name: "Español",
    messages: ESLocale,
    langTag: "es-ES",
    direction: "ltr",
  },
  fr: {
    name: "Français",
    messages: FRLocale,
    langTag: "fr-FR",
    direction: "ltr",
  },
  "pt-br": {
    name: "Português",
    messages: ptBRLocale,
    langTag: "pt-BR",
    direction: "ltr",
    default: true, // Define este como o idioma raiz (/)
  },
  // ... outros idiomas (en, zh)
};
```

### Adicionando um Novo Idioma

1.  Crie um novo arquivo de traduções em `src/i18n/locales/[novo-lang].ts`.
2.  Importe e adicione o novo perfil em `src/i18n/config.ts`.
3.  Os testes automatizados (`src/i18n/*.test.ts`) irão validar a nova configuração automaticamente.

## Roteamento

O sistema usa Roteamento Baseado em Arquivos (File-based Routing) do Astro com parâmetros Rest.

*   URL `/` -> Carrega conteúdo do idioma `default` (pt-BR).
*   URL `/en/` -> Carrega conteúdo em Inglês.
*   URL `/es/` -> Carrega conteúdo em Espanhol.

Se um usuário tentar acessar uma rota sem idioma (ex: `/sobre`), o sistema assume o idioma padrão.
