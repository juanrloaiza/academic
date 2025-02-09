import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    publications: defineCollection({
      type: "data",
      source: "publications/*.yml",
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
        pages: z
          .string()
          .regex(/^\d+\-\d+/)
          .optional(),
        abstract: z.string().optional(),
      }),
    }),
    about: defineCollection({
      type: "page",
      source: "about/*.md",
      schema: z.object({
        photo: z.string(),
        lang: z.string(),
        areas: z.object({
          competence: z.array(z.string()),
          specialization: z.array(z.string()),
        }),
      }),
    }),
    cv: defineCollection({
      type: "data",
      source: "cv/**/*.yml",
      schema: z.object({
        type: z.string(),
        startYear: z.number(),
        endYear: z.number().optional(),
        institution: z.string(),
        faculty: z.string().optional(),
        role: z.object({
          en: z.string(),
          es: z.string(),
        }),
        info: z.string().optional(),
        thesis: z.object({
          title: z.string(),
          supervisors: z.array(z.string()).optional(),
          examiners: z.array(z.string()).optional(),
          qualification: z.string().optional(),
        }),
        city: z.string().optional(),
      }),
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        summary: z.string().optional()
      })
    }),
    courses: defineCollection({
      type: 'data',
      source: 'courses/**/*.md',
      schema: z.object({
        name: z.string(),
        level: z.string(),
        description: z.string().optional(),
        syllabus: z.string().optional()
      })
    })
  },
});
