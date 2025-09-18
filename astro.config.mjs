import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: { plugins: [tailwindcss()], },
});