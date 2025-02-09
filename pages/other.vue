<script setup lang="ts">
const { locale } = useI18n();

const { data: content } = await useAsyncData(() =>
  queryCollection("otherProjects").where("lang", "=", locale.value).first()
);
</script>

<template>
  <PageTitle :title="$t('other.title')" />

    <ContentRenderer
      v-if="content"
      :value="content"
      class="md-content"
    />

</template>