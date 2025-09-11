<script setup lang="ts">
useSeoMeta({
  title: "Blog",
});

import dayjs from "dayjs";

const { data: posts, status } = await useAsyncData(
  'blog-posts',
  () => {
    return queryCollection("blog")
      .select("title", "summary", "date", "tags", "path")
      .order("date", "DESC")
      .all();
  }
);

const blogpostsByYear = computed(() => {
  if (!posts.value) return {};
  
  return posts.value.reduce(
    (acc: Record<number, Array<any>>, article) => {
      const year = dayjs(article.date).year();
      acc[year] = acc[year] || [];
      acc[year].push(article);
      return acc;
    },
    {}
  );
});
const years = computed(() =>
  blogpostsByYear.value ? Object.keys(blogpostsByYear.value).reverse() : []
);

</script>

<template>
  <PageTitle title="Blog" />
  <LoadingIcon v-if="status === 'pending'" />
  <div v-else v-for="year of years" :key="year" class="blog-list md:grid grid-cols-12 gap-x-4 items-baseline" >
    <div class="col-span-1 text-xl font-semibold md:font-normal mb-2 md:text-sm">
      {{ year }}
    </div>
    <div class="col-span-11">
      <div v-if="blogpostsByYear" v-for="post of blogpostsByYear[Number(year)]" :key="post.path" class="mb-6">
        <NuxtLinkLocale :to="post.path">
          <MDC :value="post.title" class="text-primary hover:text-accent" />
        </NuxtLinkLocale>

        <div v-if="post.summary" class="text-base">{{ post.summary }}</div>
        <div class="flex mt-2">
          <PubTag v-for="tag in post.tags">
            {{ tag }}
          </PubTag>
        </div>
      </div>
    </div>
  </div>
</template>
