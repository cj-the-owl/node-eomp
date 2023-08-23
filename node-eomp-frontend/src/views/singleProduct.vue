<template>
    <div v-if="product" class="product-details">
        <img :src="product.image" :alt="product.product_name">
        <div>
            <h2>{{ product.product_name }}</h2>
            <p>Price: R{{ product.product_price }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product_id"],
        computed: {
            products() {
                return this.$store.state.product;
            },
        },
        mounted() {
            this.$store.dispatch("fetchProduct", this.product_id);
        }
    }
</script>