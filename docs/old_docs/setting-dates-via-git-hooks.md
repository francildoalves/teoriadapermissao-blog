---
title: "Como usar Git Hooks para definir datas de criação e modificação"
description: "Como automatizar a atualização de datas no AstroPaper."
version: "1.0"
upstream_source: "setting-dates-via-git-hooks.md"
pubDatetime: 2024-01-03T20:40:08Z
modDatetime: 2024-01-08T18:59:05Z
---

Neste post, explicarei como usar o hook `pre-commit` do Git para automatizar a inserção das datas de criação (`pubDatetime`) e modificação (`modDatetime`) no frontmatter do tema AstroPaper.

## Tenha-os em todos os lugares
[Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) são ótimos para automatizar tarefas. O maior defeito deles é que hooks do lado do cliente são por máquina.

Como este projeto usa npm, podemos usar um pacote chamado [Husky](https://typicode.github.io/husky/) (já instalado no AstroPaper) para instalar automaticamente os hooks para nós.

> Atualização! No AstroPaper v4.3.0, o hook pré-commit foi removido em favor do GitHub Actions. No entanto, você pode facilmente instalar o Husky você mesmo.

## O Hook
Como queremos que este hook rode ao commitar o código para atualizar as datas, usaremos o hook `pre-commit`.

Navegando até o arquivo `hooks/pre-commit` (ou `.husky/pre-commit`), vamos adicionar um ou ambos os seguintes trechos.

### Atualizando o modDatetime quando um arquivo é editado

```shell
# Arquivos modificados, atualize o modDatetime
git diff --cached --name-status |
grep -i '^M.*\.md$' |
while read _ file; do
  filecontent=$(cat "$file")
  frontmatter=$(echo "$filecontent" | awk -v RS='---' 'NR==2{print}')
  draft=$(echo "$frontmatter" | awk '/^draft: /{print $2}')
  if [ "$draft" = "false" ]; then
    echo "$file modDateTime updated"
    cat $file | sed "/---.*/,/---.*/s/^modDatetime:.*$/modDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" > tmp
    mv tmp $file
    git add $file
  fi
  # ... lógica adicional para rascunhos
done
```

Este script verifica arquivos modificados (`M`) que terminam em `.md` e atualiza o campo `modDatetime` no frontmatter com a data atual UTC.

### Adicionando a data para novos arquivos

Adicionar a data para um novo arquivo é o mesmo processo acima, mas desta vez procuramos linhas que foram adicionadas (`A`).

```shell
# Novos arquivos, adicionar/atualizar o pubDatetime
git diff --cached --name-status | egrep -i "^(A).*\.(md)$" | while read a b; do
  cat $b | sed "/---.*/,/---.*/s/^pubDatetime:.*$/pubDatetime: $(date -u "+%Y-%m-%dT%H:%M:%SZ")/" > tmp
  mv tmp $b
  git add $b
done
```

## Configurando o Frontmatter

Para permitir que o Astro compile o markdown com datas vazias (nulas), precisamos editar `src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // outros campos...
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(), // Permitir nulo
      // outros campos...
    }),
});
```

Isso impede que o build quebre se um post ainda não tiver data de modificação.
