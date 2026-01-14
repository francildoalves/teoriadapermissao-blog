---
title: "Como configurar o tema AstroPaper"
description: "Como você pode tornar o tema AstroPaper totalmente seu."
version: "1.0"
upstream_source: "how-to-configure-astropaper-theme.md"
pubDatetime: 2022-09-23T04:58:53Z
modDatetime: 2025-03-20T03:15:57.792Z
---

O AstroPaper é um tema de blog Astro altamente personalizável. Com o AstroPaper, você pode personalizar tudo de acordo com seu gosto pessoal. Este artigo explicará como você pode fazer algumas personalizações facilmente no arquivo de configuração.

## Configurando SITE

As configurações importantes residem no arquivo `src/config.ts`. Dentro desse arquivo, você verá o objeto `SITE` onde pode especificar as configurações principais do seu site.

Durante o desenvolvimento, não há problema em deixar `SITE.website` vazio. Mas no modo de produção, você deve especificar sua url implantada na opção `SITE.website`, pois isso será usado para URL canônica, URL de cartão social, etc., que são importantes para SEO.

```js
// arquivo: src/config.ts
export const SITE = {
  website: "https://teoriadapermissao.com.br/", // substitua pelo seu domínio implantado
  author: "Autor",
  profile: "https://seulink...",
  desc: "Descrição do site.",
  title: "Teoria da Permissão",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutos
  showArchives: true,
  showBackButton: true, // mostrar botão voltar nos detalhes do post
  editPost: {
     enabled: true,
     text: "Sugerir Alterações",
     url: "https://github.com/...",
  },
  dynamicOgImage: true, // habilitar geração automática de imagem og dinâmica
  lang: "pt-br", // código de idioma html. Deixe vazio e o padrão será "en"
  timezone: "America/Sao_Paulo", // Fuso horário global padrão (formato IANA)
} as const;
```

Aqui estão as opções de configuração do SITE

| Opções                | Descrição                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `website`             | URL do seu site implantado                                                                                                                                                                                                                                                                                                                                      |
| `author`              | Seu nome                                                                                                                                                                                                                                                                                                                                                        |
| `profile`             | URL do seu site pessoal/portfólio usado para melhor SEO. Coloque `null` ou string vazia `""` se não tiver.                                                                                                                                                                                                                                                      |
| `desc`                | Descrição do seu site. Útil para SEO e compartilhamento em mídias sociais.                                                                                                                                                                                                                                                                                      |
| `title`               | Nome do seu site                                                                                                                                                                                                                                                                                                                                                |
| `ogImage`             | Sua imagem OG padrão para o site. Útil para compartilhamento em mídias sociais. Imagens OG podem ser uma URL de imagem externa ou podem ser colocadas no diretório `/public`.                                                                                                                                                                                   |
| `lightAndDarkMode`    | Habilita ou desabilita `modo claro e escuro` para o site. Se desativado, o esquema de cores primário será usado. Esta opção está ativada por padrão.                                                                                                                                                                                                            |
| `postPerIndex`        | O número de posts a serem exibidos na página inicial na seção `Recentes`.                                                                                                                                                                                                                                                                                       |
| `postPerPage`         | Você pode especificar quantos posts serão exibidos em cada página de posts. (ex: se definir `SITE.postPerPage` como 3, cada página mostrará apenas 3 posts por página)                                                                                                                                                                                          |
| `scheduledPostMargin` | No modo Produção, posts com um `pubDatetime` futuro não serão visíveis. No entanto, se o `pubDatetime` de um post estiver dentro dos próximos 15 minutos, ele será visível. Você pode definir `scheduledPostMargin` se não gostar da margem padrão de 15 minutos.                                                                                               |
| `showArchives`        | Determina se deve exibir o menu `Arquivos` e sua página correspondente no site. Esta opção é definida como `true` por padrão.                                                                                                                                                                                                                                   |
| `showBackButton`      | Determina se deve exibir o botão `Voltar` em cada postagem do blog.                                                                                                                                                                                                                                                                                             |
| `editPost`            | Esta opção permite que os usuários sugiram alterações em uma postagem de blog fornecendo um link de edição sob o título da postagem. Esse recurso pode ser desativado definindo `SITE.editPost.enabled` como `false`.                                                                                                                                           |
| `dynamicOgImage`      | Esta opção controla se deve [gerar imagem og dinâmica](dynamic-og-images.md) se nenhuma `ogImage` for especificada no frontmatter da postagem do blog. Se você tiver muitas postagens de blog, pode querer desativar esse recurso. Veja o [trade-off](dynamic-og-images.md#trade-off-compensação) para mais detalhes. |

## Atualizar largura do layout
A largura máxima padrão (`max-width`) para todo o blog é `768px` (`max-w-3xl`). Se você quiser alterá-lo, pode atualizar facilmente o utilitário `max-w-app` em seu arquivo `src/styles/base.css`:

```css
@utility max-w-app {
  @apply max-w-4xl xl:max-w-5xl;
  /* ex: max-w-4xl xl:max-w-5xl */
}
```

Você pode explorar mais valores de `max-width` na [documentação do Tailwind CSS](https://tailwindcss.com/docs/max-width).

## Configurando logo ou título
Antes do AstroPaper v5, você podia atualizar o nome/logo do seu site no objeto `LOGO_IMAGE` dentro do arquivo `src/config.ts`. No entanto, no AstroPaper v5, esta opção foi removida em favor dos componentes SVG e Image nativos do Astro.

Existem 3 opções que você pode fazer:

### Opção 1: Texto do título do SITE
Esta é a opção mais fácil. Você só precisa atualizar `SITE.title` no arquivo `src/config.ts`.

### Opção 2: Componente SVG do Astro
Você pode querer usar esta opção se quiser usar um logo SVG.

- Primeiro adicione um SVG dentro do diretório `src/assets`. (ex: `src/assets/dummy-logo.svg`)
- Em seguida, importe esse SVG dentro de `src/components/Header.astro`

  ```astro
  ---
  // outras importações
  import DummyLogo from "@/assets/dummy-logo.svg";
  ---
  ```

- Finalmente, substitua `{SITE.title}` pelo logo importado.

  ```html
  <a
    href="/"
    class="absolute py-1 text-left text-2xl leading-7 font-semibold whitespace-nowrap sm:static"
  >
    <DummyLogo class="scale-75 dark:invert" />
    <!-- {SITE.title} -->
  </a>
  ```

A melhor parte dessa abordagem é que você pode personalizar seus estilos SVG conforme necessário. No exemplo acima, você pode ver como a cor do logo SVG pode ser invertida no modo escuro.

### Opção 3: Componente Image do Astro
Se seu logo for uma imagem, mas não SVG, você pode usar o componente Image do Astro.

- Adicione seu logo dentro do diretório `src/assets`. (ex: `src/assets/dummy-logo.png`)
- Importe `Image` e seu logo em `src/components/Header.astro`

  ```astro
  ---
  // outras importações
  import { Image } from "astro:assets";
  import dummyLogo from "@/assets/dummy-logo.png";
  ---
  ```

- Então, substitua `{SITE.title}` pelo logo importado.

  ```html
  <a
    href="/"
    class="absolute py-1 text-left text-2xl leading-7 font-semibold whitespace-nowrap sm:static"
  >
    <image src="{dummyLogo}" alt="Blog Exemplo" class="dark:invert" />
    <!-- {SITE.title} -->
  </a>
  ```

Com essa abordagem, você ainda pode ajustar a aparência da sua imagem usando classes CSS. No entanto, isso pode nem sempre atender ao que você deseja. Se precisar exibir imagens de logo diferentes com base no modo claro ou escuro, verifique como os ícones claro/escuro são manipulados dentro do componente `Header.astro`.

## Configurando links sociais
Você pode configurar links sociais no objeto `SOCIALS` dentro de `src/constants.ts`.

```ts
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/...",
    linkTitle: ` ${SITE.title} no Github`,
    icon: IconGitHub,
  },
  // ... outros
] as const;
```

## Configurando links de compartilhamento
Você pode configurar links de compartilhamento no objeto `SHARE_LINKS` dentro de `src/constants.ts`.

## Conclusão
Esta é a breve especificação de como você pode personalizar este tema. Você pode personalizar mais se souber um pouco de programação.
