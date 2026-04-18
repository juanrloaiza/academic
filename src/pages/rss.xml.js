import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { marked } from "marked";
import sanitizeHTML from "sanitize-html";

export async function GET(context) {
  const blogPosts = (await getCollection("blog")).filter((blogPost) => {
    return (
      blogPost.data.date.getFullYear() > new Date().getFullYear() - 2 &&
      blogPost.data.draft != true
    );
  });

  return rss({
    title: "Juan R. Loaiza - Blog",
    description:
      "Blog de Juan R. Loaiza, profesor asociado de la Universidad Alberto Hurtado (Chile).",
    site: context.site,
    items: blogPosts.map((blogPost) => ({
      title: blogPost.data.title,
      author: "Juan R. Loaiza",
      description: blogPost.data.summary,
      link: getRelativeLocaleUrl(
        "es",
        `blog/${blogPost.data.date.getFullYear()}/${blogPost.id}`,
      ),
      content: sanitizeHTML(marked.parse(blogPost.body), {
        allowedTags: sanitizeHTML.defaults.allowedTags.concat(["img"]),
      }),
    })),
    customData: `<language>es-CO</language>`,
  });
}
