<script setup lang="ts">
const props = defineProps({
    cols: {
        type: Number,
        required: true
    },
    rows: {
        type: Number,
        required: true
    },
    target: {
        type: String,
        default: "TARGET"
    }
})

// We need to use this map because Tailwind
// doesn't like dynamically generated classes.
// See: https://tailwindcss.com/docs/detecting-classes-in-source-files
const colsMap: { [cols: number]: string} = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
}

const rowsMap: { [rows: number]: string} = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3',
    4: 'row-span-4',
    5: 'row-span-5',
    6: 'row-span-6',
}

const localePath = useLocalePath();

</script>

<template>
    <NuxtLink :to="localePath(target)" :class="`${colsMap[cols]} ${rowsMap[rows]}`"
        class="border border-black min-h-40 p-3 rounded-md
        hover:border-4 hover:border-orange-300">
        <h4 class="text-2xl font-bold mb-1">{{ $t(`${target}.title`) }}</h4>
        <div>{{ $t(`${target}.description`) }}</div>
    </NuxtLink>
</template>