<script setup lang="ts">
defineProps<{
  title: string;
  openaccess: boolean;
}>();
</script>

<template>
  <div class="text-primary hover:text-accent">
    {{ title }}
    <i
      v-if="openaccess"
      class="mx-2 text-2xl text-orange-600 ai ai-open-access"
    ></i>
  </div>
</template>
