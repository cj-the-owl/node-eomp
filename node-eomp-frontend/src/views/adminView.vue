<template>
    <div class="overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5">Products</h1>
        </div>
    </div>

    <div>
        <addProduct/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Product Name</th>
                <th class="no2" scope="col">Quantity</th>
                <th class="no1" scope="col">Price</th>
                <th class="no1" scope="col">Category</th>
                <th class="no" scope="col">ProductUrl</th>
                <th scope="col">Edit/Delete Product</th>
            </tr>
        </thead>

        <tbody class="prod-disp" v-for="product in products" :key="product.prodID" :product="product">
            <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td class="no2">{{ product.quantity }}</td>
                <td class="no1">{{ product.amount }}</td>
                <td class="no1">{{ product.Category }}</td>
                <td class="no"><img class="admin-img" :src=product.prodUrl></td>
                <td><updateProduct :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>
            <div class="m-5" v-else>
                <spinner-comp/>
            </div>
        </tbody>
        </table>

        <div class="overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5">Users</h1>
        </div>
    </div>
        <AddUser/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">User Id</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th class="no2" scope="col">Age</th>
                <th class="no2" scope="col">Gender</th>
                <th class="no" scope="col">User Role</th>
                <th class="no1" scope="col">Email Address</th>
                <th class="no" scope="col">Password</th>
                <th class="no" scope="col">User Profile</th>
                <th scope="col">Edit/Delete Product</th>
            </tr>
        </thead>

        <tbody class="user-disp" v-for="user in users" :key="user.userID" :user="user">
            <tr v-if="users">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td class="no2">{{ user.userAge }}</td>
                <td class="no2">{{ user.Gender }}</td>
                <td class="no">{{ user.userRole }}</td>
                <td class="no1">{{ user.emailAdd }}</td>
                <td class="no">{{ user.userPass }}</td>
                <td class="no"><img class="admin-img" :src=user.userProfile></td>
                <td><UpdateUser :user="user"/>
                    <button class="btn" @click="deleteUser(user.userID)">Delete</button>
                </td>
            </tr>
            <div class="m-5" v-else>
                <spinner-comp/>
            </div>
        </tbody>
        </table>
    </div>
</template>

<script>
import UpdateProduct from '@/components/updateProduct.vue'
import addProduct from '@/components/addProduct.vue'
import UpdateUser from '@/components/updateUser.vue';
import AddUser from '@/components/addUser.vue';
import SpinnerComp from '@/components/spinnerComp.vue';
    export default {
        components: {
    addProduct,
    UpdateProduct,
    UpdateUser,
    AddUser,
    SpinnerComp
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
    height: 10rem;
  }

  .admin-img {
    width: 100px;
    height: 100px;
  }

  table {
    border-color: black;
  }

  .btn {
    background-color: black;
    color: white;
    margin-top: 5px;
  }
  .btn:hover {
        background-color: white;
        color: black;
    }

     @media screen and (max-width: 1000px) {
        .no {
            display:none;
        }
    }
    @media screen and (max-width: 800px) {
        .no {
            display:none;
        }
    }
    @media screen and (max-width: 500px) {
        .no, .no1, .no2 {
            display:none;
        }
    }
</style>
