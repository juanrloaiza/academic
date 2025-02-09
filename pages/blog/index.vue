<script setup lang="ts">
import dayjs from "dayjs";

const { data: blogpostsByYear } = await useAsyncData(
  () => {
    return queryCollection("blog")
      .select("title", "summary", "date", "tags", "path")
      .order("date", "DESC")
      .all();
  },
  {
    transform: (posts) => {
      return posts.reduce(
        (acc: Record<number, Array<typeof article>>, article) => {
          const year = dayjs(article.date).year();
          acc[year] = acc[year] || [];
          acc[year].push(article);
          return acc;
        },
        {}
      );
    },
  }
);

let years: string[];
if (blogpostsByYear.value) {
  years = Object.keys(blogpostsByYear.value).reverse();
}
</script>

<template>
  <PageTitle title="Blog" />
  <div v-for="year of years" class="blog-list grid grid-cols-12 gap-x-4">
    <div class="col-span-1">{{ year }}</div>
    <div class="col-span-11">
      <div
        v-if="blogpostsByYear"
        v-for="post of blogpostsByYear[Number(year)]"
        class="mb-3"
      >
        <NuxtLink :to="post.path"><MDC :value="post.title" /></NuxtLink>
        <div v-if="post.summary" class="text-base">{{ post.summary }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.blog-list {
  a {
    color: var(--color-blue-800);
  }
  a:hover {
    color: var(--color-yellow-700);
  }
}
</style>
