<template >
    <div>
      <div id="table">
  <table>
    <thead>
      <tr> 
        <th>ID</th>
          <th>Name</th>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
      
      </tr>
    </thead>
    
    <tbody>
      <tr v-for="product in $store.state.Products" :key="product.id">
        <td>{{ product.prodID}}</td>
       <td><img :src="product.prodImage" class="product-img-top" alt=""></td> 
        <td>{{ product.prodName }}</td>
        <td>R{{ product.prodAmount }}</td>
        <td>{{ product.prodQuantity }}</td> 
        <button class="edit-btn" @click="editproduct(prodID, prodName, prodAmount)">Edit</button>
                <button class="delete-btn" @click="deleteproduct(product.prodID)">Delete</button>
      </tr>
    </tbody>
  </table>
</div>
    
    </div>
    <tbody>
      
        <tr>
            <td>
                <input 
                    type="text"
                    placeholder="Product ID"
                    name="product_"
                    required 
                    v-model="productPrice"
                ><br>
                </td>
    <td>
        <input 
            type="text"
            placeholder="Product Name"
            name="product_name"
            required 
            v-model="productName"
        >
    </td>
    <td>
        <input 
            type="text"
            placeholder="Product Amount"
            name="product_amount"
            required 
            v-model="productAmount"
        >
    </td>
    <td>
        <input 
            type="text"
            placeholder="Product Price"
            name="product_price"
            required 
            v-model="productPrice"
        >
    </td>
    <td>
        <input 
            type="text"
            placeholder="Product Quantity"
            name="product_Quantity"
            required 
            v-model="productQuantity"
        >
    </td> 
</tr>
   <button @click="submitData">Sumbit</button>
       </tbody>
        
   
</template>
<script>
export default {
  methods:{
        fetchproducts(){          
                    this.$store.dispatch('fetchproducts')
                    },
            deleteproduct(id){
                    this.$store.dispatch('deleteproduct',id)
                    },
           editproduct(prodID, prodName, prodAmount) {
                let edit = {
                    prodID: prodID,
                    prodName: prodName,
                    prodAmount: prodAmount,
                }
                    this.$store.dispatch('editproduct', edit)
                    console.log(editproduct())
        },
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