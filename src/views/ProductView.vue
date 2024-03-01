<template>
        <div class="container">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search product by name" class="form-control">
                    <button class="button btn-primary">Search</button>
                </div>
                <div custom-btn>
                    <input v-model="searchQuery" type="text" placeholder="Search product by name" class="form-control">
                      <button class="btn btn-success custom-btn" @click="Sorting">
                      Sorting by price
                     </button>

                    </div>
            </div>
            <div class="row" v-if="$store.state.Products ">
                <Card v-for="product in $store.state.Products" :key="product.prodID">
                    <!--Display a card for each product in the store.-->
                    <template #Header>
                        <img :src="product.prodImage" class="product-img-top" alt="">
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>
                    <!-- /*Template for displaying product image and name. */ -->
                    <template #Body>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Quantity: {{ product.prodQuantity }}
                        </p>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Amount: R{{ product.prodAmount }}
                        </p>
                        <div class="view-more">
                             <router-link :to="{name: 'singleProduct', params: {id: product.prodID}}">View More</router-link>
                             <!--Link to view details of a single product.-->
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </template>
    <script>
    import Card from '@/components/cardComp.vue';
   //imports the card components
    export default {
        name: 'ProductView',
        components: {
            Card
        },
        data() {
            return {
                searchQuery: '',
                sortByPrice: false,
        };
        },
        methods:{
        fetchproducts() {      
            this.$store.dispatch('fetchproducts')
        },
        // fetchproduct(prodID){
        //     this.$store.dispatch('fetchproduct', prodID)
        // },
        Sorting() {
            this.sortByPrice = !this.sortByPrice;
            this.$store.dispatch('fetchSortedProducts', this.sortByPrice);
        },
        search() {
            this.$store.dispatch('fetchSearchedProducts', this.searchQuery);
        }
       
    },
        mounted() {
            this.fetchproducts()
       
        }
    }
    
    </script>
    <style scoped>
   .custom-btn {
    background-color: rgb(222, 216, 103);
    color: white;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    
}

.custom-btn:hover {
    background-color: darkgreen;
    border-color: white;
   

}
.row{
   
   display: flex;
}

.button {
        
            color: white;
           
            background-color: #007bff;
         
            padding: 10px 20px;
            
            border-radius: 5px;
       
            border: none;
          
            cursor: pointer;
            
            font-size: 16px;
/* 
            text-align: right; */
        }
    
        .button:hover {
          
            background-color: #0056b3;
        }
     
        .button:active {
       
            background-color: #004d99;
        }

        .view-more {
  background-color: #c070a6;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  text-decoration: none; 
  cursor: pointer;
  display: inline-block; 
  transition: background-color 0.3s; 
}

.view-more:hover {
  background-color: #97ccdd;
}
 
    </style>