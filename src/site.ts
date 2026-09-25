/**
 * Site-wide settings that are the same in every language.
 * All translatable copy lives in src/i18n/<lang>.json.
 */
export const site = {
  name: 'SeedPeers',

  /** Production URL: used for canonical links and og:image (keep in sync with `site` in astro.config.ts) */
  url: 'https://seedpeers.net',
  ogImage: '/favicon.svg',

  /** Umami analytics: enabled only when PUBLIC_UMAMI_WEBSITE_ID is set in .env */
  umamiSrc: 'https://cloud.umami.is/script.js',

  /**
   * Contact form → Google Form. Leave actionUrl empty to show a fake "sent" state (demo mode).
   * Entry IDs come from the Google Form's pre-filled link (entry.XXXX).
   */
  googleForm: {
    actionUrl:
      'https://docs.google.com/forms/u/1/d/e/1FAIpQLSevmft4y4e8AU_9PRg09S-1uEIU0c6lXQyX6Kqyh_l-x15z4Q/formResponse',
    fields: {
      firstName: 'entry.342363159',
      lastName: 'entry.460333090',
      email: 'entry.168365386',
      diy: 'entry.1208833990',
      pay: 'entry.2118968422',
      location: 'entry.1622443027',
      message: 'entry.446965754',
    },
  },

  /** Footer social links (icon names from src/data/icons.ts) */
  socials: [
    { icon: 'github', href: 'https://github.com/andreavitaletti/seedpeers' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/company/seedpeers' },
  ],
}
