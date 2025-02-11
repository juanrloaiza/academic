<script setup lang="ts">
const { locale, t } = useI18n();

const { data: content } = await useAsyncData(() =>
  queryCollection("about").where("lang", "=", locale.value).first()
);

useSeoMeta({
  title: t('about.title')
})
</script>

<template>
  <PageTitle :title="$t('about.title')" />

  <div class="md:grid md:grid-cols-4 md:gap-x-7 lg:gap-x-15 gap-y-6">
    <img class="mx-auto w-2/3 my-6 md:my-0 md:w-full" src="assets/academic.png" />

    <ContentRenderer
      v-if="content"
      :value="content"
      class="col-span-3 md-content"
    />
    <div class="md:flex md:gap-x-6 col-span-3 col-start-2 lg:justify-around">
      <div class="my-6 md:my-0 md:w-1/2 lg:w-1/3 lg:my-6" v-for="(areaType, key) in content?.areas">
        <h4 class="font-bold">{{ $t(key) }}</h4>
        <ul class="list-disc pl-4">
          <li v-for="area in areaType">{{ area }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>