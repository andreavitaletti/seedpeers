import { z } from 'zod'

/** Validated slice of config; extra keys are preserved via parse + `as typeof siteConfigRaw`. */
export const siteConfigSchema = z.looseObject({
  brand: z.object({
    name: z.string().min(1),
    tagline: z.string(),
    logo: z.string(),
  }),
  nav: z.object({
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
    cta: z.object({
      label: z.string(),
      href: z.string(),
    }),
  }),
  seo: z.object({
    siteUrl: z.url(),
    defaultOgImage: z.string().optional(),
    twitterHandle: z.string().optional(),
    lang: z.string().min(2),
  }),
  forms: z
    .object({
      contactAction: z.string().optional(),
      newsletterAction: z.string().optional(),
      contactNetlify: z.boolean().optional(),
      newsletterNetlify: z.boolean().optional(),
      googleForm: z
        .object({
          actionUrl: z.string().url(),
          fields: z.object({
            firstName: z.string().optional(),
            lastName: z.string().optional(),
            email: z.string().optional(),
            diy: z.string().optional(),
            pay: z.string().optional(),
            location: z.string().optional(),
            message: z.string().optional(),
          }),
        })
        .optional(),
    })
    .optional(),
  greenhouse: z
    .object({
      badge: z.string().optional(),
      title: z.string(),
      description: z.string(),
      image: z.any(),
    })
    .optional(),
  news: z
    .object({
      badge: z.string().optional(),
      title: z.string(),
      description: z.string().optional(),
      items: z.array(
        z.object({
          date: z.string().optional(),
          title: z.string(),
          description: z.string(),
          href: z.string(),
          ctaLabel: z.string().optional(),
        }),
      ),
    })
    .optional(),
  locales: z
    .object({
      en: z
        .object({
          brand: z
            .object({
              tagline: z.string(),
            })
            .optional(),
          nav: z
            .object({
              links: z.array(
                z.object({
                  label: z.string(),
                  href: z.string(),
                }),
              ),
              cta: z.object({
                label: z.string(),
                href: z.string(),
              }),
            })
            .optional(),
          seo: z
            .object({
              lang: z.string().min(2),
            })
            .optional(),
          greenhouse: z
            .object({
              badge: z.string().optional(),
              title: z.string(),
              description: z.string(),
            })
            .optional(),
          hero: z
            .object({
              badge: z.string().optional(),
              title: z.string(),
              description: z.string(),
              primaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
              secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
            })
            .optional(),
          howItWorks: z
            .object({
              badge: z.string().optional(),
              title: z.string(),
              description: z.string(),
              steps: z.array(
                z.object({
                  number: z.number(),
                  title: z.string(),
                  description: z.string(),
                }),
              ),
            })
            .optional(),
          news: z
            .object({
              badge: z.string().optional(),
              title: z.string(),
              description: z.string().optional(),
              items: z.array(
                z.object({
                  date: z.string().optional(),
                  title: z.string(),
                  description: z.string(),
                  href: z.string(),
                  ctaLabel: z.string().optional(),
                }),
              ),
            })
            .optional(),
          contact: z
            .object({
              badge: z.string().optional(),
              title: z.string(),
              description: z.string(),
              diyLabel: z.string().optional(),
              payLabel: z.string().optional(),
              locationLabel: z.string().optional(),
              channels: z.array(
                z.object({
                  icon: z.string(),
                  label: z.string(),
                  href: z.string(),
                  value: z.string(),
                }),
              ),
              topics: z.array(
                z.object({
                  label: z.string(),
                  value: z.string(),
                }),
              ),
              cta: z.string(),
            })
            .optional(),
          footer: z
            .object({
              description: z.string(),
            })
            .optional(),
        })
        .optional(),
    })
    .optional(),
})

export type SiteConfigInput = z.input<typeof siteConfigSchema>
