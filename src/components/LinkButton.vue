<script setup lang="ts">
defineProps({
  to: String,
});
</script>

<template>
  <a :href="to"
    ><div
      class="inline-block mt-2 text-primary/70 hover:text-accent py-1 px-2 mr-2 rounded-md border-1 text-sm"
    >
      <slot />
    </div>
  </a>
</template>
