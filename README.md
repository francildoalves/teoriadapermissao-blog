# 🧠 Blog Teoria da Permissão

> *Documentando a jornada entre a Análise de Sistemas e a Governança Emocional.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/3877e14a-0bdc-4e85-bcd4-542f93f860a3/deploy-status)](https://app.netlify.com/sites/astro-paper-i18n/deploys)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100-success?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)

Este repositório contém o código-fonte do blog oficial da **Teoria da Permissão**. O projeto foi desenvolvido seguindo princípios de **Green Software**, priorizando performance, acessibilidade e baixo consumo de recursos computacionais.

## 🚀 Sobre o Projeto

Este blog é uma implementação técnica robusta baseada no tema [AstroPaper](https://github.com/satnaing/astro-paper), com suporte a internacionalização (i18n).

O objetivo é entregar conteúdo de texto rico (Markdown/MDX) com velocidade extrema, sem o "inchaço" (bloat) de frameworks JavaScript pesados no lado do cliente.

### ⚡ Principais Funcionalidades

* **Green Software & Performance:** Pontuação 100/100 no Lighthouse. Geração estática (SSG) com mínimo envio de JS ao cliente.
* **Internacionalização (i18n):**
    * 🇧🇷 **Português (Padrão):** Conteúdo nativo.
    * 🇺🇸 **Inglês / 🇨🇳 Chinês / 🇸🇦 Árabe:** Suporte estrutural implementado.
* **Gestão de Políticas Legais (Novo):** Sistema escalável para Termos de Uso e Política de Privacidade, com URLs amigáveis e detecção de idioma automática no rodapé.
* **UI/UX Estratégica:**
    * **CTA Integrado:** Botão de ação (Call to Action) para produtos externos/afiliados integrado nativamente na navegação.
    * **Modo Claro/Escuro:** Respeita preferência do sistema com alternância manual.
    * **Busca Fuzzy:** Pesquisa rápida client-side.
* **Tipagem Forte:** Todo o projeto utiliza TypeScript para garantir integridade e manutenção segura.

---

## 🛠️ Stack Tecnológica

* **Framework:** [Astro](https://astro.build/)
* **Estilização:** [TailwindCSS](https://tailwindcss.com/)
* **Linguagem:** TypeScript
* **Conteúdo:** Markdown (`.md`) e MDX
* **Deploy:** Netlify / Vercel (Compatível com qualquer host estático)

---

## ⚙️ Personalizações e Guia de Desenvolvimento

Abaixo estão documentadas as alterações estruturais e como utilizá-las para manutenção ou expansão do projeto.

### 1. Sistema de Políticas e Termos (Legal)
O projeto possui uma *Collection* dedicada para documentos legais, permitindo URLs amigáveis em diferentes idiomas (ex: `/politica-de-privacidade` em PT e `/privacy-policy` em EN).

**Como adicionar/editar políticas:**
1. Navegue até `src/data/policies/[idioma]/`.
2. Crie ou edite o arquivo `.md`.
3. **Frontmatter Obrigatório:**
   ```yaml
   ---
   title: "Título da Página"
   description: "Descrição para SEO"
   postSlug: "url-amigavel-desejada" # Ex: politica-de-privacidade
   ---