<template>
    <div>
        <button type="btn" data-bs--toggle="modal" data-bs-target="#exampleModal">Add</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Add Product</h2>
                        <button class="btn-close" type="button" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="Product Name" v-model="model.product.prodName">
                        <input class="input" type="text" placeholder="Price" v-model="model.product.quantity">
                        <input class="input" type="text" placeholder="Price" v-model="model.product.amount">
                        <input class="input" type="text" placeholder="Price" v-model="model.product.category">
                        <input class="input" type="text" placeholder="Price" v-model="model.product.prodUrl">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" @click="saveProduct">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                model: {
                    product: {
                        prodName: "",
                        quantity: "",
                        amount: "",
                        category: "",
                        prodUrl: "",
                    }
                }
            };
        },
        methods: {
            saveProduct() {
                this.$store.dispatch("saveProduct", this.model.product);
                setTimeout(() => {
                    console.log("Loading...");
                    location.reload();
                }, 500);
            },
        },
    };
</script>