<script setup lang="ts">
const { data: courses } = await useAsyncData(()=>queryCollection('courses').all())

</script>

<template>
  <PageTitle :title="$t('teaching.title')" />

  <h3 class="text-2xl font-bold mb-3">Cursos</h3>

  <CourseDescription v-for="course in courses" v-bind="course"/>
  <CourseDescription courseName="Wittgenstein" courseLevel="Pregrado"/>
  <CourseDescription courseName="Seminario: Emociones básicas y clases naturales" courseLevel="Doctorado"/>

  <CourseDescription courseName="Teoría del Conocimiento" courseLevel="Pregrado"/>

  
  
</template>
