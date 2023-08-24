<template>
    <div v-if="product" class="product-details">
        <img :src="product[0].image" :alt="product[0].product_name">
        <div>
            <h2>{{ product[0].product_name }}</h2>
            <p>Price: R{{ product[0].product_price }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product_id"],
        computed: {
            product() {
                return this.$store.state.product;
            },
        },
        mounted() {
            this.$store.dispatch("fetchProduct", this.$route.params.id);
        }
    }
</script>