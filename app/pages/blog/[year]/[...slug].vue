<script setup lang="ts">
const localePath = useLocalePath();

import dayjs from "dayjs";

const { slug, year } = useRoute().params;

const { status, data: post } = useLazyAsyncData(() =>
  queryCollection("blog").path(`/blog/${year}/${slug}`).first()
);

const formatDate = (dateString: string) =>
  dayjs(dateString).format("YYYY.MM.DD");


const ogPostTitle = post.value?.title || "Juan R. Loaiza"
const ogSummary = post.value?.summary

useSeoMeta({
  title: ogPostTitle,
  ogTitle: ogPostTitle,
  description: ogSummary,
  ogDescription: ogSummary
});
</script>

<template>

  <div v-if="status === 'pending'" class="flex justify-center">
    <LoadingIcon />
  </div>


  <div v-else-if="post" class="mx-auto max-w-[60ch]">
    <NuxtLink :to="localePath('/blog')" class="block my-4 text-gray-500 text-sm">
      <Icon name="material-symbols:arrow-back-rounded" class="align-middle mr-3" />{{ $t("backblog") }}
    </NuxtLink>

    <h2 class="font-bold text-3xl mb-5">{{ post.title }}</h2>
    <div class="flex mb-10 items-baseline">
      <div class="text-base mr-4">{{ formatDate(post.date) }}</div>
      <PubTag v-for="tag in post.tags">
        {{ tag }}
      </PubTag>
    </div>
    <ContentRenderer v-if="post" :value="post" class="blog-content" />

  </div>
</template>
