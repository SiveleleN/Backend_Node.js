<template>
 <div class="row" v-if="$store.state.Products ">
                <Card v-for="product in $store.state.SingleProduct" :key="product.prodID">
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
                        <router-link :to="{name: 'singleProduct', params: {id: product.prodID}}">View More</router-link>
                    </template>
                </Card>
            </div>
</template>
<script>

export default {
  
    computed: {
        fetchproduct() {
            this.$store.dispatch('fetchproduct', this.$route.params.prodID)
        }
    },
    mounted() {
        this.fetchproduct
    }
}
</script>

