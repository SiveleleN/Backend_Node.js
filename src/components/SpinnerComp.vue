<template >
    <div>
        <div v-if="!loaded" class="loader">
      <div class="loader-spinner"></div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        loaded: false // Initial state: page not loaded
      };
    },
    mounted() {
      // Simulate a 5-second delay before displaying content
      setTimeout(() => {
        // Set loaded to true after 2 seconds
        this.loaded = true;
      }, 2000);
    }
  }

    
</script>
<style >
    /* CSS styles for the Spinner*/
    .loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3333;
}


.loader-spinner {
  border: 6px dashed #b3412d;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite; 
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>