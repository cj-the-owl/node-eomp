<template>
  <div class="position-relative overflow-hidden text-center text-black" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3 mt-5">The Mystic Wok</h1>
      <router-link to="/products"><button class="btn fw-medium" id="shop-btn">View Products/Menu</button></router-link>
    </div>
  </div>


    <div class="p-2 m-2">
    <h3 class="text-center display-4" id="feat-prod-head">Home of the best asian-style cuisine!</h3>
    <div id="feat-prod">
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/ZKP0TNZ0/7-RECETAS-PARA-CENAS-LIGERAS-BARATAS-Y-F-CILES-DE-PREPARAR-EN-UN-MOMENTO.jpg">
      </div>
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/5tDf591Z/How-To-Make-Onigiri-4-Easy-Recipes-Pickled-Plum.jpg">
      </div>
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/tT7VJ4kw/download-2.jpg">
      </div>

      <div class="prod">
        <h2 class="display-4 text-black">About Us</h2><br>
        <p>Learn about the journey of the Mystic Wok and how it came to be</p>
        <router-link to="/about"><button class="btn">View More</button></router-link>
      </div>
      <div class="prod">
        <h2 class="display-4 text-black">Our Menu</h2><br>
        <p>View our menu filled with a variety of asian-style dishes at affordable prices</p>
        <router-link to="/products"><button class="btn">View More</button></router-link>
      </div>
      <div class="prod">
        <h2 class="display-4 text-black">Contact Us</h2><br>
        <p>We are always looking for feedback from our customers to improve! Be a part of that and send us a message</p>
        <router-link to="/contact"><button class="btn">View More</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  #hero {
    background-image: url(https://i.postimg.cc/tgG3jgxh/sushirestaurant-sushi-aesthetic-restaurant-cutesushiplace-sushilovers.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    height: 25rem;
    /* height: 100vh; */
    overflow: hidden;
    
  }

  #prod-img {
    height: 350px;
    width: 300px;
    border-radius: 5%;
  }

  #feat-prod {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 50px;
    
  }

  .prod {
    text-align: center;
  }
  .btn {
    background-color: black;
    color: white
  }

  #feat-prod-head {
    color: black;
  }

  /* responsiveness */

  @media screen and (max-width: 1000px) {

  }
</style>