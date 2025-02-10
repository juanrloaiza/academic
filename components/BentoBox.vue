<script setup lang="ts">
const props = defineProps({
  target: {
    type: String,
    default: "TARGET",
  },
  color: {
    type: String,
    default: "none",
  },
});

const colorMap: { [color: string]: string } = {
  green: "bg-stone-300",
  blue: "bg-slate-300",
  purple: "bg-purple/50",
  red: "bg-red/50",
  orange: "bg-orange/50",
  yellow: "bg-yellow/50",
  none: "bg-none",
};

const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    :to="localePath(target)"
  >
    <div
      class="md:min-h-35 md:max-h-50 lg:min-h-60 my-3 md:m-0 p-3 rounded-md border-2 border-black hover:border-3 hover:border-primary hover:text-primary"
    >
      <h4 class="text-xl md:text-2xl font-bold mb-1">
        {{ $t(`${target}.title`) }}
      </h4>
      <div class="text-lg md:text-xl">{{ $t(`${target}.description`) }}</div>
    </div>
  </NuxtLink>
</template>
