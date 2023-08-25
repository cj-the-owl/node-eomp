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
            <img class="prod-img" :src="product.prodUrl">
            <h5 class="prod-name">{{ product.prodName }}</h5>
            <p class="prod-price">R {{ product.amount }}</p>
        </router-link>
        </div>
    </div>
    <div class="m-5" v-else>
        <spinner-comp/>
    </div>
</template>

<script>
import SpinnerComp from '@/components/spinnerComp.vue';

    export default {
    data() {
        return {
            search: "",
            category: "All"
        };
    },
    methods: {
        sortPrice() {
            this.$store.commit("sortProductsByPrice");
        }
    },
    computed: {
        products() {
            return this.$store.state.products?.filter((product) => {
                let isMatch = true;
                if (!product.name.toLowerCase().includes(this.search.toLowerCase())) {
                    isMatch = false;
                }
                if (this.category !== "All" && this.category !== product.product_category) {
                    isMatch = false;
                }
                return isMatch;
            });
        }
    },
    props: ["product"],
    computed: {
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    }, methods: {
        log(id) {
            console.log(id);
        }
    },
    components: { SpinnerComp }
}
</script>

<style scoped>
    #hero {
        background-color: black;
    color: white;
  }
  #products {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 15rem;
  }
  .prod-img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
  }

  .prod-name, .prod-price {
    color: black;
    text-align: center;
    font-size: 25px;
  }

  a {
    text-decoration: none;
  }
</style>