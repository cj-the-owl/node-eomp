<template>
    <div class="position-relative overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Our Products</h1>
        </div>
    </div>

    <button class="btn" @click="sortName">Sort by Name</button>

    <input type="text" class="search-input" v-model="search" placeholder="Search...">

    <select v-model="category" id="prodcat" class="rounded-3">
        <option class="opt" value="All">All</option>
        <option class="opt" value="Sushi">Sushi</option>
        <option class="opt" value="Noodles">Noodles</option>
        <option class="opt" value="Starters">Starters</option>
    </select>
        <div v-if="products" class="flex-container" id="products">
        <div class="prod-dis" v-for="product in products" :key="product.prodID" :product="product">
        <router-link :to="{name: 'product', params:{id: product.prodID}}">
            <img class="prod-img" :src="product.prodUrl">
            <h5 class="prod-name">{{ product.prodName }}</h5>
            <p class="prod-price">R {{ product.amount }}</p>
            <button class="btn" type="button">View</button>

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
        sortName() {
            this.$store.commit("sortByName");
        }
    },
    computed: {
        products() {
            return this.$store.state.products?.filter((product) => {
                let isMatch = true;
                if (!product.prodName.toLowerCase().includes(this.search.toLowerCase())) {
                    isMatch = false;
                }
                if (this.Category !== "All" && this.Category !== product.Category) {
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

  .btn {
    background-color: black;
    color: white;
    text-align: center;
  }

  .btn:hover {
    background-color: white;
    color: black;
    transition: ease-out 0.3s;
  }
  @media screen and (max-width: 1300px) {
    #products {
        gap: 5rem;
    }
    .prod-img {
    width: 200px;
    height: 200px;
    }
  }
  @media screen and (max-width: 900px) {
    #products {
        display:grid;
        grid-template-columns: auto auto;
    }
    .prod-img {
    width: 200px;
    height: 200px;
    }
  }
  @media screen and (max-width: 700px) {
    #products {
        display:grid;
        grid-template-columns: auto auto;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .prod-img {
    width: 200px;
    height: 200px;
    margin-left: 25px;
  }
  .btn {
    margin-left: 25px;;
  }
}
  @media screen and (max-width: 500px) {
    #products {
        display:grid;
        grid-template-columns: auto;
    }
  }

  @media screen and (max-width: 300px) {
    #products {
        display:grid;
        grid-template-columns: auto;
        
    }
  }
</style>