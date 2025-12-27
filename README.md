# 🧠 Blog Teoria da Permissão

> *Documentando a jornada entre a Análise de Sistemas e a Governança Emocional.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/3877e14a-0bdc-4e85-bcd4-542f93f860a3/deploy-status)](https://app.netlify.com/sites/astro-paper-i18n/deploys)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100-success?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)

Este repositório contém o código-fonte do blog oficial da **Teoria da Permissão**. O projeto foi desenvolvido seguindo princípios de **Green Software**, priorizando performance, acessibilidade e baixo consumo de recursos computacionais.

---

## 🚀 Sobre o Projeto

Este blog é uma implementação técnica robusta baseada no tema [AstroPaper](https://github.com/satnaing/astro-paper), com suporte a internacionalização (i18n).

O objetivo é entregar conteúdo de texto rico (Markdown/MDX) com velocidade extrema, sem o *bloat* de frameworks JavaScript pesados no lado do cliente.

### ⚡ Principais Funcionalidades

* **Green Software & Performance:** Pontuação 100/100 no Lighthouse. Geração estática (SSG) com mínimo envio de JavaScript ao cliente.
* **Internacionalização (i18n):**

  * 🇧🇷 **Português (Padrão)** — Conteúdo nativo.
  * 🇺🇸 **Inglês**, 🇨🇳 **Chinês**, 🇸🇦 **Árabe** — Suporte estrutural implementado.
* **Gestão de Políticas Legais:** Sistema escalável para Termos de Uso e Política de Privacidade, com URLs amigáveis e detecção automática de idioma no rodapé.
* **UI/UX Estratégica:**

  * **CTA Integrado:** Botão de ação (*Call to Action*) para produtos externos/afiliados integrado à navegação.
  * **Modo Claro/Escuro:** Respeita a preferência do sistema com alternância manual.
  * **Busca Fuzzy:** Pesquisa rápida *client-side*.
* **Tipagem Forte:** Projeto integralmente em TypeScript para maior segurança e manutenibilidade.

---

## 🛠️ Stack Tecnológica

* **Framework:** [Astro](https://astro.build/)
* **Estilização:** [TailwindCSS](https://tailwindcss.com/)
* **Linguagem:** TypeScript
* **Conteúdo:** Markdown (`.md`) e MDX
* **Deploy:** Netlify / Vercel (compatível com qualquer host estático)

---

## ⚙️ Personalizações e Guia de Desenvolvimento

A seguir estão documentadas as alterações estruturais e diretrizes para manutenção ou expansão do projeto.

### 1. Sistema de Políticas e Termos (Legal)

O projeto utiliza uma *Collection* dedicada para documentos legais, permitindo URLs amigáveis em múltiplos idiomas.

**Exemplos:**

* Português: `/politica-de-privacidade`
* Inglês: `/privacy-policy`

**Como adicionar ou editar políticas:**

1. Acesse o diretório `src/data/policies/[idioma]/`.
2. Crie ou edite um arquivo `.md`.
3. Utilize o *frontmatter* obrigatório:

```yaml
---
title: "Título da Página"
description: "Descrição para SEO"
postSlug: "url-amigavel-desejada" # Ex: politica-de-privacidade
---
```

**Observação:** o campo `postSlug` define a URL final. Mantenha-o consistente com o idioma ou padronizado em inglês, caso prefira URLs globais.

#### Disclaimer de Tradução por IA

Para arquivos traduzidos automaticamente, utilize o bloco abaixo ao final do Markdown:

> **Nota:** As traduções para outros idiomas foram geradas por Inteligência Artificial. A versão original em português é a oficial.

---

### 2. Estratégia de CTA (Call to Action)

O comportamento padrão de links sociais e repositório foi substituído para priorizar conversão.

* **Localização:** Ícone de destaque no *Header* e links estratégicos.
* **Configuração:** Edite o arquivo de constantes globais (ex.: `src/config.ts` ou `src/components/Socials.astro`, conforme a implementação).
* **Segurança:** Links externos/afiliados utilizam automaticamente `rel="noopener noreferrer"`.

---

### 3. Ajustes Regionais (L10n)

* **Datas:** Componente `Datetime` configurado para o padrão brasileiro (`dd de MMM. de yyyy`) e horário 24h.
* **Rodapé Dinâmico:** O componente `Footer.astro` detecta o idioma ativo e gera os links corretos para as políticas legais sem *hardcoding*.

---

## 👨🏻‍💻 Como Rodar Localmente

Pré-requisitos:

* Node.js
* pnpm (ou npm)

### Clonar o repositório

```bash
git clone [URL-DO-SEU-REPO]
cd [NOME-DA-PASTA]
```

### Instalar dependências

```bash
pnpm install
```

### Rodar ambiente de desenvolvimento

```bash
pnpm dev
```

A aplicação ficará disponível em: `http://localhost:4321`

### Build para Produção

```bash
pnpm build
```

---

© 2025 **FranCILDO Gryphon**. Desenvolvido sob a ótica de *Green Software*.
