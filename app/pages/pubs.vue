<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('pubs.title')
})

// Load Data
const { status: artsStatus, data: pubArticles } = await useLazyAsyncData(() =>
  queryCollection("publications")
    .where('year', '>', '2000')
    .where('pubType', '=', 'article')
    .order("year", "DESC")
    .order("title", "ASC")
    .all()
);

const { status: commentStatus, data: pubComments } = await useLazyAsyncData(() =>
  queryCollection("publications")
    .where('year', '>', '2000')
    .where('pubType', '=', 'comment')
    .order("year", "DESC")
    .all()
);


const { status: chapterStatus, data: pubChapters } = await useLazyAsyncData(() =>
  queryCollection("publications")
    .where('year', '>', '2000')
    .where('pubType', '=', 'bookchapter')
    .order("year", "DESC")
    .all()
);

const { status: bookStatus, data: pubBooks } = await useLazyAsyncData(() =>
  queryCollection("publications")
    .where('year', '>', '2000')
    .where('pubType', '=', 'book')
    .order("year", "DESC")
    .all()
);

const { status: forthcomingStatus, data: forthcoming } = await useLazyAsyncData(() =>
  queryCollection("publications")
    .where('year', '<', '2000') // Separate Forthcoming, which have year = 0
    .all()
);

</script>

<template>
  <PageTitle :title="$t('pubs.title')" />

  <h3 class="text-2xl font-bold mt-6 mb-2">{{ $t('articles') }}</h3>

  <LoadingIcon v-if="forthcomingStatus
    === 'pending' || artsStatus === 'pending'">
    ...
  </LoadingIcon>
  <span v-else>
    <LazyArticle hydrate-never v-for="(pub, index) in forthcoming" v-bind="pub" :key="`pub-${index}-f`"
      class="mb-4 md:mb-2" />

    <LazyArticle hydrate-never v-for="(pub, index) in pubArticles" v-bind="pub" :key="`pub-${index}-p`"
      class="mb-4 md:mb-2" />
  </span>

  <h3 class="text-2xl font-bold mt-6 mb-4 md:mb-2">{{ $t('comments') }}</h3>

  <LoadingIcon v-if="chapterStatus
    === 'pending'">
    ...
  </LoadingIcon>
  <LazyArticle hydrate-never v-for="(pub, index) in pubComments" v-bind="pub" :key="`pub-${index}-f`"
    class="mb-4 md:mb-2" />


  <h3 class="text-2xl font-bold mt-6 mb-4 md:mb-2">{{ $t('bookchapters') }}</h3>

  <LoadingIcon v-if="chapterStatus
    === 'pending'">
    ...
  </LoadingIcon>
  <LazyBookChapter hydrate-never v-for="(pub, index) in pubChapters" v-bind="pub" :key="`pub-${index}-f`"
    class="mb-4 md:mb-2" />

  <h3 class="text-2xl font-bold mt-6 mb-4 md:mb-2">{{ $t('monographs') }}</h3>

  <LoadingIcon v-if="bookStatus
    === 'pending'">
    ...
  </LoadingIcon>
  <LazyBook hydrate-never v-for="(pub, index) in pubBooks" v-bind="pub" :key="`pub-${index}-f`" class="mb-4 md:mb-2" />

</template>
