<script setup lang="ts">
// Load Data
const { data: pubs } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '>', '2000') // Separate Forthcoming
  .order("year", "DESC")
  .all()
);

const { data: forthcoming } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '<', '2000') // Separate Forthcoming
  .all()
);

</script>

<template>
  <PageTitle :title="$t('pubs.title')" />

  <Article v-for="(pub, index) in forthcoming" :pub="pub" :key="`pub-${index}-f`" class="mb-2" />

  <Article v-for="(pub, index) in pubs" :pub="pub" :key="`pub-${index}-p`" class="mb-2" />
    
</template>
