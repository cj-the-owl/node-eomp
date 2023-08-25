<template>
    <div v-if="product" class="product-details">
        <img :src="product[0].image" :alt="product[0].product_name">
        <div>
            <h2>{{ product[0].product_name }}</h2>
            <p>Price: R{{ product[0].product_price }}</p>
        </div>
    </div>
    <div v-else>
        <spinner-comp/>
    </div>
</template>

<script>
import spinnerComp from '@/components/spinnerComp.vue';
    export default {
  components: { spinnerComp },
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