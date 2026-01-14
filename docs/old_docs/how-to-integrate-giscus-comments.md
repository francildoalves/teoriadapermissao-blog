---
title: "Como integrar comentários Giscus no AstroPaper"
description: "Função de comentário em um blog estático hospedado no GitHub Pages com Giscus."
version: "1.0"
upstream_source: "how-to-integrate-giscus-comments.md"
pubDatetime: 2024-07-25T11:11:53Z
modDatetime: 2025-03-12T12:28:53Z
---

Hospedar um blog estático leve em uma plataforma como [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) tem inúmeras vantagens, mas também remove alguma interatividade. Felizmente, [Giscus](https://giscus.app/) existe e oferece uma maneira de incorporar comentários de usuários em sites estáticos.

## Como o _Giscus_ funciona
[Giscus usa a API do GitHub](https://github.com/giscus/giscus?tab=readme-ov-file#how-it-works) para ler e armazenar comentários feitos por usuários do _GitHub_ nas `Discussões` (Discussions) associadas a um repositório.

Incorpore o script cliente do _Giscus_ no seu site, configure-o com a URL do repositório correta, e os usuários poderão ver e escrever comentários (quando logados no _GitHub_).

A abordagem é serverless, pois os comentários são armazenados no _GitHub_ e carregados dinamicamente no lado do cliente, sendo perfeito para um blog estático como o _AstroPaper_.

## Configurando o _Giscus_
O _Giscus_ pode ser configurado facilmente em [giscus.app](https://giscus.app/), mas vou delinear o processo brevemente.

### Pré-requisitos
Os pré-requisitos para fazer o _Giscus_ funcionar são:

- o repositório é [público](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#making-a-repository-public)
- o [app Giscus](https://github.com/apps/giscus) está instalado
- o recurso [Discussões](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository) está ativado para o seu repositório

Se alguma dessas condições não puder ser atendida por qualquer motivo, infelizmente, o _Giscus_ não pode ser integrado.

### Configurando o _Giscus_
Em seguida, configurar o _Giscus_ é necessário. Na maioria dos casos, os padrões pré-selecionados são adequados, e você só deve modificá-los se tiver um motivo específico e souber o que está fazendo.

No entanto, você precisa:

- selecionar o idioma correto para a interface
- especificar o repositório _GitHub_ que deseja conectar
- criar e definir uma discussão do tipo `Announcement` (Anúncio) no _GitHub_ se quiser garantir que ninguém possa criar comentários aleatórios diretamente no _GitHub_
- definir o esquema de cores

Após definir as configurações, o _Giscus_ fornece uma tag `<script>` gerada, que você precisará nos próximos passos.

## Tag de script simples

Agora você deve ter uma tag de script parecida com esta:

```html
<script
  src="https://giscus.app/client.js"
  data-repo="[INSIRA REPO AQUI]"
  data-repo-id="[INSIRA ID DO REPO AQUI]"
  data-category="[INSIRA NOME DA CATEGORIA AQUI]"
  data-category-id="[INSIRA ID DA CATEGORIA AQUI]"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="pt"
  crossorigin="anonymous"
  async
></script>
```

Simplesmente adicione isso ao código-fonte do site. Se você estiver usando _AstroPaper_ e quiser habilitar comentários nos posts, navegue até `src/layouts/PostDetails.astro` e cole no local desejado onde deseja que os comentários apareçam, talvez abaixo dos botões `Compartilhar este post:`.

```diff
      <ShareLinks />
    </div>

+    <script src="https://giscus.app/client.js"
+        ...
+    </script>

  </main>
  <Footer />
</Layout>
```

## Componente React com tema claro/escuro (Avançado)

A tag de script embutida é estática. Como o _AstroPaper_ possui alternância de tema claro/escuro, seria legal se os comentários transitassem perfeitamente entre os temas.

Primeiro, instalamos o [componente React](https://www.npmjs.com/package/@giscus/react) para _Giscus_:

```bash
npm i @giscus/react && npx astro add react
```

Em seguida, criamos um novo componente React `Comments.tsx` em `src/components`, que observa a mudança de tema e atualiza o Giscus dinamicamente (veja o código original para detalhes de implementação do hook `useEffect`).

Adicione o novo componente de Comentários em `src/layouts/PostDetails.astro` (substituindo o script anterior).

```diff
+ import Comments from "@/components/Comments";

      <ShareLinks />
    </div>

+   <Comments client:only="react" />

    <hr class="my-6 border-dashed" />

  </main>
  <Footer />
</Layout>
```

E está feito! Você integrou com sucesso comentários no _AstroPaper_!
