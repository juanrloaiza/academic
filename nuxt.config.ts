import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  ssr: true,
  css: ["assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/icon", "nuxt-seo-utils", '@nuxtjs/mdc'],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      titleTemplate: "%s · Juan R. Loaiza",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
  seo: {
    meta: {
      title: "Juan R. Loaiza",
      description: "Académico en Filosofía · Professor of Philosophy",
      ogDescription: "Académico en Filosofía · Professor of Philosophy",
      ogSiteName: "Juan R. Loaiza",
      author: "Juan R. Loaiza",
    },
  },
  i18n: {
    vueI18n: "i18n.config.ts",
    baseUrl: "https://www.juanrloaiza.com",
    locales: ["es", "en"],
    defaultLocale: "es",
    strategy: "prefix",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "one-light",
            dark: "catppuccin-frappe",
          },
          langs: ["python", "js", "md", "yaml"],
        },
      },
    },
  },
  icon: {
    localApiEndpoint: "/_nuxt_icon",
    serverBundle: false,
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/en/blog/", "/es/blog/"],
    },
  },
});

