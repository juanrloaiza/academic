import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    publications: defineCollection({
      type: 'data',
      source: 'publications/*.yml',
      schema: z.object({
        doi: z.string(),
        title: z.string()
      })
    })
  }
})