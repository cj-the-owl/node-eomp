import { createStore } from 'vuex'
const baseUrl = "node-eomp-vbin.onrender.com";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    asc: true
  },
  getters: {
  },
  mutations: {
    setProducts: (state, value) => {
      state.products = value
    },
    ssetProduct: (state, value) => {
      state.product = value;
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },

    setUsers: (state, value) => {
      state.users= value
    }
  },
  actions: {
    async fetchProducts(context) {
      try{
        let products = await (await fetch(baseUrl+"products")).json()
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
    async fetchProduct(context, id) {
      try{
        let product = await (await fetch(baseUrl+"/products/id")).json()
        if (product) {
          context.commit ("setProduct", product)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(e)
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
