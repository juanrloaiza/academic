<script setup lang="ts">
useHead({
  script: [{ src: "https://kit.fontawesome.com/56ed2b6624.js" }],
});
</script>

<template>
  <div class="mx-4 justify-self-end">
    <NuxtLink to="https://hcommons.social/@juanrloaiza" class="mx-2"
      ><i
        class="fa-brands fa-mastodon text-2xl text-gray-800 hover:text-primary"
      ></i
    ></NuxtLink>
    <NuxtLink
      to="https://www.researchgate.net/profile/Juan_Loaiza5"
      class="mx-2 text-2xl text-gray-800 hover:text-primary"
      ><i
        class="ai ai-researchgate text-2xl text-gray-800 hover:text-primary"
      ></i
    ></NuxtLink>
    <NuxtLink
      to="https://orcid.org/0000-0003-0570-3832"
      class="mx-2 text-2xl text-gray-800 hover:text-primary"
      ><i class="ai ai-orcid text-2xl text-gray-800 hover:text-primary"></i
    ></NuxtLink>
    <NuxtLink
      to="https://www.instagram.com/loaiza.filosofia"
      class="mx-2 text-2xl text-gray-800 hover:text-primary"
      ><i
        class="fa-brands fa-instagram text-2xl text-gray-800 hover:text-primary"
      ></i
    ></NuxtLink>
    <NuxtLink
      to="https://github.com/juanrloaiza"
      class="mx-2 text-2xl text-gray-800 hover:text-primary"
      ><i
        class="fa-brands fa-github text-2xl text-gray-800 hover:text-primary"
      ></i
    ></NuxtLink>
  </div>
</template>
