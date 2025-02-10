<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div>
    <div class="max-w-6xl mx-auto pt-6">
      <div class="flex justify-between items-center min-h-[5rem]">
        <NuxtLinkLocale to="/" class="flex items-center">
          <h1 class="inline text-4xl font-extrabold ">{{ config.title }}</h1>
          <span class="text-2xl mx-4 text-gray-600"> · </span>
          <span class="text-2xl text-gray-600 font-heading mt-1">Académico</span>
        </NuxtLinkLocale>
        <div class="flex items-center">
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