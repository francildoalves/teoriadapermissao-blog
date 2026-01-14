RELATÓRIO DE CONFORMIDADE: MANUAIS VS. CÓDIGO ATUAL

Data: 13/01/2026
Versão do Projeto: Astro 5 + Tailwind v4 + i18n
Status Geral: DOCUMENTAÇÃO PARCIALMENTE DIVERGENTE

Este relatório analisa a precisão dos manuais traduzidos em relação à estrutura real do código do blog "Teoria da Permissão".

--------------------------------------------------------------------------------

1. adding-new-post.md (Adicionando Novo Post)

Status: Parcialmente Incorreto

Divergência Crítica:
O manual instrui criar posts em "src/content/blog/". O projeto utiliza um loader personalizado apontando para "src/data/blog/" (definido em "src/content.config.ts").

Observação:
O manual não menciona a necessidade de separar por idioma (ex: "src/data/blog/pt-br/"), crucial para o sistema i18n atual.

Schema:
Os campos do frontmatter ("pubDatetime", "description", etc.) estão em conformidade com o schema definido.

--------------------------------------------------------------------------------

2. customizing-astropaper-theme-color-schemes.md e predefined-color-schemes.md

Status: Divergência de Arquivos

Divergência:
Os manuais referenciam o arquivo "src/styles/base.css".

Realidade:
O arquivo renomeado ou usado no projeto é "src/styles/global.css".

Sintaxe:
A sintaxe CSS ("@theme", ":root") é compatível com o Tailwind v4 usado no projeto.

--------------------------------------------------------------------------------

3. how-to-integrate-giscus-comments.md (Comentários Giscus)

Status: Funcionalidade Não Implementada

Análise:
O manual ensina a criar "src/components/Comments.tsx" ou injetar script.

Realidade:
Não existe "Comments.tsx" em "src/components". O arquivo "PostDetails.astro" não contém tag de script do Giscus nem importação do componente.

Conclusão:
O blog atualmente NÃO possui sistema de comentários ativado (ou a implementação foi removida). O manual serve como guia de implementação futura, não referência atual.

--------------------------------------------------------------------------------

4. how-to-configure-astropaper-theme.md (Configuração)

Status: Conforme (Maioria)

Realidade:
As opções listadas ("website", "author", "profile", "socials") estão presentes em "src/config.ts".

Notas:
- O manual pode não cobrir opções novas como "hideEditPost" ou "timezone" (adicionadas recentemente a "content.config.ts").
- A seção de "Logo" do manual refere-se a versões antigas (pré-v5), mas o projeto já usa componentes Astro, alinhando-se com a nota "v5" do manual.

--------------------------------------------------------------------------------

5. dynamic-og-images.md (Imagens Sociais)

Status: Conforme

Realidade:
A infraestrutura de geração de imagens ("src/utils/generateOgImages.ts", "loadGoogleFont.ts") está presente e funcional.

Nota:
O manual descreve o funcionamento interno que reflete corretamente o código em "src/utils/og-templates".

--------------------------------------------------------------------------------

6. setting-dates-via-git-hooks.md (Datas Automáticas)

Status: Ambiente Preparado

Realidade:
O diretório ".husky" existe com hooks configurados ("pre-commit").

Observação:
O manual é um guia de configuração. Como o Husky já está instalado, o manual serve para manutenção dos scripts.

--------------------------------------------------------------------------------

RECOMENDAÇÕES DE AÇÃO

1. Corrigir "adding-new-post.md": Atualizar caminhos para "src/data/blog" e adicionar seção sobre estrutura de pastas de idiomas.
2. Atualizar Manuais de Estilo: Substituir referências de "base.css" para "global.css" em todos os manuais de design.
3. Decidir sobre Giscus: Se comentários não forem desejados, marcar o manual como "Recurso Opcional/Desativado" ou removê-lo. Se forem, seguir o manual para implementar.
