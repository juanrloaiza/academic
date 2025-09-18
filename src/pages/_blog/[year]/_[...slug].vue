<script setup lang="ts">
const localePath = useLocalePath();
import dayjs from "dayjs";

const route = useRoute();
const { slug, year } = route.params;

console.log('Route params:', { year, slug, fullPath: route.path });

// Use a unique key for each post to prevent caching issues during static generation
const { status, data: post } = await useAsyncData(`blog-${year}-${slug}`, async () => {
  console.log(`Querying for: /blog/${year}/${slug}`);
  
  const result = await queryCollection("blog")
    .path(`/blog/${year}/${slug}`)
    .first();

  // If not found with the exact path, try to find it in all posts
  if (!result) {
    console.log('Exact path not found, searching in all posts...');
    const allPosts = await queryCollection("blog").all();
    console.log('All available posts:', allPosts.map(p => ({ title: p.title, path: p.path })));
    
    // Try to find by matching path components
    const foundPost = allPosts.find(p => 
      p.path === `/blog/${year}/${slug}` ||
      p.path === `blog/${year}/${slug}` ||
      p.path === `/${year}/${slug}` ||
      p.path.includes(`${year}/${slug}`)
    );
    
    if (foundPost) {
      console.log('Found post by alternative matching:', foundPost.title);
    }
    
    return foundPost;
  }
  
  return result;
});

const formatDate = (dateString: string) =>
  dayjs(dateString).format("YYYY.MM.DD");

// Handle 404
if (!post.value && status.value !== 'pending') {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  });
}

const ogPostTitle = post.value?.title || "Juan R. Loaiza";
const ogSummary = post.value?.summary;

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
      <Icon name="material-symbols:arrow-back-rounded" class="align-middle mr-3" />
      {{ $t("backblog") }}
    </NuxtLink>
    
    <h2 class="font-bold text-3xl mb-5">{{ post.title }}</h2>
    
    <div class="flex mb-10 items-baseline">
      <div class="text-base mr-4">{{ formatDate(post.date) }}</div>
      <PubTag v-for="tag in post.tags" :key="tag">
        {{ tag }}
      </PubTag>
    </div>
    
    <ContentRenderer v-if="post" :value="post" class="blog-content" />
  </div>
  
  <div v-else class="mx-auto max-w-[60ch] text-center py-12">
    <h1 class="text-2xl font-bold mb-4">Post Not Found</h1>
    <p class="text-gray-600 mb-4">
      Could not find post: {{ year }}/{{ slug }}
    </p>
    <NuxtLink :to="localePath('/blog')" class="text-primary hover:text-accent">
      ← Back to Blog
    </NuxtLink>
  </div>
</template>