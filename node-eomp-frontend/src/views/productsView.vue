<template>
    <div class="position-relative overflow-hidden text-center text-black" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Our Products</h1>
        </div>
    </div>
    <router-link :to="{name: 'product', params:{id: product.product_id}}">
        <div v-if="products" class="flex-container" id="products">
        <div class="prod-dis" v-for="product of products" :key="product.product_id" :product="product">
            <img :src="product.product_image">
            <h5>{{ product.product_name }}</h5>
            <p>{{ product.product_price }}</p>
        </div>
    </div>
    <div v-else>
        <p>Spinner goes here</p>
    </div>
    </router-link>
</template>

<script>
    export default {
        props: ["product"],
        computed: {
            products() {
                return this.$store.state.products
            },
        },
        mounted(){
            this.$store.dispatch("fetchProducts")
        }, methods: {
            log( id ){
                console.log( id )
            }
        }
    }
</script>

<style scoped>
    #hero {
    background-color: #C4FF86;
  }
</style>