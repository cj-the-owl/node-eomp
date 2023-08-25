<template>
    <div class="position-relative overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-3">Admin</h1>
        </div>
    </div>

    <div>
        <h1 class="text-center text-black">Products</h1>
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

        <tbody class="prod-disp" v-for="product in products" :key="product.prodID" :product="product">
            <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.Category }}</td>
                <td><img class="admin-img" :src=product.prodUrl></td>
                <td><updateProduct :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>
            <tr v-else>Waiting</tr>
        </tbody>
        </table>

        <h1 class="text-center text-black">Users</h1>
        <add-user/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">User Id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">User Role</th>
                <th scope="col">Email Address</th>
                <th scope="col">Password</th>
                <th scope="col">User Profile</th>
                <th scope="col">Edit/Delete Product</th>
            </tr>
        </thead>

        <tbody class="user-disp" v-for="user in users" :key="user.userID" :user="user">
            <tr v-if="users">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.Gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userPass }}</td>
                <td><img class="admin-img" :src=user.userProfile></td>
                <td><UpdateUser :user="user"/>
                    <button class="btn" @click="deleteUser(user.userID)">Delete</button>
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
import UpdateUser from '@/components/updateUser.vue';
import AddUser from '@/components/addUser.vue';
    export default {
        components: {
    addProduct,
    UpdateProduct,
    UpdateUser,
    AddUser
},
        computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.$store.state.product;
            },
            users() {
                return this.$store.state.users;
            },
            user() {
                return this.$store.state.user;
            }
        },
        mounted() {
            this.$store.dispatch("fetchProducts")
            this.$store.dispatch("fetchUsers")
        },
        methods: {
            deleteProduct(prodID) {
                if (confirm("you sure?")) {
                    this.$store.dispatch("deleteProduct", prodID);
                    setTimeout(() => {
                        location.reload()
                    }, 500)
                }
            },
            deleteUser(id) {
                if (confirm("You sure?")) {
                    this.$store.dispatch("deleteUser", id);
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                }
            },
        }
    }
</script>

<style scoped>
    #hero {
    background-color: black;
    color: white;
  }

  .admin-img {
    width: 100px;
    height: 100px;
  }
</style>