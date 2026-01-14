---
title: "Geração Dinâmica de Imagens OG em Posts do Blog"
description: "Novo recurso no AstroPaper v1.4.0, introduzindo geração dinâmica de imagens OG para postagens de blog."
version: "1.4.0"
upstream_source: "dynamic-og-images.md"
pubDatetime: 2022-12-28T04:59:04.866Z
modDatetime: 2025-03-12T13:39:20.763Z
---

Novo recurso no AstroPaper v1.4.0, introduzindo geração dinâmica de imagens OG para postagens de blog.

## Índice

## Introdução

Imagens OG (também conhecidas como Imagens Sociais) desempenham um papel importante no engajamento em mídias sociais. Caso você não saiba o que significa imagem OG, é uma imagem exibida sempre que compartilhamos a URL do nosso site em mídias sociais como Facebook, Discord, etc.

> A Imagem Social usada para o Twitter tecnicamente não é chamada de imagem OG. No entanto, neste post, usarei o termo imagem OG para todos os tipos de Imagens Sociais.

## Imagem OG padrão/estática (o jeito antigo)

O AstroPaper já fornecia uma maneira de adicionar uma imagem OG a uma postagem de blog. O autor pode especificar a imagem OG no frontmatter `ogImage`. Mesmo quando o autor não define a imagem OG no frontmatter, a imagem OG padrão será usada como fallback (neste caso `public/astropaper-og.jpg`). Mas o problema é que a imagem OG padrão é estática, o que significa que toda postagem de blog que não incluir uma imagem OG no frontmatter sempre usará a mesma imagem OG padrão, apesar de cada título/conteúdo da postagem ser diferente dos outros.

## Imagem OG Dinâmica

Gerar uma imagem OG dinâmica para cada postagem permite que o autor evite especificar uma imagem OG para cada postagem de blog individual. Além disso, isso impedirá que a imagem OG de fallback seja idêntica para todas as postagens do blog.

No AstroPaper v1.4.0, o pacote [Satori](https://github.com/vercel/satori) da Vercel é usado para geração dinâmica de imagens OG.

Imagens OG dinâmicas serão geradas no momento da build para postagens de blog que:

- não incluam imagem OG no frontmatter
- não estejam marcadas como rascunho (draft).

## Anatomia da imagem OG dinâmica do AstroPaper

A imagem OG dinâmica do AstroPaper inclui _o título da postagem do blog_, _nome do autor_ e _título do site_. O nome do autor e o título do site serão recuperados via `SITE.author` e `SITE.title` do arquivo **"src/config.ts"**. O título é gerado a partir do frontmatter `title` da postagem do blog.

### Problema com Caracteres Não-Latinos

Títulos com caracteres não-latinos não serão exibidos corretamente de imediato. Para resolver isso, temos que substituir `fontsConfig` dentro de `loadGoogleFont.ts` com sua fonte preferida.

```ts
// arquivo: src/utils/loadGoogleFonts.ts

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "Noto Sans JP",
      font: "Noto+Sans+JP",
      weight: 400,
      style: "normal",
    },
    // outros códigos
  ];
  // outros códigos
}
```

> Confira [este PR](https://github.com/satnaing/astro-paper/pull/318) para mais informações.

## Trade-off (Compensação)

Embora este seja um recurso legal de se ter, há uma compensação. Cada imagem OG leva cerca de um segundo para gerar. Isso pode não ser perceptível no início, mas à medida que o número de postagens do blog cresce, você pode querer desativar esse recurso. Como cada imagem OG leva tempo para gerar, ter muitas delas aumentará o tempo de build linearmente.

Por exemplo: Se uma imagem OG leva um segundo para gerar, então 60 imagens levarão cerca de um minuto, e 600 imagens levarão aproximadamente 10 minutos. Isso pode impactar significativamente os tempos de build conforme seu conteúdo escala.

Problema relacionado: [#428](https://github.com/satnaing/astro-paper/issues/428)

## Limitações

No momento da escrita deste texto, [Satori](https://github.com/vercel/satori) é razoavelmente novo e ainda não atingiu uma versão principal (major release). Portanto, ainda existem algumas limitações para esse recurso de imagem OG dinâmica.

- Além disso, línguas RTL (da direita para a esquerda) ainda não são suportadas (Nota do projeto: Estamos trabalhando nisso no `astro-paper-i18n`).
- [Usar emoji](https://github.com/vercel/satori#emojis) no título pode ser um pouco complicado.
