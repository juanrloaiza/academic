<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div class="min-h-[80vh] flex items-center">

  <div class="h-60vh my-6 grid grid-cols-12 grid-flow-dense gap-4">
      <BentoBox color="green" :cols="3" :rows="1" target="about"></BentoBox>
      <BentoBox color="blue" :cols="4" :rows="1" target="cv"></BentoBox>
      <BentoBox color="yellow" :cols="5" :rows="1" target="pubs"></BentoBox>
      <BentoBox color="orange" :cols="4" :rows="1" target="talks"></BentoBox>
      <BentoBox color="purple" :cols="4" :rows="1" target="teaching"></BentoBox>
      <BentoBox color="red" :cols="4" :rows="1" target="other"></BentoBox>
    </div>
  </div>

</template>