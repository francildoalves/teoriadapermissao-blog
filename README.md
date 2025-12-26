# 🧠 Blog Teoria da Permissão

> *Documentando a jornada entre a Análise de Sistemas e a Governança Emocional.*

[![Netlify Status](https://api.netlify.com/api/v1/badges/3877e14a-0bdc-4e85-bcd4-542f93f860a3/deploy-status)](https://app.netlify.com/sites/astro-paper-i18n/deploys)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100-success?style=flat-square)
![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)

Este repositório contém o código-fonte do blog oficial da **Teoria da Permissão**. O projeto foi desenvolvido seguindo princípios de **Green Software**, priorizando performance, acessibilidade e baixo consumo de recursos computacionais.

## 🚀 Sobre o Projeto

Este blog é uma implementação técnica robusta baseada no tema [AstroPaper](https://github.com/satnaing/astro-paper), com suporte a internacionalização (i18n) herdado do [AstroPaper I18n](https://github.com/yousef8/astro-paper-i18n).

O objetivo é entregar conteúdo de texto rico (Markdown/MDX) com velocidade extrema, sem o "inchaço" (bloat) de frameworks JavaScript pesados no lado do cliente.

### ⚡ Principais Funcionalidades

* **Green Software & Performance:** Pontuação 100/100 no Lighthouse. O site gera HTML estático e envia o mínimo de JS para o navegador.
* **Internacionalização (i18n):**
    * 🇧🇷 **Português (Padrão):** Conteúdo nativo.
    * 🇺🇸 **Inglês / 🇨🇳 Chinês / 🇸🇦 Árabe:** Suporte estrutural para expansão global.
* **UI/UX Personalizada:**
    * Modo Claro/Escuro (Dark Mode).
    * **Header Customizado:** Integração de botão de ação (CTA) para afiliados com ícone *bolt* e tooltips traduzidos.
    * **Busca Fuzzy:** Pesquisa rápida dentro do blog sem dependências externas pesadas.
* **Tipagem Forte:** Todo o projeto utiliza TypeScript para garantir a integridade dos dados e configurações.

---

## 🛠️ Stack Tecnológica

* **Framework:** [Astro](https://astro.build/)
* **Estilização:** [TailwindCSS](https://tailwindcss.com/)
* **Linguagem:** TypeScript
* **Ícones:** Tabler Icons (SVG puro)
* **Conteúdo:** Markdown (`.md`) e MDX

---

## ⚙️ Personalizações Realizadas

Além das funcionalidades do tema original, as seguintes alterações foram implementadas:

1.  **Formatação Regional:** Ajuste no componente `Datetime` para exibir datas no formato brasileiro (ex: *25 de dez. de 2025*) e horário 24h, mantendo o padrão AM/PM apenas para a versão em inglês.
2.  **Integração de Afiliados:** Adição de um botão de destaque no cabeçalho com abertura segura de links externos (`rel="noopener noreferrer"`).
3.  **Tradução Dinâmica:** Expansão dos dicionários de tradução (`pt-br`, `en`, `ar`, `zh`) para incluir termos de negócio específicos ("Ficha de Interesse").

---

## 👨🏻‍💻 Como Rodar Localmente

Certifique-se de ter o Node.js e o pnpm (ou npm) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPO.git](https://github.com/SEU-USUARIO/SEU-REPO.git)
    cd SEU-REPO
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```
    O site estará disponível em `http://localhost:4321`.

4.  **Build para Produção:**
    ```bash
    pnpm build
    ```

---

