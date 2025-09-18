// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
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

// 4. Export a single `collections` object to register your collection(s)
export const collections = { about };