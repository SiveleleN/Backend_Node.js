<template >
    <footer>
        <p>&copy; {{ currentYear }} H & S</p>
    </footer>
</template>

  <script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};

</script>
<style scoped>
   
footer {
  background-color: #faf7f7;
  color: rgb(0, 0, 0);
  text-align: center;
  position: fixed;
  bottom: 0%;
  width: 100%;
  height:5%;
}


</style>