<script setup lang="ts">
const config = useAppConfig();

useSeoMeta({
  title: 'Juan R. Loaiza',
  description: "Académico en Filosofía · Professor of Philosophy",
  ogDescription: "Académico en Filosofía · Professor of Philosophy",
  ogSiteName: 'Juan R. Loaiza',
  author: "Juan R. Loaiza"
})

</script>

<template>
  <Body class="bg-background dark:bg-neutral-800 dark:text-gray-100">
    <div class="max-w-6xl mx-auto pt-6 px-6">
      <div class="block text-center md:flex md:justify-between items-center min-h-[5rem]">
        <div>
          <NuxtLinkLocale to="/" class="md:flex items-center">
            <h1 class="block mb-1 md:inline md:m-0 text-4xl font-extrabold hover:text-primary">{{ config.title }}</h1>
            <span class="text-2xl text-gray-600 dark:text-gray-400">
            <span class="hidden md:inline mx-4"> · </span>
            <span class="font-heading mt-1">{{ $t('academic')}}</span>
          </span>
          </NuxtLinkLocale>
        </div>
        <div class="flex items-center justify-center">
          <SocialMediaButtons />
          <LangSwitcher />
          <DarkThemeToggle />
        </div>
      </div>
      <div class="mt-6 text-lg">
        <slot />
      </div>
    </div>
  </Body>
</template>
