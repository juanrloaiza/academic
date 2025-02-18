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

const isAbstractOpen = ref(false);

const openAbstract = () => {
  isAbstractOpen.value = !isAbstractOpen.value;
};
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
      <div
        v-if="isAbstractOpen"
        class="text-base my-3 max-w-[75ch] pl-5 border-l-2"
      >
        {{ abstract }}
      </div>
    </div>
    <AbstractOpenButton
      v-if="abstract"
      @click="openAbstract"
      :isAbstractOpen="isAbstractOpen"
    />
  </div>
</template>
