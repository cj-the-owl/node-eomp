import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    users: null
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    ssetProduct: (state, product) => {
      state.product = product;
    }
  },
  actions: {
    async fetchProducts(context) {
      try{
        let products = await (await fetch("https://sixth-zp4e.onrender.com/products")).json()
        if (products) {
          context.commit ("setProducts", products)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    },
    async fetchProduct(context) {
      try{
        let product = await (await fetch("https://sixth-zp4e.onrender.com/products/:id")).json()
        if (product) {
          context.commit ("setProduct", product)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    },
    async fetchUsers(context) {
      try{
        let users = await (await fetch("https://hosted-api-nj1b.onrender.com/users")).json
        if (users) {
          context.commit ("setUser", users)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
