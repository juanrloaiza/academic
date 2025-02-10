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
        <strong>{{ pub.title }}</strong
        >.<i
          v-if="pub.openaccess"
          class="mx-2 text-2xl text-orange-600 ai ai-open-access"
        ></i
        ><br />
        {{ pub.authors }} ({{ pub.year }}). En: <em>{{ pub.booktitle }}</em>
        <span v-if="pub.pages"> (pp. {{ pub.pages }})</span>. 
        <span v-if="pub.publisher"> {{ pub.publisher }}. </span>
        <span v-if="pub.isbn">ISBN: {{ pub.isbn }}. </span>
        <span v-if="pub.doi">doi: {{ pub.doi }}</span>
        <span v-else="pub.url"> {{ pub.url }}</span>
      </a>
      <div
        v-if="isAbstractOpen"
        class="text-base my-3 max-w-[75ch] pl-5 border-l-2"
      >
        {{ pub.abstract }}
      </div>
    </div>
    <button
      v-if="pub.abstract"
      @click="openAbstract"
      class="mx-4"
      :class="isAbstractOpen ? 'self-start' : ''"
    >
      <Icon
        v-if="isAbstractOpen"
        name="material-symbols:check-indeterminate-small"
        class="my-4"
      />
      <Icon v-else name="material-symbols:add" />
    </button>
  </div>
</template>
