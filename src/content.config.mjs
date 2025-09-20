import { defineCollection, z } from 'astro:content';
import { articlesSchema, bookChaptersSchema, booksSchema } from "./data/publications/publicationSchemas"

import { glob } from 'astro/loaders';

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

const articles = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/data/publications/articles" }),
    schema: articlesSchema,
});
const comments = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/data/publications/comments" }),
    schema: articlesSchema,
});
const bookChapters = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/data/publications/bookChapters" }),
    schema: bookChaptersSchema,
});
const books = defineCollection({
    loader: glob({ pattern: "**/*.yml", base: "./src/data/publications/books" }),
    schema: booksSchema,
});

const other = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/data/others" }),
    schema: z.object({
        lang: z.string()
    })
});

const courses = defineCollection({
    loader: glob({ pattern: "*.yml", base: "./src/data/courses" }),
    schema: z.object({
        name: z.object({ en: z.string(), es: z.string() }),
        level: z.enum(["pregrado", "master", "phd"]),
        description: z.string(),
        syllabi: z.array(z.object({
            semester: z.string(),
            route: z.string()
        })).optional()
    })
});

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        date: z.date(),
        summary: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional()
    })
});

export const collections = {
    about,
    cv,
    articles, comments, bookChapters, books,
    courses,
    other,
    blog
};