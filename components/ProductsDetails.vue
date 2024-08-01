<template>
    <div>
        <div class="card max-w-screen-lg mx-auto p-5">
            <div class="grid md:grid-cols-2 gap-5">
                <div class="flex justify-center items-center p-5">
                    <img :src="product.image" alt="product image" class="max-w-full h-auto"/>
                </div>
                <div class="p-5">
                    <h2 class="text-3xl md:text-4xl my-5">{{product.title}}</h2>
                    <p class="text-lg md:text-xl my-5">Price - ${{product.price}}</p>
                    <h3 class="font-bold border-b-2 mb-4 pb-2">Product descriptions:</h3>
                    <p class="mb-5">{{product.description}}</p>
                    <button class="btn flex items-center bg-blue-500 text-white px-4 py-2 rounded">
                        <i class="material-icons mr-2">add_shopping_cart</i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
    img {
        max-width: 100%;
    }
</style>
