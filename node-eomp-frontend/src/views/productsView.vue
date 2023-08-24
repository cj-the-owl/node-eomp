<template>
    <div class="position-relative overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Our Products</h1>
        </div>
    </div>

    <button class="btn" @click="sortPrice">Sort by Price</button>

    <input type="text" class="search-input" v-model="search" placeholder="Search...">

    <select v-model="category" id="prodcat" class="rounded-3">
        <option class="opt" value="All">All</option>
        <option class="opt" value="Sushi">Sushi</option>
        <option class="opt" value="Noodles">Noodles</option>
        <option class="opt" value="Starters">Starters</option>
    </select>
        <div v-if="products" class="flex-container" id="products">
        <div class="prod-dis" v-for="product of products" :key="product.prodID" :product="product">
        <router-link :to="{name: 'product', params:{id: product.prodID}}">
            <img :src="product.prodUrl">
            <h5>{{ product.prodName }}</h5>
            <p>R {{ product.amount }}</p>
        </router-link>
        </div>
    </div>
    <div v-else>
        <p>Spinner goes here</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: "",
                category: "All"
            }
        },

        methods: {
            sortPrice() {
                this.$store.commit("sortProductsByPrice")
            }
        },

        computed: {
            products() {
                return this.$store.state.products?.filter((product) => {
                    let isMatch = true;
                    if (!product.name.toLowerCase().includes(this.search.toLowerCase())) {
                        isMatch = false
                    }
                    if (this.category !== "All" && this.category !== product.product_category) {
                        isMatch = false
                    }
                    return isMatch
                })
            }
        },
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
        background-color: black;
    color: white;
  }
</style>