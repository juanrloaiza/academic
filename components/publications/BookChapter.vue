<script setup lang="ts">
defineProps(["pub"]);

const isAbstractOpen = ref(false);

const openAbstract = () => {
  isAbstractOpen.value = !isAbstractOpen.value;
};
</script>

<template>
  <div class="flex justify-between">
    <div>
      <a
        :href="pub.doi ? `https://doi.org/${pub.doi}` : pub.url ? pub.url : '#'"
      >
        <PubTitle :title="pub.title" :openaccess="pub.openaccess" />
      </a>

      <div class="text-base">{{ pub.authors }} ({{ pub.year }}).</div>
      <div class="text-sm mt-0.5">
        En: <em>{{ pub.booktitle }}</em>
        <span v-if="pub.pages"> (pp. {{ pub.pages }})</span>.
        <span v-if="pub.publisher"> {{ pub.publisher }}. </span>
        <span v-if="pub.isbn">ISBN: {{ pub.isbn }}. </span>
        <a v-if="pub.doi" :href='`https://doi.org/${pub.doi}`'>doi: {{ pub.doi }}</a>
        <a v-else="pub.url" :href="pub.url"> {{ pub.url }}</a>
      </div>
      <div
        v-if="isAbstractOpen"
        class="text-base my-3 max-w-[75ch] pl-5 border-l-2"
      >
        {{ pub.abstract }}
      </div>
    </div>
    <AbstractOpenButton
      v-if="pub.abstract"
      @click="openAbstract"
      :isAbstractOpen="isAbstractOpen"
    />
  </div>
</template>
