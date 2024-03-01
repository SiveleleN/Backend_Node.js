<template>
 <div class="row">
             
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
                    </template>
                </Card>
            </div>
</template>
<script>
 import Card from '@/components/cardComp.vue';
export default {
    components: {
            Card
        },
    computed: {
        fetchproduct() {
            this.$store.dispatch('fetchproduct', this.$route.params.id)
        }
    },
    mounted() {
        this.fetchproduct
    }
}
</script>

