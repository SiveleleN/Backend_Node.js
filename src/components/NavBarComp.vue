<template>
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
      <router-link to="/products">Product</router-link>
      <router-link to="/singleProduct">ViewProduct</router-link>
      <router-link to="/Admin">Admin</router-link>
      <router-link to="/Contact">Contact</router-link>
    </nav>
  </template>
  

  <script>

</script>

<style scoped>
nav {
  padding: 40px 0;
  background-color: rgb(239, 239, 210);
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
 

}


.navbar {
  color: #343a40; /* Dark text color */
  
}

nav a{
  margin-right: 15px;
  font-weight: bold;
  text-decoration:none;
  padding:30px;
 
}

nav a:hover {
  color: rgb(184, 97, 97); /* Blue color on hover */
  background-color:rosybrown;
  border-radius: 50px;
  
}




</style>