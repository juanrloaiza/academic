<script setup lang="ts">
const config = useAppConfig();
const { locale } = useI18n();

const { data: content } = await useAsyncData(() =>
  queryCollection("about").where("lang", "=", locale.value).first()
);
</script>

<template>
  <PageTitle :title="$t('about.title')" />

  <div class="md:grid grid-cols-4 gap-x-15 gap-y-6">
    <img class="mx-auto w-2/3 my-6 md:w-full" src="https://www.juanrloaiza.com/images/academic_loaiza.png" />

    <ContentRenderer
      v-if="content"
      :value="content"
      class="col-span-3 md-content"
    />
    <div class="md:flex col-span-3 col-start-2 justify-around">
      <div class="my-6 md:my-0 md:w-1/3" v-for="(areaType, key) in content?.areas">
        <h4 class="font-bold">{{ $t(key) }}</h4>
        <ul class="list-disc pl-4">
          <li v-for="area in areaType">{{ area }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>