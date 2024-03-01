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
        console.log(data);
        if (data) {
          commit("setProducts", data.results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occured while retrieving products.",
          icon: "error",
          timer: 2000,
        //If an error occurs, show a message saying "An error occurred while retrieving products" with an error icon for 2 seconds.
        });
      }
    },
    async  fetchproduct({commit},prodID){
        const { data } = await axios.get(`${base_URL}/products/${prodID}`);
        console.log(data);
        if (data) {
          commit("setSingleProducts", data.result);
        }
    }, 
    async deleteproduct({commit},prodID){
      await axios.delete(`${base_URL}/products/delete/${prodID}`)
      window.location.reload()
    },
    async addproduct({commit},prodID){
      await axios.post(`${base_URL}/products/addProduct/${prodID}`)
      window.location.reload()
      //reloads the page 
    },
    async editproduct({dispatch},prodID){
      await axios.patch(`${base_URL}/products/update/${prodID}`)
      await dispatch(fetchproducts)
      console.log(update)
      window.location.reload()
    },
    async fetchSortedProducts({ commit}, sortByPrice) {
      commit( 'SET_PRODUCT', sortedProducts);
    },
    async fetchSearchedProducts({ commit}, searchQuery) {
      commit( 'SET_PRODUCT', searchProducts);
    },
  },
  modules: {},
});


























