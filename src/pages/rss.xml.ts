import type { APIContext } from "astro";

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { marked } from "marked";
import sanitizeHTML from "sanitize-html";

interface RSSBlogPost {
  title: string;
  author: string;
  description?: string;
  link: string;
  content: string;
}

export async function GET(context: APIContext) {
  if (!context.site) return;

  const blogEntries = await getCollection("blog");

  const selectedBlogPosts: RSSBlogPost[] = blogEntries
    .filter((blogPost) => {
      const blogPostYear = new Date(blogPost.data.date).getFullYear();
      return (
        blogPostYear > new Date().getFullYear() - 2 &&
        blogPost.data.draft != true
      );
    })
    .map((blogPost) => {
      const blogPostYear = new Date(blogPost.data.date).getFullYear();

      return {
        title: blogPost.data.title,
        author: "Juan R. Loaiza",
        description: blogPost.data.summary,
        link: getRelativeLocaleUrl("es", `blog/${blogPostYear}/${blogPost.id}`),
        content: sanitizeHTML(
          marked.parse(blogPost.body || "", { async: false }),
          {
            allowedTags: sanitizeHTML.defaults.allowedTags.concat(["img"]),
          },
        ),
      };
    });

  return rss({
    title: "Juan R. Loaiza - Blog",
    description:
      "Blog de Juan R. Loaiza, profesor asociado de la Universidad Alberto Hurtado (Chile).",
    site: context.site,
    items: selectedBlogPosts,
    customData: `<language>es-CO</language>`,
  });
}
