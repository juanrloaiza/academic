<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('blog').order('date', 'DESC')
}, {
	transform: (data) => data[0].children
})

</script>

<template>
  <nav>
    <ul v-if="data" v-for="year in data">
		{{ year.title }}
      <li v-for="item in year.children" :key="item.path">
        <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
