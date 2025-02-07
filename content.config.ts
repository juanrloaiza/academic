import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    publications: defineCollection({
      type: 'data',
      source: 'publications/*.yml',
      schema: z.object({
        authors: z.string(),
        title: z.string(),
        year: z.number(),
        journal: z.string().optional(),
        volume: z.number().optional(),
        issue: z.number().optional(),
        booktitle: z.string().optional(),
        doi: z.string().optional(),
        openaccess: z.boolean().optional()
      })
    })
  }
})