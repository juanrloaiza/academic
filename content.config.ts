import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    publications: defineCollection({
      type: 'data',
      source: 'publications/*.yml',
      schema: z.object({
        authors: z.string(),
        title: z.string(),
        year: z.number().or(z.string()),
        journal: z.string().optional(),
        volume: z.number().optional(),
        issue: z.number().optional(),
        booktitle: z.string().optional(),
        doi: z.string().optional(),
        openaccess: z.boolean().optional(),
        url: z.string().url().optional(),
        pages: z.string().regex(/^\d+\-\d+/).optional(),
        abstract: z.string().optional()
      })
    }),
    about: defineCollection({
      type: 'page',
      source: 'about/*.md',
      schema: z.object({
        photo: z.string(),
        lang: z.string(),
        areas: z.object({
          competence: z.array(z.string()),
          specialization: z.array(z.string())
        })
        //body: z.string(), // See https://github.com/nuxt/content/issues/3052#issuecomment-2619468128
      })
    })
  }
})