# AstroPaper com I18n

🌍 [Leia-me em árabe](README.ar.md)
🌍 [Leia-me em inglês](README.en.md)

<div align='center'>

![AstroPaper I18n](/public/astro-paper-i18n.png)

</div>

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Status do GitHub Actions](https://img.shields.io/github/actions/workflow/status/yousef8/astro-paper-i18n/deploy.yml?branch=main)
![Release no GitHub](https://img.shields.io/github/v/release/yousef8/astro-paper-i18n)
[![Status do Netlify](https://api.netlify.com/api/v1/badges/3877e14a-0bdc-4e85-bcd4-542f93f860a3/deploy-status)](https://app.netlify.com/sites/astro-paper-i18n/deploys)

Este repositório é um fork do tema [AstroPaper](https://github.com/satnaing/astro-paper), aprimorado para oferecer suporte à internacionalização (i18n).

O fork se baseia no tema original AstroPaper e integra funcionalidades de i18n.

A integração de i18n é implementada usando o [roteamento i18n do Astro](https://docs.astro.build/en/guides/internationalization/).

Como sou falante nativo de árabe, garanti que a integração i18n suporte idiomas RTL (como árabe, persa, etc.).

Se Deus quiser, este fork continuará sincronizado com o tema original [AstroPaper](https://github.com/satnaing/astro-paper).

Este fork **não modifica a interface do tema original**; ele apenas adiciona suporte a i18n.

## Sumário

- [🔥 Funcionalidades](#-funcionalidades)
  - [Melhorias de UI](#melhorias-de-ui)
  - [Funcionalidades de i18n](#funcionalidades-de-i18n)
  - [🧪 Testes](#-testes)
- [Pontuação Lighthouse](#pontuação-lighthouse)
- [Instalação](#instalação)
- [📖 Como Usar](#-como-usar)
- [🛠️ Configuração](#️-configuração)
  - [🔧 Configurações do Site](#-configurações-do-site)
  - [🌐 Configurações de Localidade](#-configurações-de-localidade)
- [🧞 Comandos](#-comandos)
- [🚧 Problemas Conhecidos](#-problemas-conhecidos)

## 🔥 Funcionalidades

Este projeto inclui todas as funcionalidades do tema original [AstroPaper](https://github.com/satnaing/astro-paper), com os seguintes aprimoramentos:

### Melhorias de UI

- [x] **Independente de Direção:**
  - [x] Suporte completo a RTL.
  - [x] Interface consistente para direções `LTR` e `RTL`.

### Funcionalidades de i18n

- [x] Traduções da interface, incluindo números e datas.
- [x] Seletor de idioma.
- [x] Traduções relacionadas à acessibilidade.
- [x] Integração i18n com tipagem segura usando TypeScript.
- [x] Sitemaps com suporte a i18n ([`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- [x] Geração de imagens OG com suporte a i18n.
  - Observação: o **satori** não suporta idiomas RTL, o que pode causar problemas de layout em imagens OG RTL.
- [x] Feeds RSS com suporte a i18n ([`@astrojs/rss`](https://docs.astro.build/en/guides/rss/)).
- [ ] 📋 **Planejado:**
  - [ ] Tradução de rotas.

### 🧪 Testes

- [x] Testes unitários com [Vitest](https://vitest.dev/)
- [x] Testes unitários para configurações e utilitários de i18n
- [ ] Testes unitários para [src/utils](/src/utils)
- [ ] Testes unitários para [src/config.ts](/src/config.ts)

## Pontuação Lighthouse

Clique para ver o relatório completo

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-yousef8-github-io-AstroPaperI18n-ar/d2cqwqovpv?form_factor=desktop">
    <img width="710" alt="Pontuação Lighthouse do AstroPaper I18n" src="AstroPaper-lighthouse-score.svg">
  </a>
</p>

## Instalação

Você pode fazer um fork do repositório

Ou instalar usando a CLI do Astro

```bash
pnpm create astro@latest --template yousef8/astro-paper-i18n
