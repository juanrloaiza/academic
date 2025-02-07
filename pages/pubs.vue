<script setup lang="ts">
// Load Data
const { data: pubs } = await useAsyncData(() =>
  queryCollection("publications").all()
);
</script>

<template>
  <PageTitle :title="$t('pubs.title')" />
  <div v-for="pub in pubs" class="mb-2">
    <a :href="pub.doi ? `https://doi.org/${pub.doi}` : pub.url ? pub.url : '#'">
      {{ pub.authors }} ({{ pub.year }}). <strong>{{ pub.title }}</strong>.
      <em>{{ pub.journal }}</em>
      <span v-if="pub.volume">
        <em>, {{ pub.volume }}</em>({{ pub.issue }})</span><span v-if="pub.pages">, {{ pub.pages }}</span>.
      <span v-if="pub.doi">doi: {{ pub.doi }}</span>
      <span v-else="pub.url">{{ pub.url }}</span>
    </a>
  </div>
</template>
