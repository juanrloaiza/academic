<script setup lang="ts">
defineProps({
  startYear: { type: Number, required: true },
  endYear: { type: Number },
});
</script>

<template>
  <div class="md:grid grid-cols-6 gap-x-6 items-baseline mb-4">
    <div class="col-span-2 lg:col-span-1 text-base">
      <CVDates :start="startYear" :end="endYear" />
    </div>
    <div class="col-span-5 lg:col-span-5">
      <slot />
    </div>
  </div>
</template>
