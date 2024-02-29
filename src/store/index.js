import { createStore } from "vuex";
import axios from "axios";
import sweet from "sweetalert";
const base_URL ="https://backend-node-js-ekdl.onrender.com"


export default createStore({
  state: {
    Admin: null,
    Products: null,
    SingleProduct: null,
  },
  getters: {},
  mutations: {
    setAdmin(state, data) {
      state.Admin = data;
    },
    setProducts(state, data) {
      state.Products = data;
    },
    setSingleProducts(state, data) {
      state.SingleProduct = data;
    },
  },
  actions: {
    async fetchproducts({ commit }) {
      
      try {
        const { data } = await axios.get(`${base_URL}/products`);
        console.log(data.result);
        if (data) {
          commit("setProducts", data.result);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error appeared while retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },
    async  fetchproduct({commit},prodID){
        const { data } = await axios.get(`${base_URL}/products/${prodID}`);
        console.log(data.result);
        if (data) {
          commit("setSingleProducts", data.result);
        }
    }
  },
  modules: {},
});


























