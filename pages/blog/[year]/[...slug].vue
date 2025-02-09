<script setup lang="ts">
import dayjs from 'dayjs';

const { slug, year } = useRoute().params;

const { data: post } = await useAsyncData(() =>
	queryCollection('blog').path(`/blog/${year}/${slug}`).first()
);

const formatDate = (dateString: string) => dayjs(dateString).format('YYYY.MM.DD');
</script>

<template>
	<div v-if="post" class="mx-auto max-w-[60ch]">
		<h2 class="font-bold text-3xl mb-5">{{ post.title }}</h2>
		<div class="flex mb-10">
		<div class="text-base mr-4">{{ formatDate(post.date) }}</div>
			<div v-for="tag in post.tags" class="text-xs mr-2 bg-gray-200 px-2 py-1 rounded-sm">{{ tag }}</div>
		</div>
		<ContentRenderer v-if="post" :value="post" class="blog-content" />
	</div>
</template>
