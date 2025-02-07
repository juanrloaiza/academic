<script setup lang="ts">
// Load Data
const { data: pubs } = await useAsyncData(() => queryCollection('publications').all())

</script>

<template>
    <PageTitle :title='$t("pubs.title")' />
    <a v-for="pub in pubs" 
    :href="`https://doi.org/${pub.doi}`">          
        {{ pub.authors }} ({{ pub.year }}). {{ pub.title }}. <em>{{ pub.journal }}</em>
        <span v-if="pub.volume"><em>, {{ pub.volume }}</em>({{ pub.issue }})</span>.
        <span v-if="pub.doi">DOI: {{ pub.doi }}</span>
    </a>
</template>