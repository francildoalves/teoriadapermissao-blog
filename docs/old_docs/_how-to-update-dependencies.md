---
title: "Como atualizar dependências e o AstroPaper"
description: "Maneiras de atualizar dependências e o template AstroPaper."
version: "1.0"
upstream_source: "how-to-update-dependencies.md"
pubDatetime: 2023-07-20T15:33:05.569Z
---

Este post explicará como você pode atualizar dependências e o próprio template AstroPaper.

## Atualizando Dependências de Pacotes (Packages)
Existem várias maneiras de atualizar dependências. Uma maneira é atualizar manualmente cada pacote usando `npm install nome-do-pacote@latest`. Esse método é o mais direto. No entanto, pode não ser a opção mais eficiente.

Minha maneira recomendada de atualizar dependências é usando o pacote [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

Primeiro, instale o pacote `npm-check-updates` globalmente.

```bash
npm install -g npm-check-updates
```

Antes de fazer quaisquer atualizações, é uma boa ideia verificar todas as novas dependências que podem ser atualizadas.

```bash
ncu
```

Na maioria das vezes, atualizações de `patch` podem ser feitas sem afetar o projeto. Então, geralmente atualizo dependências de patch rodando `ncu -u --target patch`.

A próxima parte envolve atualizar dependências `minor`. Atualizações menores geralmente não quebram o projeto, mas é sempre bom verificar as notas de lançamento.

```bash
ncu -i --target minor
```

Por último, mas não menos importante, pode haver algumas atualizações `major`. Verifique o restante rodando:

```bash
ncu -i
```

Se houver atualizações maiores (major), você deve ser muito cuidadoso, pois isso provavelmente quebrará o projeto. Portanto, leia as notas de lançamento respectivas com atenção.

## Atualizando o template AstroPaper
O AstroPaper está evoluindo com correções de bugs, novos recursos, etc. Se você usa o AstroPaper como template, pode querer atualizá-lo quando houver um novo lançamento.

### Arquivos e Diretórios para ter em mente
Na maioria dos casos, os arquivos que você **não** quer sobrescrever (pois provavelmente você os alterou) são:
*   `src/content/blog/` (Seus posts)
*   `src/config.ts` (Sua configuração)
*   `src/pages/about.md` (Seu Sobre)
*   `public/` (Seus assets)
*   `src/styles/base.css` (Seus estilos personalizados)

Se você modificou pouco o template, pode ser ok substituir tudo pelo AstroPaper mais recente, exceto os arquivos acima.

### Atualizando AstroPaper usando Git (AVANÇADO)
**IMPORTANTE!!!**

> Faça isso apenas se souber resolver conflitos de merge (merge conflicts). Caso contrário, atualize os arquivos manualmente.

Primeiro, adicione o astro-paper como remoto (remote) no seu projeto.

```bash
git remote add astro-paper https://github.com/satnaing/astro-paper.git
```

Crie uma nova branch para atualizar.

```bash
git checkout -b build/update-astro-paper
```

Então, puxe as alterações do astro-paper.

```bash
git pull astro-paper main
```

Se encontrar o erro `fatal: refusing to merge unrelated histories`, rode:

```bash
git pull astro-paper main --allow-unrelated-histories
```

Após rodar o comando acima, você provavelmente encontrará conflitos. Você precisará resolvê-los manualmente.

Depois de resolver os conflitos, teste seu blog completamente. Se estiver satisfeito, faça o merge da branch de atualização para sua branch principal.
