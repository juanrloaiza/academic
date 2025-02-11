<script setup lang="ts">
const { t } = useI18n();


useSeoMeta({
  title: t('pubs.title')
})

// Load Data
const { data: pubArticles } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '>', '2000')
  .where('pubType', '=', 'article')
  .order("year", "DESC")
  .all()
);

const { data: pubChapters } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '>', '2000')
  .where('pubType', '=', 'bookchapter')
  .order("year", "DESC")
  .all()
);

const { data: pubBooks } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '>', '2000')
  .where('pubType', '=', 'book')
  .order("year", "DESC")
  .all()
);

const { data: forthcoming } = await useAsyncData(() =>
  queryCollection("publications")
  .where('year', '<', '2000') // Separate Forthcoming, which have year = 0
  .all()
);

</script>

<template>
  <PageTitle :title="$t('pubs.title')" />

  <h3 class="text-2xl font-bold mt-6 mb-2">Articles</h3>
  <Article v-for="(pub, index) in forthcoming" :pub="pub" :key="`pub-${index}-f`" class="mb-2" />

  <Article v-for="(pub, index) in pubArticles" :pub="pub" :key="`pub-${index}-p`" class="mb-2" />

  <h3 class="text-2xl font-bold mt-6 mb-2">Book chapters</h3>
  <BookChapter v-for="(pub, index) in pubChapters" :pub="pub" :key="`pub-${index}-f`" class="mb-2" />

  <h3 class="text-2xl font-bold mt-6 mb-2">Monographs</h3>
  <Book v-for="(pub, index) in pubBooks" :pub="pub" :key="`pub-${index}-f`" class="mb-2" />
    
</template>
