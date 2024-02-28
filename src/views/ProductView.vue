<template>
        <div class="container">
            <div class="row">
                <div class="col">
                    <input type="text" placeholder="Search product by name" class="form-control">
                </div>
                   <button class="btn btn-success custom-btn" @click="toggleSorting">
                      Sorting by price
                 </button>
            </div>
            <div class="row" v-if="$store.state.Products">
                <Card v-for="product in $store.state.Products" :key="product.prodID">
                    <template #cardHeader>
                        <img :src="product.prodImage" class="car-img-top" alt="">
                        <h4 class="card-title">{{ product.prodName }}</h4>
                    </template>
                    <template #cardBody>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Quantity: {{ product.prodQuantity }}
                        </p>
                        <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                            Amount: R{{ product.prodAmount }}
                        </p>
                        <router-link :to="{name: 'singleProduct', params: {id: product.prodID}}">View More</router-link>
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
    /* margin-right: 100%; */
}

.custom-btn:hover {
    background-color: darkgreen;
    border-color: white;

}
.row{
   
   display: flex;
}


 
    </style>