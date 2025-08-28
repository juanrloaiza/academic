<script setup lang="ts">
defineProps({
  isAbstractOpen: Boolean,
});
</script>

<template>
  <button class="mx-4 self-start">
    <Icon
      v-if="isAbstractOpen"
      name="material-symbols:check-indeterminate-small"
    />
    <Icon v-else name="material-symbols:add" />
  </button>
</template>
