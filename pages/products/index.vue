<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductsCard :product="p"></ProductsCard>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch' }
  ]
})
</script>

<style scoped>
</style>
