<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)"
    class="px-3 py-1 border-1 border-black dark:border-gray-200 my-5 hover:border-2 rounded-sm">
    <span class="text-black dark:text-gray-200">{{
      locale.code
      }}</span>
  </NuxtLink>
</template>
