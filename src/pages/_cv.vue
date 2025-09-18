<script setup lang="ts">
const { locale, t } = useI18n();

useSeoMeta({
  title: "CV"
})

const { data: education } = await useAsyncData(() =>
  queryCollection("cv")
    .where("cvtype", "=", "education")
    .order("start_year", "DESC")
    .all()
);

const { data: employment } = await useAsyncData(() =>
  queryCollection("cv")
    .where("cvtype", "=", "employment")
    .order("start_year", "DESC")
    .all()
);

const { data: service } = await useAsyncData(() =>
  queryCollection("cv")
    .where("cvtype", "=", "service")
    .order("start_year", "DESC")
    .all()
);
</script>

<template>
  <PageTitle title="CV" />

  <h3 class="font-bold text-2xl mb-3">{{ $t("education") }}</h3>
  <LazyCVSection hydrate-never v-for="ed in education" :startYear=ed.start_year :endYear=ed.end_year>
    <strong class="font-semibold">{{ ed.role[locale] }}</strong>
    <br />
    {{ ed.faculty }}, {{ ed.institution }}
    <br />
    <span class="text-base" v-if="ed.thesis">
      {{ $t("thesis") }}: "{{ ed.thesis.title }}"
      <br />
      {{ $t("supervisors") }}: {{ ed.thesis.supervisors?.join(", ") }}
      <br />
      <span v-if="ed.thesis.examiners">
        {{ $t("examiners") }}: {{ ed.thesis.examiners?.join(", ") }}
        <br />
      </span>
      {{ $t("qualification") }}:
      {{ ed.thesis.qualification }}
    </span>
  </LazyCVSection>

  <h3 class="font-bold text-2xl mb-3">{{ $t("employment") }}</h3>

  <LazyCVSection hydrate-never v-for="emp in employment" :startYear="emp.start_year" :endYear="emp.end_year">
    <strong class="font-semibold">{{ emp.role[locale] }}</strong>
    <br />
    {{ emp.faculty }}, {{ emp.institution }}
    <br />
  </LazyCVSection>

  <h3 class="font-bold text-2xl mb-3 mt-8">{{ $t("service") }}</h3>

  <LazyCVSection hydrate-never v-for="srv in service" :startYear="srv.start_year" :endYear="srv.end_year">
    <strong class="font-semibold">{{ srv.role[locale] }}</strong>
    <br />
    <span v-if="srv.faculty">{{ srv.faculty }},</span>
    {{ srv.institution }}
    <br />
  </LazyCVSection>
</template>
