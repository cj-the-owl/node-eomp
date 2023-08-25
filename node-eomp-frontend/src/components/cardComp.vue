<template>
    <div v-if="product">
        <img :src="product.prodUrl" :alt="product.prodName">
        <h2>{{product.prodName}}</h2>
        <p>{{product.amount}}</p>
    </div>
    <div v-else>
        <spinner/>
    </div>
        

</template>

<script>

import spinner from '@/components/SpinnerComponent.vue'

export default {
    props: ["product"], 

    components:{
        spinner
    },

    computed:{
        product(){
            return this.$store.state.selectedProduct; 
        },
    },
}
</script>