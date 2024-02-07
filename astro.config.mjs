import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
})
