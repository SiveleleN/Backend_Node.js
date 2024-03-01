<template>
  <div class="card">
      <div class="header">
          <slot name="Header"></slot>
          <!---This creates a section where you can put stuff named "Header".-->
      </div>
      <div class="body">
          <slot name="Body"></slot>
          <!---This creates a section where you can put stuff named "Header".-->
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
    margin-top: 4%;
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(226, 6, 6, 0.952);
  }

  .header,
   
  .body {
    padding: 1rem;

  }

  
</style>