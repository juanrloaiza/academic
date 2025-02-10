<script setup lang="ts">
defineProps({
  startYear: { type: Number, required: true },
  endYear: { type: Number },
});
</script>

<template>
  <div class="md:grid grid-cols-8 items-baseline mb-4">
    <div class="md:col-span-1 text-base">
      <CVDates :start="startYear" :end="endYear" />
    </div>
    <div class="md:col-span-7">
      <slot />
    </div>
  </div>
</template>
