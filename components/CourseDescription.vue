<script setup lang="ts">
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const { locale } = useI18n();

// Define the prop with Partial<Record<>> to allow missing translations
defineProps<{
  name: Partial<Record<'en' | 'es', string>>,
  level: string,
  description?: String,
  syllabus?: string
}>();

const isAbstractOpen = ref(false);

const openAbstract = () => {
  isAbstractOpen.value = !isAbstractOpen.value;
};
</script>

<template>
  <div class="mb-4">
    <div class="flex">
      <h4 class="text-xl font-bold">{{ name[locale] }}</h4>

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
    <div>{{ $t(level) }}</div>
    <div
      v-if="isAbstractOpen"
      class="text-base my-3 max-w-[75ch] pl-5 border-l-2"
    >
      <MDC v-if="description" :value='description' />
      <div v-if="syllabus" class="text-blue-800 mt-3"><a>{{ $t('syllabus') }}</a></div>
    </div>
  </div>
</template>
