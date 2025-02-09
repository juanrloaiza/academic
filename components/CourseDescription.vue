<script setup lang="ts">
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

defineProps({
  name: String,
  level: String,
  description: String
});

const isAbstractOpen = ref(false);

const openAbstract = () => {
  isAbstractOpen.value = !isAbstractOpen.value;
};
</script>

<template>
  <div class="mb-4">
      
      <div class="flex">
        <h4 class="text-xl font-bold">{{ name }}</h4>
      
      <button
        @click="openAbstract"
        class="mx-4"
        :class="isAbstractOpen ? 'self-start' : ''"
      >
        <Icon
          v-if="isAbstractOpen"
          name="material-symbols:check-indeterminate-small"
        />
        <Icon v-else name="material-symbols:add" />
      </button>
    </div>
    <div>{{ level }}</div>
    <div
      v-if="isAbstractOpen"
      class="text-base my-3 max-w-[75ch] pl-5 border-l-2"
    >
      {{  description || lorem.generateWords(50) }}
      <div class="text-blue-800 mt-3"><a>Programa</a></div>
    </div>
  </div>
</template>
