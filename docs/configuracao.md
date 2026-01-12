# Configuração do Site

As configurações globais do projeto estão centralizadas no arquivo `src/config.ts`.

## Parâmetros Principais (`SITE`)

| Parâmetro | Descrição | Valor Atual |
| :--- | :--- | :--- |
| `website` | URL final de produção. Importante para SEO e Sitemap. | `https://teoriadapermissao.com.br/` |
| `author` | Nome do autor padrão para novos posts. | `FranCILDO Gryphon` |
| `desc` | Descrição global do site (meta description). | *Ver arquivo* |
| `title` | Título global do site. | *Ver arquivo* |
| `lightAndDarkMode` | Ativa o botão de troca de tema. | `true` |
| `postPerIndex` | Quantos posts aparecem na Home. | `4` |
| `postPerPage` | Quantos posts por página na paginação. | `4` |

## Outros Arquivos Importantes

*   **`src/i18n/config.ts`**: Configurações de idiomas e tradução.
*   **`tailwind.config.mjs`**: Configuração de estilos, cores e temas do Tailwind CSS.
*   **`astro.config.ts`**: Configurações do framework Astro (integrações, sitemap, processamento de imagens).

## Social Media

Os links de redes sociais (rodapé) são configurados no arquivo `src/components/Socials.astro` ou através de uma constante `SOCIALS` (verifique `src/constants.ts` se disponível).
