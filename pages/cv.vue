<script setup lang="ts">
const { locale } = useI18n();

const { data: education } = await useAsyncData(() =>
  queryCollection("cv")
    .where("type", "=", "education")
    .order("startYear", "DESC")
    .all()
);

const { data: employment } = await useAsyncData(() =>
  queryCollection("cv")
    .where("type", "=", "employment")
    .order("startYear", "DESC")
    .all()
);

const { data: service } = await useAsyncData(() =>
  queryCollection("cv")
    .where("type", "=", "service")
    .order("startYear", "DESC")
    .all()
);
</script>

<template>
  <PageTitle title="CV" />

  <h3 class="font-bold text-2xl mb-3">{{ $t("education") }}</h3>
  <CVSection
    v-for="ed in education"
    :startYear="ed.startYear"
    :endYear="ed.endYear"
  >
    <strong class="font-semibold">{{ ed.role[locale] }}</strong>
    <br />
    {{ ed.faculty }}, {{ ed.institution }}
    <br />
    <span class="text-base">
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
  </CVSection>

  <h3 class="font-bold text-2xl mb-3">{{ $t("employment") }}</h3>

  <CVSection
    v-for="emp in employment"
    :startYear="emp.startYear"
    :endYear="emp.endYear"
  >
    <strong class="font-semibold">{{ emp.role[locale] }}</strong>
    <br />
    {{ emp.faculty }}, {{ emp.institution }}
    <br />
  </CVSection>

  <h3 class="font-bold text-2xl mb-3 mt-8">{{ $t("service") }}</h3>

  <CVSection
    v-for="srv in service"
    :startYear="srv.startYear"
    :endYear="srv.endYear"
  >
    <div class="col-span-7">
      <strong class="font-semibold">{{ srv.role[locale] }}</strong>
      <br />
      <span v-if="srv.faculty">{{ srv.faculty }},</span>
      {{ srv.institution }}
      <br />
    </div>
  </CVSection>
</template>
