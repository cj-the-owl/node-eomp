<template>
    <div class="position-relative overflow-hidden text-center text-black" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3">Contact Us</h1>
    </div>
  </div>

  <div class="row-align-items-md-stretch">

<div class="col-md-6">
  <div class="h-100 p-5 m-4 rounded-3 text-center">
    <img id="logo-img" src="https://i.postimg.cc/4xMB1Fpd/Screenshot-2023-08-23-122400-removebg-preview.png">
    <p class="fs-5">314 Imam Haron Road Lansdowne Cape Town</p><br>
    <!-- <p class="fs-5">021 705 4269</p> -->
  </div>
</div>

<div class="col-md-6">
  <div class="h-100 p-5 m-4 text-dark rounded-3">
    <form action="https://formspree.io/f/xrgwqlqa" method="POST">
  <div class="col-6 fs-5">
        <input type="text" class="form-input" id="fullName" name="fullName" placeholder="Name & Surname Here" required>
    </div>
    <div class="col-12 fs-5">
        <input type="text" class="form-input" id="Email" name="Email" placeholder="Email" required>
    </div>
    <div class="col-12 fs-5">
        <textarea type="text" class="form-input" id="Message" name="Message" placeholder="Your message here..." required></textarea>
    </div>
    <div class="col-12">
        <button type="submit" class="btn" id="submit-btn">Submit!</button>
    </div>
</form>  
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
    justify-content: center;
  }

  .form-input {
    height: 40px;
    border-radius: 5px;
  }

  #Email, #Message, #fullName {
    width: 25rem;
      
  }

  #Message {
    height: 150px;
  }

  #submit-btn {
    width: 25rem;;
    background-color: black;
    color: white;
  }

  .col-12 {
    padding-top: 10px;
  }

  .col-md-6 {
    width: 100%;
  }

  #logo-img {
    width: 270px;
    height: 250px;
  }


</style>