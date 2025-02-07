// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['es', 'en'],
    defaultLocale: 'es',
    strategy: 'prefix'
  },
  tailwindcss: {
    config: 
    {
      content: [
        "./pages/**/*.{vue,html,js}",
        "./components/**/*.{vue,html,js}",
      ],
      theme: {

      }
    }
  }
})
