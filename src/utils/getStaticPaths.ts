import type { CollectionEntry } from "astro:content";

import type { LanguageKey } from "../i18n/ui";

import { getCollection } from "astro:content";

import { languages } from "../i18n/ui";

export async function defaultStaticPathsFunction() {
  return languages.map((lang) => {
    return { params: { lang } };
  });
}

export const getBlogStaticPaths = async () => {
  type BlogCollectionSchema = CollectionEntry<"blog">;

  type BlogPaths = {
    params: Record<string, string>;
    props: {
      entry: BlogCollectionSchema;
      lang: LanguageKey;
    };
  };

  const blogEntries = await getCollection("blog");

  const paths: BlogPaths[] = [];

  languages.map((lang) => {
    blogEntries.map((entry) => {
      const year = new Date(entry.data.date).getFullYear();

      paths.push({
        params: {
          lang,
          year: year.toString(),
          slug: entry.data.slug,
        },
        props: {
          entry,
          lang,
        },
      });
    });
  });

  return paths;
};
