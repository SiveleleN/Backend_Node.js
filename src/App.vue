<template>
  <NavBarComp/>
  <FooterComp/>
  <SpinnerComp/>
  <!-- <cardComp/> -->
  <router-view/>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
// import cardComp from './components/cardComp.vue'
export default{
  components : {
    FooterComp,
    NavBarComp,
    SpinnerComp,
    // cardComp
  }
}

</script>

<style >
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#app{
  background-color: beige;
  /* background-size: cover;

  background-repeat: no-repeat; 
  background-image: url(https://img.freepik.com/premium-photo/group-white-blank-unbranded-cosmetic-cream-jars-tubes-pink-background-skin-care-product-presentation-elegant-mockup-skincare-beauty-spa-jar-tube-with-copy-space-3d-rendering_429124-2274.jpg?w=996); */
    
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}



</style>
