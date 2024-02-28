<template>
    <div class="container">
        <h1>ABOUT US</h1>
          <img src="https://r2.easyimg.io/98k0e4jft/6-25_innovativeskincare_oilcontrolsheetmask_us_v2_05.gif" alt="Description of image" class="image-small">
     <p>Welcome to H & S Skincare, where beauty meets science to bring you innovative skincare solutions for radiant and healthy skin.<br> <br>
        We understand that everyone's skin is unique, and that's why we offer a diverse range of products designed to address various skin concerns. Whether you're looking to combat acne, reduce the appearance of fine lines and wrinkles, or achieve a brighter, more even complexion, we have the perfect solution for you.
        <br><br>
        Customer satisfaction is our top priority, and we strive to provide an exceptional skincare experience from start to finish. From our user-friendly website to our dedicated customer support team, we are here to help you achieve your skincare goals and unleash your skin's natural beauty.
        <br><br>
        Join the H & S Skincare community today and discover the transformative power of science-driven skincare. Experience the difference with our innovative formulas, trusted expertise, and commitment to excellence.
     </p>
    </div>
    <!-- <h2>Our Team</h2>
    <div class="slideshow-container">
    <img src="https://i.postimg.cc/WbqFsCf4/09436-notw6-In-Cosmetics.jpg" alt="Description of image 1" class="image-big">
    <img src="https://i.postimg.cc/yx0GTQ9c/apn-18issue4-05.jpg" alt="Description of image 2" class="image-big">
    <img src="https://i.postimg.cc/C1sDHb5d/01-formulating-service-consultation.jpg" alt="Description of image 2" class="image-big">
</div> -->

</template>


<script>

</script>


<style scoped>


img{
   width: 30%;
   margin-left: 10%;
   animation: slideIn 1s ease-in;
   border-radius: 10%;
  
}


h1{
    text-align: center ;
    font-size: 50px;
    color: rgb(239, 89, 89);
    animation: fadeIn 2s ease-in ;
}
@keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

p{
    /* margin-bottom: 100%; */
    transform: translateY(-450px);
    margin-left: 50%;
    font-size: 20px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    /* height: 100vh; */
    animation: fadeIn 1s ease-in;
    color:indianred
    }
    @keyframes slideIn {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    /* .image-big{
        transform: translateY(-2050px);
       
    }

    .slideshow-container {
        position: relative;
        max-width: 90%;
        margin: auto;
    }

    .image-big {
        width: 60%;
        height: auto;
        position: absolute;
        opacity: 0;
        animation: fadeIn 20s infinite;
    }

    @keyframes fadeIn {
        0%, 33.33% {
            opacity: 0;
        }
        16.67%, 50% {
            opacity: 1;
        }
        83.33%, 100% {
            opacity: 0;
        }
    }
    h2{
        text-align: center;
        transform: translateY(-2050px);
        font-size: 60px;
       color: lightcoral;

    } */
</style>
