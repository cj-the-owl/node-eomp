<template>
    <div>
        <button class="btn" type="btn" data-bs--toggle="modal" data-bs-target="#exampleModal">Add</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Add User</h2>
                        <button class="btn-close" type="button" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="User Name" v-model="model.user.firstName">
                        <input class="input" type="text" placeholder="User Surname" v-model="model.user.lastName">
                        <input class="input" type="text" placeholder="Age" v-model="model.user.userAge">
                        <input class="input" type="text" placeholder="Gender" v-model="model.user.Gender">
                        <input class="input" type="text" placeholder="User Role" v-model="model.user.userRole">
                        <input class="input" type="text" placeholder="User Email" v-model="model.user.emailAdd">
                        <input class="input" type="text" placeholder="User Password" v-model="model.user.userPass">
                        <input class="input" type="text" placeholder="User Profile" v-model="model.user.userProfile">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" @click="saveUser">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
        background-color: black;
        color: white;
        border-radius:0%;
        width: 60px;
    }

    .btn:hover {
        background-color: white;
        color: black;
    }
</style>

<script>

    export default {
        data() {
            return {
                model: {
                    user: {
                        firstNmae: "",
                        lastName: "",
                        userAge: "",
                        Gender: "",
                        userRole: "",
                        emailAdd: "",
                        userPass: "",
                        userProfile: "",
                    }
                }
            };
        },
        methods: {
            saveUser() {
                this.$store.dispatch("saveUser", this.model.user);
                setTimeout(() => {
                    console.log("Loading...");
                    location.reload();
                }, 500);
            },
        },
    };
</script>