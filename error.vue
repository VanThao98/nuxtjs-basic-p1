<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{error?.statusCode}}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7">{{error?.message}}</p>
    </div>
</template>

<script setup>
    defineProps({
        error: {
            type: Object,
            required: true,
            default: () => ({ statusCode: 404, message: 'Unknown error' })
        }
    })

    console.log('error:',  error)
</script>

<style scoped>

</style>