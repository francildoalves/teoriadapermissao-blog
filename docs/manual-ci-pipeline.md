# Badges e CI Pipeline - Relatório de Correções

## Objetivo
Corrigir os badges do README que indicavam status incorretos ("failing" ou "no release") e garantir que o pipeline de verificação (CI) do GitHub estivesse funcionando corretamente.

## Alterações Realizadas

### 1. Correção do Badge de Release
*   **Problema:** O badge mostrava `no releases` porque não havia Releases manuais criadas no GitHub.
*   **Solução:** Alterado o badge para rastrear **Tags** (`v1.2.0`), que são criadas automaticamente pelo versionamento.
*   **Ação:** Executado `git push --tags` para sincronizar as versões locais com o remoto.

### 2. Correção do Badge "Build Status" (CI Pipeline)
*   **Problema:** O badge estava vermelho ("failing").
*   **Causas Identificadas:**
    1.  O workflow tentava fazer deploy para o GitHub Pages sem permissão.
    2.  O nome do arquivo `deploy.yml` causava confusão.
    3.  Havia erros no código (linting) e formatação (prettier) bloqueando a aprovação.
    4.  Havia código comentado ("backup") causando erro de sintaxe no arquivo `index.astro`.

*   **Soluções:**
    *   **Renomeação:** Arquivo movido de `.github/workflows/deploy.yml` para `.github/workflows/ci.yml` para refletir que ele apenas verifica o código.
    *   **Limpeza:** Removido o passo de deploy do GitHub (já que o uso é Cloudflare Pages).
    *   **Correção de Código:** Removido código morto em `index.astro`.
    *   **Padronização:** Rodado `npm run format` e `npm run lint` em todo o projeto.

### 3. Resultado Final
O painel do README agora exibe todos os indicadores em verde/azul, confirmando a saúde do projeto.

![Badges Corrigidos](./badges-fixed.png)

## Como Manter
*   **Novos Idiomas:** Os testes (`src/i18n/*.test.ts`) reconhecem automaticamente novos idiomas adicionados em `config.ts`.
*   **Verificação:** Antes de enviar código, você pode rodar `pnpm test` ou `pnpm lint` localmente para garantir que o badge continuará verde.
