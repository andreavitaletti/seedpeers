import type it from './it.json'

export const defaultLocale = 'it'

/**
 * Shape of a locale file. Pages pass their JSON as the `t` prop, so `astro check`
 * fails if another locale file drifts from the default (Italian) one.
 */
export type Translations = Omit<typeof it, 'nav'> & {
  // An empty JSON array would otherwise be inferred as never[]
  nav: Omit<typeof it.nav, 'links'> & { links: { label: string; href: string }[] }
}

/** Prefix a site path with the locale; the default locale is served without a prefix. */
export function localizeUrl(lang: string, path = '/'): string {
  if (lang === defaultLocale) return path
  return path === '/' ? `/${lang}` : `/${lang}${path}`
}
