export const SITE = {
  website: "https://teoriadapermissao.com.br/", // replace this with your deployed domain
  author: "FranCILDO Gryphon",
  profile: "https://github.com/francildoalves",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    url: "https://github.com/francildoalves/teoriadapermissao-blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "pt-BR", // html lang code. Set this empty and default will be "en"
  timezone: "America/Fortaleza", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
