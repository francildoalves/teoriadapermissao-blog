import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
# 1. Regra Geral: Permite todos os buscadores (Google, Bing, SearchGPT, etc)
User-agent: *
Allow: /

# 2. Bloquear Treinamento de IA (OpenAI - ChatGPT)
User-agent: GPTBot
Disallow: /

# 3. Bloquear Treinamento de IA (Common Crawl - usado por várias IAs)
User-agent: CCBot
Disallow: /

# 4. Bloquear Treinamento do Google (Bard/Gemini), mas MANTER a Busca do Google
User-agent: Google-Extended
Disallow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};