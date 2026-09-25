import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Production URL (sitemap + SEO). Keep in sync with `url` in src/site.ts and public/CNAME.
  site: "https://seedpeers.net/",

  i18n: {
    defaultLocale: "it",
    locales: ["en", "it"],
    routing: {
      // Italian at /, English at /en
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
