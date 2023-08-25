import { createStore } from 'vuex'
import axios from 'axios';
const baseUrl = "https://node-eomp-vbin.onrender.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    selectedProduct: null,
    users: null,
    user: null,
    asc: true,
    msg: null
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setSelectedProduct:(state, product) => {
      state.selectedProduct = product
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

    setUsers: (state, users) => {
      state.users= users;
    },
    setUser: (state, user) => {
      state.user= user;
    }, 

    setMsg: (state, msg) => {
      state.msg = msg;
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
    async fetchProduct(context) {
      try{
        let { data } = await axios.get(`${baseUrl}product`);
        context.commit("setProduct", data.results);
    } catch(e) {
      context.commit("setMsg", "eeeerrrrrrooorrr");
    }
  },
    async saveProduct(context, payload) {
      console.log("Done");
      try {
        const { res } = await axios.post(`${baseUrl}product`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", err);
        }  
    } catch (e) {
      context.commit("setMsg", "eeeerrrrrrorrr");
    }
  },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.put(`${baseUrl}product/${payload.prodID}`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (err) {
          console.log("eeeeerrrrorrrr: ", err);
          context.commit("setMsg", err);
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setMsg", "Updated Product");
        }
      } catch(e) {
        context.commit("setMsg", e);
      }
    },
    async deleteProduct(context, prodID) {
      console.log("done");
      try {
        const { res } = await axios.delete(`${baseUrl}product/${prodID}`);
        const { msg, err } = await res.data;
        if (err) {
          alert("eeerrrrrorrr, try again");
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", "eeeerrrrrorr");
        }
      } catch (e) {
        context.commit("setMsg", "eeeeeerrrrrorr")
      }
    },
    async fetchUsers(context) {
      try{
        let users = await (await fetch(baseUrl+"users")).json()
        if (users) {
          context.commit ("setUsers", users)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(e)
      }
    },
    // async fetchUsers(context) {
    //   try{
    //     const{ data } = await axios.get(`${baseUrl}users`); 
    //     context.commit("setUsers", data.results);
    //   }
    //   catch(e){
    //     context.commit("setMsg", "error errrrrrror")
    //   }
    // },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${baseUrl}user/:id`);
        context.commit("setMsg", data.results);
      } catch(e) {
        context.commit("setMsg", "eeeerrrrrrorrrr");
      }
    },
    async saveUser(context, payload) {
      console.log("Done");
      try {
        const { res } = await axios.post(`${baseUrl}user`, payload);
        console.log('response:', res);
        alert ('User was created')
        let {result,msg, err} = await res.data;
        if (result) {
          context.commit("setUser", result);
        } else {
          context.commit("setResponse", msg);
        }
      } catch (e) {
        console.error(e)
      }
    },
    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${baseUrl}user/${payload.userID}`, payload)
        console.log('Response:', res);
        alert ('User was edited')
        let { results, err} = await res.data;
        if (results) {
          context.commit('setUser', results[0])
        } else {
          context.commit('setResponse', err)
        }
      } catch(e) {
        console.error(e);
      }
    },
    async deleteUser({ commit, dispatch }, id) {
      try {
        await axios.delete(`${baseUrl}user/${id}`);
        commit('setResponse', 'User was deleted');
        alert ('User was deleted')
        dispatch('fetchUsers');
      } catch (e) {
        commit('setResponse', 'User did not delete');
      }
    },
  },
  modules: {
  }
})
