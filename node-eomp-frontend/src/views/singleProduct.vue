<template>
    <div v-if="product" class="product-details">
        <img :src="product[0].prodUrl" :alt="product[0].prodName">
        <div>
            <h2>{{ product[0].prodName }}</h2>
            <p>Price: R{{ product[0].amount }}</p>
        </div>
    </div>
    <div class="m-5" v-else>
        <spinner-comp/>
    </div>
</template>

<script>
import spinnerComp from '@/components/spinnerComp.vue';
    export default {
  components: { spinnerComp },
        props: ["prodID"],
        computed: {
            product() {
                return this.$store.state.selectedProduct;
            },
        },
        mounted() {
            this.$store.dispatch("fetchProduct", this.$route.params.id);
        }
    }
</script>