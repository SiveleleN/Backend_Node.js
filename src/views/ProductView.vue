<template>
        <div class="container">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search product by name" class="form-control">
                    <button class="button btn-primary">Search</button>
                </div>
                <div>
                      <button class="btn btn-success custom-btn" @click="Sorting">
                      Sorting by price
                     </button>

                    </div>
            </div>
            <div class="row" v-if="$store.state.Products ">
                <Card v-for="product in $store.state.Products" :key="product.prodID">
                    <template #Header>
                        <img :src="product.prodImage" class="product-img-top" alt="">
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>
                    <template #Body>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Quantity: {{ product.prodQuantity }}
                        </p>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Amount: R{{ product.prodAmount }}
                        </p>
                        <router-link @click="fetchproduct(product.prodID)" :to="{name: 'singleProduct', params: {id: product.prodID}}">View More</router-link>
                    </template>
                </Card>
            </div>
        </div>
    </template>
    <script>
    import Card from '@/components/cardComp.vue';
    export default {
        name: 'ProductView',
        components: {
            Card
        },
        methods:{
        fetchproducts(){      
            this.$store.dispatch('fetchproducts')
        },
        fetchproduct(prodID){
            this.$store.dispatch('fetchproduct', prodID)
        }

        },
        mounted() {
            this.fetchproducts()
       
        },
        
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
            /* Button text color */
            color: white;
            /* Button background color */
            background-color: #007bff;
            /* Padding around the button text */
            padding: 10px 20px;
            /* Border radius for rounded corners */
            border-radius: 5px;
            /* Border around the button */
            border: none;
            /* Cursor style on hover */
            cursor: pointer;
            /* Font size */
            font-size: 16px;
        }
        /* Hover effect */
        .button:hover {
            /* Darken the background color on hover */
            background-color: #0056b3;
        }
        /* Active effect */
        .button:active {
            /* Slightly darken the button when clicked */
            background-color: #004d99;
        }

 
    </style>