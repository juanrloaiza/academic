import { getCollection } from "astro:content";
import { z } from "astro/zod";
import { sortPublications } from "./sortPublications";
import { keyof } from "astro:schema";

// Schema definitions for each publication type
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
});

export const bookChaptersSchema = basePublicationSchema.extend({
  booktitle: z.string(),
  editors: z.string(),
  publisher: z.string().optional(),
  isbn: z.string().or(z.number()).optional(),
});

export const booksSchema = basePublicationSchema.extend({
  publisher: z.string().optional(),
  isbn: z.string().optional(),
});

// Types to enforce data according to the schemas
export type BasePublicationData = z.infer<typeof basePublicationSchema>;
export type ArticleData = z.infer<typeof articlesSchema>;
export type BookChapterData = z.infer<typeof bookChaptersSchema>;
export type BookData = z.infer<typeof booksSchema>;

// Function to get all publications
export async function getPublicationCollections() {
  const articles = (await getCollection("articles")).sort(sortPublications);
  const comments = (await getCollection("comments")).sort(sortPublications);
  const bookChapters = (await getCollection("bookChapters")).sort(
    sortPublications,
  );
  const books = (await getCollection("books")).sort(sortPublications);

  return { articles, comments, bookChapters, books };
}
