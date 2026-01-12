# 🧠 Blog Teoria da Permissão

> _Documentando a jornada entre a Análise de Sistemas e a Governança Emocional._

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://github.com/francildoalves/teoriadapermissao-blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/francildoalves/teoriadapermissao-blog/actions/workflows/deploy.yml)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/francildoalves/teoriadapermissao-blog?style=flat-square)](https://github.com/francildoalves/teoriadapermissao-blog/tags)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100-success?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)

Este repositório contém o código-fonte do blog oficial da **Teoria da Permissão**. O projeto foi desenvolvido seguindo princípios de **Green Software**, priorizando performance, acessibilidade e baixo consumo de recursos computacionais.

---

## 🚀 Sobre o Projeto

Este blog é uma implementação técnica robusta baseada no tema [AstroPaper](https://github.com/satnaing/astro-paper), com suporte a internacionalização (i18n).

O objetivo é entregar conteúdo de texto rico (Markdown/MDX) com velocidade extrema, sem o _bloat_ de frameworks JavaScript pesados no lado do cliente.

### ⚡ Principais Funcionalidades

- **Green Software & Performance:** Pontuação **100/100** em Performance, Acessibilidade, Melhores Práticas e SEO no Lighthouse (Mobile & Desktop). Zero JS desnecessário.
- **Internacionalização (i18n):**
  - 🇧🇷 **Português (Padrão)** — Conteúdo nativo.
  - 🇸 **Espanhol** — Suporte completo implementado.
  - 🇺🇸 **Inglês**, 🇨🇳 **Chinês**, 🇸🇦 **Árabe** — Suporte estrutural implementado.
- **Componentes de Engajamento:** Blocos de alerta visuais (Info, Perigo, Dica, Saiba Mais) para destacar conteúdo no meio dos artigos.
- **Gestão de Políticas Legais:** Sistema escalável para Termos de Uso e Política de Privacidade, com URLs amigáveis e detecção automática de idioma no rodapé.
- **UI/UX Estratégica:**
  - **CTA Integrado:** Botão de ação (_Call to Action_) para produtos externos/afiliados integrado à navegação.
  - **Modo Claro/Escuro:** Respeita a preferência do sistema com alternância manual.
  - **Busca Fuzzy:** Pesquisa rápida _client-side_.
- **Tipagem Forte:** Projeto integralmente em TypeScript para maior segurança e manutenibilidade.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Astro](https://astro.build/)
- **Estilização:** [TailwindCSS](https://tailwindcss.com/)
- **Linguagem:** TypeScript
- **Conteúdo:** Markdown (`.md`) e MDX
- **Deploy:** Cloudflare Pages (compatível com qualquer Host Estático)

---

## ⚙️ Personalizações e Guia de Desenvolvimento

A seguir estão documentadas as alterações estruturais e diretrizes para manutenção ou expansão do projeto.

### 1. Sistema de Políticas e Termos (Legal)

O projeto utiliza uma _Collection_ dedicada para documentos legais, permitindo URLs amigáveis em múltiplos idiomas.

**Como adicionar ou editar políticas:**

1. Acesse o diretório `src/data/policies/[idioma]/`.
2. Crie ou edite um arquivo `.md`.
3. Utilize o _frontmatter_ obrigatório:

```yaml
---
title: "Título da Página"
description: "Descrição para SEO"
postSlug: "url-amigavel-desejada" # Ex: politica-de-privacidade
---
```

**Observação:** o campo `postSlug` define a URL final. Mantenha-o consistente com o idioma.

### 2. Componentes de Alerta (Snippets)

Para enriquecer a leitura, utilize os _snippets_ configurados no VS Code. Basta digitar o **Prefixo** e pressionar `Tab`.

| Tipo           | Prefixo           | Cor         | Uso Recomendado                                       |
| :------------- | :---------------- | :---------- | :---------------------------------------------------- |
| **Informação** | `alert-info`      | 🔵 Azul     | Notas técnicas, observações de lógica e confiança.    |
| **Dica**       | `alert-dica`      | 🟢 Verde    | Sugestões de crescimento, êxito e boas práticas.      |
| **Atenção**    | `alert-atencao`   | 🟡 Amarelo  | Pontos de cautela, foco e avisos importantes.         |
| **Perigo**     | `alert-perigo`    | 🔴 Vermelho | Urgência, erros críticos ou riscos de perda de dados. |
| **Saiba Mais** | `alert-saibamais` | 🟣 Roxo     | CTA para conversão, link externo ou aprofundamento.   |

---

## 🌐 Como Adicionar um Novo Idioma

Este é um processo delicado que exige atenção a 3 camadas: **Configuração**, **Interface** e **Conteúdo**. Siga a ordem abaixo para evitar erros de compilação.

### Passo 1: Camada de Configuração (Core)

Edite o arquivo `src/i18n/config.ts`:

1.  Adicione a chave do novo idioma no objeto `localeToProfile`.
    - **Exemplo:** Se for adicionar Francês (`fr`), a chave deve ser `fr`.
2.  Preencha os dados do perfil:
    - `name`: Nome nativo do idioma (ex: "Français").
    - `langTag`: Tag ISO correta (ex: "fr-FR"). **Crucial para SEO**.
    - `direction`: "ltr" (esquerda-para-direita) ou "rtl" (direita-para-esquerda).
    - `messages`: Importe o arquivo que você criará no Passo 2.

### Passo 2: Camada de Interface (Tradução)

1.  Vá para `src/i18n/locales/`.
2.  Duplique o arquivo `pt-br.ts` e renomeie para a sigla do novo idioma (ex: `fr.ts`).
3.  Traduza **TODAS** as chaves do arquivo.
    - ⚠️ **Atenção:** O TypeScript vai te impedir de rodar o projeto se faltar alguma chave.
    - 💡 **Dica de UI:** Priorize termos curtos para os menus (ex: "Sobre" em vez de "Sobre mim") para evitar quebras de layout no mobile.

### Passo 3: Camada de Conteúdo (Markdown)

Crie os arquivos de conteúdo traduzidos nas pastas correspondentes (`src/data/`). O sistema de rotas do Astro detectará os arquivos automaticamente.

1.  **Página Sobre:** Crie `src/data/about/about.[idioma].md`.
2.  **Políticas:**
    - Crie a pasta `src/data/policies/[idioma]/`.
    - Adicione `privacy-policy.md` e `terms-of-use.md` traduzidos.
3.  **Postagens do Blog:**
    - Para posts traduzidos, adicione-os em `src/data/blog/[idioma]/`.

### Passo 4: Verificação Técnica

1.  **Sumário Automático (TOC):** Se o novo idioma usa uma palavra específica para "Índice" (ex: "Sommaire"), atualize a regex em `astro.config.ts`:
    - Procure por `remarkToc` > `heading`.
    - Adicione o termo separado por `|` (pipe).
2.  **Teste Final:** Rode `npm run dev` e verifique navegação e troca de idiomas.

---

## 👨🏻‍💻 Como Rodar Localmente

Pré-requisitos: Node.js e pnpm (ou npm)

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
# Acesse: http://localhost:4321

# Build para Produção
pnpm build
```

---

© 2025 **FranCILDO Gryphon**. Desenvolvido sob a ótica de _Green Software_.
