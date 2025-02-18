<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('teaching.title')
})

import { CourseDescription } from '#components';

const { data: courses } = await useAsyncData(()=>queryCollection('courses').all(),
{
  transform: (courses) => courses.reverse()
})

</script>

<template>
  <PageTitle :title="$t('teaching.title')" />

  <h3 class="text-2xl font-bold mb-3">{{ $t('courses')}}</h3>

  <CourseDescription v-if="courses" v-for="course in courses" v-bind="course"/>  

</template>
