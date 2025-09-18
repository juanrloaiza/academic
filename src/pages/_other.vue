<script setup lang="ts">
const { locale, t } = useI18n();

useSeoMeta({
  title: t('other.title')
})

const { data: content } = await useAsyncData(() =>
  queryCollection("otherProjects").where("lang", "=", locale.value).first()
);
</script>

<template>
  <PageTitle :title="$t('other.title')" />

    <LazyContentRenderer
    hydrate-never
      v-if="content"
      :value="content"
      class="md-content"
    />

</template>