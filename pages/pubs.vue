<script setup lang="ts">
// Load Data
const { data: pubs } = await useAsyncData(() =>
  queryCollection("publications").order("year", "DESC").all()
);


</script>

<template>
  <PageTitle :title="$t('pubs.title')" />
  <Article v-for="(pub, index) in pubs" :pub="pub" :key="index" class="mb-2" />
    
</template>
