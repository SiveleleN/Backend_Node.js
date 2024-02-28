<template>
  <div class="card">
      <div class="card-header">
          <slot name="cardHeader"></slot>
      </div>
      <div class="card-body">
          <slot name="cardBody"></slot>
      </div>
  </div>


</template>
<script>
  export default {
      name: 'CardView'
  }
</script>
<style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(27, 25, 25, 0.94);
    transition: box-shadow 0.3s ease;
    width: 100%;
    max-width:300px; 
    /* display: flex; */
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(226, 6, 6, 0.952);
  }

  .card-header,
   
  .card-body {
    padding: 1rem;

  }

  
</style>