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
    target: String
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

</script>

<template>
    <div :class="`${colsMap[cols]} ${rowsMap[rows]} border min-h-5`">
        {{ target }}
    </div>
</template>