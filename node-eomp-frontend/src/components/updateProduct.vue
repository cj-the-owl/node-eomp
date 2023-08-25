<template>
    <div>
        <button class="btn" type="button" @click="editModal(product.prodID)" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + product.prodID">Edit</button>
        <div class="modal fade" :id="'exampleModal' + product.prodID" tabindex="-1" :aria-labelledBy="'exampleModalLabel' + product.prodID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Edit</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="Product Name" v-model="editProduct.prodName">
                        <input class="input" type="text" placeholder="Product Name" v-model="editProduct.quantity">
                        <input class="input" type="text" placeholder="Product Name" v-model="editProduct.amount">
                        <input class="input" type="text" placeholder="Product Name" v-model="editProduct.category">
                        <input class="input" type="text" placeholder="Product Name" v-model="editProduct.prodUrl">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" @click="updateProduct(product.prodID)">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["product"],
        data() {
            return {
                editProduct: {
                    ...this.product,
                },
                editProductID: null,
                model: {
                    product: {
                        prodName: "",
                        quantity: 0,
                        amount: 0,
                        qauntity: "",
                        amount: "",
                        category: "",
                        prodUrl: "",
                    },
                },
            };
        },
        computed: {
            currentProd() {
                return this.$store.state.product;
            },
        },
        methods: {
            editModal(prodID) {
                this.editProductID = prodID;
                this.editProduct = {
                    ...this.$store.state.products.find(
                        (product) => product.prodID === prodID
                    ),
                };
            },
            updateProduct(prodID) {
                this.$store.dispatch("updateProduct", {
                    prodID: prodID,
                    ...this.editProduct,
                })
                .then(() => {
                    console.log("Updated");
                })
                .catch((err) => {
                    console.error("Error: ", err)
                });
            },
        },
    };
</script>