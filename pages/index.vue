<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('home')
})
</script>

<template>
  <div class="min-h-[60vh] lg:min-h-[80vh] flex items-center">
    <div class="lg:h-60vh md:my-6 md:grid md:grid-cols-8 lg:grid-cols-12 grid-flow-dense gap-4">
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-3 row-span-1 lg:col-span-3 lg:row-span-1" target="about"></LazyBentoBox>
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-5 row-span-1 lg:col-span-4 lg:row-span-1" target="cv"></LazyBentoBox>
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-4 row-span-1 lg:col-span-5 lg:row-span-1" target="pubs"></LazyBentoBox>
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-4 row-span-1 lg:col-span-4 lg:row-span-1" target="blog"></LazyBentoBox>
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-3 row-span-1 lg:col-span-4 lg:row-span-1" target="teaching"></LazyBentoBox>
      <LazyBentoBox hydrate-on-interaction="mouseover"
        class="col-span-5 row-span-1 lg:col-span-4 lg:row-span-1" target="other"></LazyBentoBox>
    </div>
  </div>
</template>
