<template>
    <div>
        <!-- <p>{{product.title}}</p>
        <p>{{product.price}}</p>
        <p>{{product.id}}</p> -->
        <Head>
            <Title>Nuxt Dojo | {{product.title}}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductsDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } =  useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch api theo id
    const {data : product} = await useFetch(uri);

    if(!product.value){
        throw createError({
            statusCode: 404, statusMessage: 'Product Not Found'
        })
    }

    definePageMeta({
        layout: 'products'
    })

</script>

<style scoped>

</style>