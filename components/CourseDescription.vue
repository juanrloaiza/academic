<script setup lang="ts">
const { locale } = useI18n();

interface Syllabus {
  semester: string;
  route: string;
}

// Define the prop with Partial<Record<>> to allow missing translations
defineProps<{
  name: Partial<Record<"en" | "es", string>>;
  level: string;
  description?: String;
  syllabi?: Array<Syllabus>;
}>();

const isAbstractOpen = ref(false);

const openAbstract = () => {
  isAbstractOpen.value = !isAbstractOpen.value;
};
</script>

<template>
  <div class="mb-8">
    <h4 class="md:text-xl font-semibold">{{ name[locale] }}</h4>
    <h6 class="text-sm">{{ $t(level) }}</h6>
      <MDC v-if="description" :value="description" class="text-base mt-1" />

      <a
        v-for="syllabus in syllabi"
        :href="syllabus.route"
        class="inline-block mt-2 text-primary/70 hover:text-accent py-1 px-2 rounded-md border-1 text-sm"
      >
        {{ $t("syllabus") }} ({{ syllabus.semester }})
      </a>
  </div>
</template>
