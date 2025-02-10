<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div>
    <div class="max-w-6xl mx-auto pt-6">
      <div class="flex justify-between items-center min-h-[5rem]">
        <NuxtLinkLocale to="/">
          <h1 class="text-4xl font-extrabold">{{ config.title }}</h1>
        </NuxtLinkLocale>
        <div class="flex items-center">
          <SocialMediaButtons />
          <LangSwitcher />
        </div>
      </div>
      <div class="mt-6 text-xl">
        <slot />
      </div>
    </div>
  </div>
</template>