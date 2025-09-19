import { z } from 'astro:content';

const basePublicationSchema = z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number().or(z.string()),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    openaccess: z.boolean().optional(),
    abstract: z.string().optional(),
});

export const articlesSchema = basePublicationSchema.extend({
    journal: z.string(),
    volume: z.union([z.string(), z.number()]).optional(),
    issue: z.union([z.string(), z.number()]).optional(),
})

export const bookChaptersSchema = basePublicationSchema.extend({
    booktitle: z.string(),
    editors: z.string(),
    publisher: z.string().optional(),
    isbn: z.string().or(z.number()).optional(),
})

export const booksSchema = basePublicationSchema.extend({
    publisher: z.string().optional(),
    isbn: z.string().optional(),
})
