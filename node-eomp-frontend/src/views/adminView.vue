<template>
    <div class="position-relative overflow-hidden text-center text-black" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Admin</h1>
        </div>
    </div>

    <table v-if="products" class="table-responsive-md table table-bordered">
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

        <tr>
            <td><input type="text" class="admin-input" id="Id"></td>
            <td><input type="text" class="admin-input" id="Name"></td>
            <td><input type="text" class="admin-input" id="Quantity"></td>
            <td><input type="text" class="admin-input" id="Price"></td>
            <td><input type="text" class="admin-input" id="Category"></td>
            <td><input type="text" class="admin-input" id="ProdUrl"></td>
            <td><button class=btn>Add Product</button></td>
        </tr>

        <tbody class="prod-disp" v-for="product of products" :key="product.prodID" :product="product">
        </tbody>
    </table>

    <div v-else>Spinner goes here</div>
</template>

<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch("getProducts")
        }
    }
</script>

<style scoped>
    #hero {
    background-color: #C4FF86;
  }
</style>