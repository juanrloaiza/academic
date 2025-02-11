<script setup lang="ts">
const config = useAppConfig();

useSeoMeta({
  title: 'Juan R. Loaiza',
  description: "Académico en Filosofía · Professor of Philosophy",
  ogDescription: "Académico en Filosofía · Professor of Philosophy",
  author: "Juan R. Loaiza"
})

</script>

<template>
  <div>
    <div class="max-w-6xl mx-auto pt-6 px-6">
      <div class="block text-center md:flex md:justify-between items-center min-h-[5rem]">
        <div>
          <NuxtLinkLocale to="/" class="md:flex items-center">
            <h1 class="block mb-1 md:inline md:m-0 text-4xl font-extrabold hover:text-primary">{{ config.title }}</h1>
            <span class="hidden md:inline text-2xl mx-4 text-gray-600"> · </span>
            <span class="text-2xl text-gray-600 font-heading mt-1">{{ $t('academic')}}</span>
          </NuxtLinkLocale>
        </div>
        <div class="flex items-center justify-center">
          <SocialMediaButtons />
          <LangSwitcher />
        </div>
      </div>
      <div class="mt-6 text-lg">
        <slot />
      </div>
    </div>
  </div>
</template>
