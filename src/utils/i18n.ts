import { siteConfig } from '../config/site.config';

export function getLangConfig(locale: string | undefined) {
  const lang = locale || 'it';

  if (lang === 'en' && siteConfig.locales?.en) {
    const enOverrides = siteConfig.locales.en;
    return {
      ...siteConfig,
      brand: {
        ...siteConfig.brand,
        ...enOverrides.brand,
      },
      seo: {
        ...siteConfig.seo,
        ...enOverrides.seo,
      },
      nav: {
        ...siteConfig.nav,
        ...enOverrides.nav,
      },
      hero: {
        ...siteConfig.hero,
        ...enOverrides.hero,
      },
      greenhouse: {
        ...siteConfig.greenhouse,
        ...enOverrides.greenhouse,
      },
      howItWorks: {
        ...siteConfig.howItWorks,
        ...enOverrides.howItWorks,
      },
      news: {
        ...siteConfig.news,
        ...enOverrides.news,
      },
      contact: {
        ...siteConfig.contact,
        ...enOverrides.contact,
      },
      footer: {
        ...siteConfig.footer,
        ...enOverrides.footer,
      },
    };
  }

  return siteConfig;
}
