<template>
    <div class="landing page">
    <div class="content">
        <div class="container-2">
              <h1 class="animated-heading">H & S SkinCare</h1>
        </div>
            <div class="container">
                <img src="https://r2.easyimg.io/4l17wbf5e/gettyimages-637130628-1-scaled.webp" alt="Description of image" class="image-small">
            </div>
          </div>
        </div>
</template>

<script>

</script>


<style scoped >
* {
    box-sizing: border-box;
}



a {
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}


.content {
    display: flex;
    flex-direction: column;
    align-items: center;
} 

.image-small {
    max-width: 60%; 
    height: auto; 
    display: block;
    margin-left: auto; 
    margin-right: auto;
    border-radius: 10%;
}

.container-2 {
 text-align: center;
 font-size: 30px;
  color: rgb(239, 89, 89);
}

.animated-heading {
  animation: slideIn 2s ease infinite alternate; 
}


@keyframes slideIn {
  0% {
    transform: translateY(-10px); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0); 
    opacity: 1; 
  }
}
</style>
