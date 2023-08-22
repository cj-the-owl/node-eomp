<template>
  <div class="position-relative overflow-hidden text-center text-black" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3">The Mystic Wok</h1>
      <router-link to="/products"><button class="btn fw-medium" id="shop-btn">View Products/Menu</button></router-link>
    </div>
  </div>

  <div class="p-2 m-2">
    <h3 class="text-center display-4" id="feat-prod-head">Some of of our products!</h3>
    <div id="feat-prod">
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/ZKP0TNZ0/7-RECETAS-PARA-CENAS-LIGERAS-BARATAS-Y-F-CILES-DE-PREPARAR-EN-UN-MOMENTO.jpg">
        <router-link to="/products"><button class="btn">View More</button></router-link>
      </div>
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/5tDf591Z/How-To-Make-Onigiri-4-Easy-Recipes-Pickled-Plum.jpg">
        <router-link to="/products"><button class="btn">View More</button></router-link>
      </div>
      <div class="prod">
        <img class="p-2" id="prod-img" src="https://i.postimg.cc/tT7VJ4kw/download-2.jpg">
        <router-link to="/products"><button class="btn">View More</button></router-link>
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
    background-color: #C4FF86;
    /* background-image: url(https://i.postimg.cc/MpCNhptz/Free-Vector-Hand-drawn-japanese-food-background-removebg-preview.png); */
    background-repeat: no-repeat;
    background-size:contain;
    /* height: 100vh; */
    overflow: hidden;
    
  }

  #prod-img {
    height: 450px;
    width: 400px;
    border-radius: 5%;
  }

  #feat-prod {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 30px;
  }

  .btn {
    background-color: black;
    color: white
  }

  #feat-prod-head {
    color: black;
  }
</style>