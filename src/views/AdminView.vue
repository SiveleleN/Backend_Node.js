<template >
    <div>
      <div id="table">
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in $store.state.Products" :key="product.id">
       <td><img :src="product.prodImage" class="product-img-top" alt=""></td> 
        <td>{{ product.prodName }}</td>
        <td>R{{ product.prodAmount }}</td>
        <td>{{ product.prodQuantity }}</td> 
         <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
      </tr>
    </tbody>
  </table>
</div>
    
    </div>
        
   
</template>
<script>
export default {
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
<style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .edit-btn, .delete-btn {
            padding: 6px 10px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }
        .edit-btn {
            background-color: #4CAF50;
            color: white;
        }
        .edit-btn:hover {
            background-color: #45a049;
        }
        .delete-btn {
            background-color: #f44336;
            color: white;
        }
        .delete-btn:hover {
            background-color: #da190b;
        }
    </style>