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
  <div v-for="year of years" class="blog-list grid grid-cols-12 gap-x-4 items-baseline">
    <div class="col-span-1 text-sm">{{ year }}</div>
    <div class="col-span-11">
      <div
        v-if="blogpostsByYear"
        v-for="post of blogpostsByYear[Number(year)]"
        class="mb-5"
      >
        <NuxtLink :to="post.path"><MDC :value="post.title" /></NuxtLink>

        <div v-if="post.summary" class="text-base">{{ post.summary }}</div>
        <div class="flex">
          <div
            v-for="tag in post.tags"
            class="text-xs bg-gray-200 align-baseline mr-3 mt-2 py-0.5 px-1.5 rounded-sm"
          >
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
