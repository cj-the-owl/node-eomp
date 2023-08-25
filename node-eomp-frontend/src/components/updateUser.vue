<template>
    <div>
        <button class="btn" type="button" @click="editModal(user.userID)" data-bs-toggle="modal" :data-bs-target="'#editModal' + user.userID">Edit</button>
        <div class="modal fade" :id="'editModal' + user.userID" tabindex="-1" :aria-labelledBy="'ModalLabel' + user.userID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="ModalLabel">Edit</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.firstName">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.lastName">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userAge">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userRole">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.emailAdd">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userPass">
                        <input class="input" type="text" placeholder="User" name="name" v-model="editUser.userProfile">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click="updateUser(user.userID)">SAVE</button>
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
        margin-bottom: 5px;
    }

    .btn:hover {
        background-color: white;
        color: black;
    }
</style>

<script>
    export default {
        props: ["user"],
        data() {
            return {
                editUser: {
                    ...this.user,
                },
                editUserID: null,
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
                    },
                },
            };
        },
        computed: {
            currentUser() {
                return this.$store.state.user;
            },
        },
        methods: {
            editModal(userID) {
                this.editUserID = userID;
                this.editUser = {
                    ...this.$store.state.users.find(
                        (user) => user.userID === userID
                    ),
                };
            },
            updateUser(userID) {
                this.$store.dispatch("updateUser", {
                    userID: userID,
                    ...this.editUser,
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