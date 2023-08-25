import { createStore } from 'vuex'
import axios from 'axios';
const baseUrl = "https://node-eomp-vbin.onrender.com/";
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
    setProducts: (state, values) => {
      state.products = values
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
        console.error(e)
      }
    },
    async fetchProduct(context, id) {
      try{
        let product = await (await fetch(baseUrl+"products/:id")).json()
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
    async saveProduct(context, payload) {
      console.log("Done");
      try {
        const { res } = await axios.post(`${baseUrl}product`, payload);
        console.log('response:', res);
        alert ('Product was created')
        let {result,msg, err} = await res.data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          context.commit("setResponse", msg);
        }
      } catch (e) {
        console.error(e)
      }
    },
    async updateProduct(context, payload) {
      try {
        const res = await axios.put(`${baseUrl}product/${payload.prodID}`, payload)
        console.log('Response:', res);
        alert ('Product was edited')
        let { results, err} = await res.data;
        if (results) {
          context.commit('setProduct', results[0])
        } else {
          context.commit('setResponse', err)
        }
      } catch(e) {
        console.error(e);
      }
    },
    async deleteProduct({ commit, dispatch }, id) {
      try {
        await axios.delete(`${baseUrl}product/${id}`);
        commit('setResponse', 'Product was deleted');
        alert ('Product was deleted')
        dispatch('fetchProducts');
      } catch (e) {
        commit('setResponse', 'Product did not delete');
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
        console.error(e)
      }
    }
  },
  modules: {
  }
})
