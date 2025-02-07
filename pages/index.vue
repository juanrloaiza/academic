<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div class="my-6 grid grid-cols-12 grid-flow-dense gap-4">
      <BentoBox :cols="3" :rows="1" target="about"></BentoBox>
      <BentoBox :cols="4" :rows="1" target="cv"></BentoBox>
      <BentoBox :cols="5" :rows="1" target="pubs"></BentoBox>
      <BentoBox :cols="4" :rows="1" target="talks"></BentoBox>
      <BentoBox :cols="4" :rows="1" target="teaching"></BentoBox>
      <BentoBox :cols="4" :rows="1" target="other"></BentoBox>
    </div>
</template>

<style>
</style>