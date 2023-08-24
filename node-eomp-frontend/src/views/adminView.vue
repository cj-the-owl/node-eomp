<template>
    <div class="position-relative overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Admin</h1>
        </div>
    </div>

    <div>
        <h1>Products</h1>
        <addProduct/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">ProductUrl</th>
                <th scope="col">Edit/Delete Product</th>
            </tr>
        </thead>

        <tbody class="prod-disp" v-for="product of products" :key="product.prodID" :product="product">
            <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.category }}</td>
                <td><img :src=product.prodUrl></td>
                <td><updateProduct :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>
            <tr v-else>Waiting</tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import UpdateProduct from '@/components/updateProduct.vue'
import addProduct from '@/components/addProduct.vue'
    export default {
        components: {
            addProduct,
            UpdateProduct,
        },
        computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.$store.state.product;
            },
        },
        mounted() {
            this.$store.dispatch("fetchProducts")
        }
    }
</script>

<style scoped>
    #hero {
    background-color: black;
    color: white;
  }
</style>