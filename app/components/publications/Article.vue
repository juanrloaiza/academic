<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  authors: String,
  year: [String, Number],
  journal: String,
  volume: [String, Number],
  issue: [String, Number],
  pages: String,
  abstract: String,
  doi: String,
  url: String,
  openaccess: Boolean,
});
</script>

<template>
  <div class="flex justify-between">
    <div>
      <a :href="doi ? `https://doi.org/${doi}` : url ? url : '#'">
        <PubTitle :title="title" :openaccess="openaccess" />
      </a>
      <div class="text-base">{{ authors }} ({{ year }}).</div>
      <div class="text-sm mt-0.5">
        <em>{{ journal }}</em>
        <span v-if="volume">
          <em>, {{ volume }}</em
          >({{ issue }})</span
        ><span v-if="pages">, {{ pages }}</span
        >.
        <a v-if="doi" :href="`https://doi.org/${doi}`">doi: {{ doi }}</a>
        <a v-else="url" :href="url"> {{ url }}</a>
      </div>
    </div>

  </div>
</template>
