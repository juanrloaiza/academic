<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale)"
  class="px-3 py-1 border-1 border-black my-5 hover:border-2 rounded-sm">
    <span class="text-black">{{ locale.toUpperCase() }}</span>
  </NuxtLink>
</template>
