import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const about = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/about" }),
    schema: z.object({
        photo: z.string(),
        lang: z.string(),
        areas: z.object({
            competence: z.array(z.string()),
            specialization: z.array(z.string()),
        }),
    }),
});

const cv = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/data/cv" }),
    schema: z.object({
        cvtype: z.string(),
        role: z.object({
            en: z.string(),
            es: z.string(),
        }),
        institution: z.string(),
        start_year: z.number(),
        end_year: z.number().default(0),
        faculty: z.string().optional(),
        info: z.string().optional(),
        thesis: z
            .object({
                title: z.string(),
                supervisors: z.array(z.string()).optional(),
                examiners: z.array(z.string()).optional(),
                qualification: z.string().optional(),
            })
            .optional(),
        city: z.string().optional(),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { about, cv };