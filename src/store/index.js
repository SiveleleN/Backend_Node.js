import { createStore } from 'vuex'
const base_URL ='https://backend-node-js-ekdl.onrender.com/products'
import axios from 'axios'
import sweet from 'sweetalert'




export default createStore({
  state: {
    Admin:null,
    Products:null,
    SingleProduct:null

  },
  getters: {
  },
  mutations: {
    setAdmin(state,Admin){
      state.Admin = Admin;
    },
    setProducts(state,data){
      state.Products = data;
    }
  },

  actions: {
    // async fetchAdmin(context){
    //   try{
    //     let result = await fetch(base_URL + "/admin/products")
    //     let results = await result.json()
    //     console.log(results)
    //     let Admin = results.Admin
    //     console.log(Admin)
    //     if(Admin){
    //       context.commit("setAdmin", Admin)
    //     } else{
    //       console.log("ERROR")
    //     }
    //   } catch(e){

    // }
    async fetchproducts({commit}) {
     try{
       let {data} = await axios.get(base_URL)

       console.log(data.result);
       if(data) {
        commit('setProducts', data.result)
       }
     }catch(e) {
       sweet({
         title: 'Error',
         text: 'An error appeared while retrieving products.',
         icon: "error",
         timer: 2000
       })
     }
   }
     },
  

  modules: {

  }

})