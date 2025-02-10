<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <div class="min-h-[60vh] lg:min-h-[80vh] flex items-center">
    <div class="lg:h-60vh md:my-6 md:grid md:grid-cols-8 lg:grid-cols-12 grid-flow-dense gap-4">
      <BentoBox color="green" class="col-span-3 row-span-1 lg:col-span-3 lg:row-span-1" target="about"></BentoBox>
      <BentoBox color="blue" class="col-span-5 row-span-1 lg:col-span-4 lg:row-span-1" target="cv"></BentoBox>
      <BentoBox color="yellow" class="col-span-4 row-span-1 lg:col-span-5 lg:row-span-1" target="pubs"></BentoBox>
      <BentoBox color="orange" class="col-span-4 row-span-1 lg:col-span-4 lg:row-span-1" target="blog"></BentoBox>
      <BentoBox color="purple" class="col-span-3 row-span-1 lg:col-span-4 lg:row-span-1" target="teaching"></BentoBox>
      <BentoBox color="red" class="col-span-5 row-span-1 lg:col-span-4 lg:row-span-1" target="other"></BentoBox>
    </div>
  </div>
</template>
