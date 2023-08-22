<template>
    <div class="position-relative overflow-hidden text-center text-black" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3">Contact Us</h1>
    </div>
  </div>

  <div class="row-align-items-md-stretch">

<div class="col-md-6">
  <div class="h-100 p-5 m-4 rounded-3">
    <img src="#">
    <p>this will be for an image</p>
  </div>
</div>

<div class="col-md-6">
  <div class="h-100 p-5 m-4 text-dark rounded-3">
    <h3>Send us some feedback</h3>
    <input class="form control" type="text" placeholder="Full name here">
    <input class="form control" type="text" placeholder="Email here">
    <textarea class="form control" type="text" placeholder="Your message"></textarea>
    <button class="btn">Submit here</button>
  </div>
</div>

</div>
</template>

<style scoped>
    #hero {
    background-color: #C4FF86;
  }

  .row-align-items-md-stretch {
    display: grid;
    grid-template-columns: auto auto;
  }


</style>