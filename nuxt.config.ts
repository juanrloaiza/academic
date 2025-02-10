import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/i18n", "@nuxt/icon"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",
        },
      ],
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
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
            dark: "nord",
          },
          langs: ["python", "js", "md", "yaml"],
        },
      },
    },
  },
});
