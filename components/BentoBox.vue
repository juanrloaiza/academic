<script setup lang="ts">
const props = defineProps({
  cols: {
    type: Number,
    required: true,
  },
  rows: {
    type: Number,
    required: true,
  },
  target: {
    type: String,
    default: "TARGET",
  },
  color: {
    type: String,
    default: "none",
  },
});

// We need to use this map because Tailwind
// doesn't like dynamically generated classes.
// See: https://tailwindcss.com/docs/detecting-classes-in-source-files
const colsMap: { [cols: number]: string } = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const rowsMap: { [rows: number]: string } = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
  5: "row-span-5",
  6: "row-span-6",
};

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
    :class="`${colsMap[cols]} ${rowsMap[rows]}`"
    :to="localePath(target)"
  >
    <div
      class="md:min-h-60 m-3 md:m-0 p-3 rounded-md border-2 border-black hover:border-3 hover:border-primary hover:text-primary"
    >
      <h4 class="text-xl md:text-2xl font-bold mb-1">
        {{ $t(`${target}.title`) }}
      </h4>
      <div class="text-lg md:text-xl">{{ $t(`${target}.description`) }}</div>
    </div>
  </NuxtLink>
</template>
