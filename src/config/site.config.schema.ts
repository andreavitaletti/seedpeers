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
})

export type SiteConfigInput = z.input<typeof siteConfigSchema>
