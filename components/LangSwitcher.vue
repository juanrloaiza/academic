<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale)"
  class="px-3 py-1 border border-black my-5 hover:border-4">
    {{ locale.toUpperCase() }}
  </NuxtLink>
</template>
