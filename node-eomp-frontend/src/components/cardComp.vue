<template>
    <router-link :to="{name: 'product', params: {id: product.product_id}}">
        <img :src="product.product_image">
            <h5>{{ product.product_name }}</h5>
            <p>{{ product.product_price }}</p>
    </router-link>
</template>

<script>
    export default {
        props: ["product"]
    }
</script>