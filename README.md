# SeedPeers — website

Source of [seedpeers.net](https://seedpeers.net), built with [Astro](https://astro.build) and available in 🇮🇹 Italian (default, served at `/`) and 🇬🇧 English (served at `/en`).
Static output, no JS framework, light/dark theme.

## Where to edit what

| I want to change…                                   | Edit                                        |
| --------------------------------------------------- | ------------------------------------------- |
| Any text on the site (hero, sections, news, form, footer, privacy, 404) | `src/i18n/it.json` **and** `src/i18n/en.json` |
| Site name, production URL, Google Form, analytics, social links | `src/site.ts`                     |
| Which sections appear on the home page, and their order | `src/components/Landing.astro`           |
| The look of a single section                        | `src/components/<Section>.astro` (markup + scoped CSS) |
| Colors, fonts, spacing (design tokens `--ac-*`)     | `src/styles/globals.css`                    |
| Greenhouse picture                                  | `src/images/greenhouse.png`                 |
| Favicon, robots.txt, custom domain                  | `public/`                                   |

The two JSON files must have **the same keys**: `npm run build` fails if they drift apart.
Text fields such as `hero.description`, `news.items[].description` and the privacy sections accept inline HTML (`<b>`, `<a>`, `<strong>`).

### Common tasks

- **Add a news item**: append an object to `news.items` in both JSON files (`date`, `title`, `description`); put links inside `description` as `<a href=\"…\" target=\"_blank\" rel=\"noopener\">…</a>`.
- **Hide a section**: remove (or comment out) its line in `src/components/Landing.astro`.
- **Change the contact form destination**: update `googleForm.actionUrl` and the `entry.XXXX` IDs in `src/site.ts` (take them from the Google Form's pre-filled link). Leave `actionUrl` empty to make the form a no-op demo.
- **Enable Umami analytics**: set `PUBLIC_UMAMI_WEBSITE_ID` in a local `.env` file, and as an `env:` entry of the build step in `.github/workflows/deploy.yml` for production.

## Structure

```
src/
├── i18n/
│   ├── it.json          ← all Italian strings
│   ├── en.json          ← all English strings
│   └── index.ts         ← Translations type + localizeUrl() helper
├── site.ts              ← settings shared by every language
├── layouts/
│   └── Layout.astro     ← HTML shell, SEO meta, theme init, header + footer
├── components/
│   ├── Landing.astro    ← home page: Hero, Greenhouse, HowItWorks, News, ContactForm
│   ├── PrivacyPolicy.astro
│   └── …                ← sections and UI building blocks, each receives `t` (translations)
├── pages/
│   ├── index.astro      ← Italian home   → /
│   ├── privacy.astro    ← Italian privacy → /privacy
│   ├── 404.astro
│   └── en/
│       ├── index.astro  ← English home   → /en
│       └── privacy.astro← English privacy → /en/privacy
├── styles/globals.css   ← design tokens and global utilities
├── data/icons.ts        ← SVG icon paths
├── images/              ← images processed by Astro
├── css/                 ← shared styles for form inputs
└── utils/               ← helpers (theme, reveal-on-scroll, form inputs, country list)
```

Every page is a few lines long: it imports one JSON file and passes it as `t`:

```astro
---
import Layout from '../layouts/Layout.astro'
import Landing from '../components/Landing.astro'
import t from '../i18n/it.json'
---
<Layout t={t}>
  <Landing t={t} />
</Layout>
```

## Quick start

Requires Node.js 22.12+.

```bash
npm install
npm run dev      # http://localhost:4321  (English at /en)
npm run build    # type-check + build to dist/
npm run preview  # serve the built site locally
```

## Deploy

The site is deployed on **GitHub Pages** with the custom domain `seedpeers.net`.
Deployment is automatic: every push to `main` runs `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and publishes `dist/`.
You can also start it by hand from the repository's **Actions** tab (*Deploy to GitHub Pages → Run workflow*).

### Setting it up from scratch (e.g. on a fork)

1. On GitHub go to *Settings → Pages → Build and deployment* and set **Source** to **GitHub Actions**.
2. Set the production URL in **both** `astro.config.ts` (`site`) and `src/site.ts` (`url`).
3. Custom domain: put the domain in `public/CNAME` (currently `seedpeers.net`), add it under *Settings → Pages → Custom domain*, and configure the DNS records as described in the [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
   Without a custom domain, delete `public/CNAME`, set `site: 'https://<user>.github.io'` and add `base: '/<repo>'` in `astro.config.ts`. Internal links are absolute (`/privacy`, `/en`), so they would also need the base prefix.
4. Push to `main`.

### Other static hosts

`npm run build` produces a plain static site in `dist/`, so any static host works:

- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Vercel / Cloudflare Pages**: framework preset *Astro* (or the same build command and output directory).

## Add a language

1. Copy `src/i18n/en.json` to `src/i18n/<lang>.json`, translate the values and set `lang`, `langLabel`, `otherLang`, `otherLangLabel`.
2. Copy `src/pages/en/` to `src/pages/<lang>/` and change the JSON import to `<lang>.json`.
3. Add `<lang>` to `locales` in `astro.config.ts`.
4. The header language switch toggles between two languages (`otherLang`); with three or more, turn `src/components/LanguageSwitch.astro` into a list.

## Credits

Visual style based on the Astrolify SaaS starter by Denis Ventura. MIT License.
