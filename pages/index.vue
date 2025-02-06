<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <LangSwitcher />
  {{ config.title }}
  <div class="grid grid-cols-12 grid-flow-dense min-h-full gap-4">
    <BentoBox :cols=2 :rows=2 target="about"></BentoBox>
    <BentoBox :cols=4 :rows=2 target="cv"></BentoBox>
    <BentoBox :cols=6 :rows=1 target="pubs"></BentoBox>
    <BentoBox :cols=4 :rows=2 target="talks"></BentoBox>
    <BentoBox :cols=2 :rows=2 target="teaching"></BentoBox>
    <BentoBox :cols=6 :rows=1 target="other"></BentoBox>
  </div>
</template>
