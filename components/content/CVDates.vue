<script setup lang="ts">
defineProps({
	start: {
		type: Number,
		required: true,
	},
	end: {
		type: Number,
		required: false,
	},
});
</script>

<template>
	<span v-if="start == end">{{ start }}</span>
	<span v-else-if="end">{{ start }} - {{ end }}</span>
	<span v-else>{{ start }} - {{ $t('present') }}</span>
</template>
