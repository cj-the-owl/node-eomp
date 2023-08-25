<template>
  <div class="position-relative overflow-hidden text-center" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3">About Our Establishment</h1>
    </div>
  </div>

  <div class="container py-4">
    <div class="row-align-items-md-stretch">
      
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <h3>Our Journey</h3>
          <p>Nestled in the heart of Lansdowne, Mystic Wok  has been serving authentic Asian delicacies for over 2 years. Our journey began when our founders, Caryn Lodewyk and Timothy Barry, wanted to bring the rich tapestry of Asian flavors to Cape Town. What started as a small eatery has now blossomed into a culinary landmark, known for its exquisite dishes and exceptional service.</p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img id="img-1" src="https://i.postimg.cc/6pmqfk3S/sushirestaurant-sushi-aesthetic-restaurant-cutesushiplace-sushilovers-1.jpg">
        </div>
      </div>
    </div>
    <div class="row-align-items-md-stretch">

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img id="img-2" src="https://i.postimg.cc/wM7bLRbn/Musashi-Japanese-Cuisine-North-Shore-City-New-Zealand.jpg">
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <h3>Authentic Asian Flavors</h3>
          <p>At the Mystic Wok, we pride ourselves on delivering a genuine taste of Asia. Our menu is a celebration of flavors from countries such as Japan, China, Thailand, Vietnam, and more. Every dish is crafted with passion, using traditional recipes handed down through generations, ensuring an authentic dining experience.</p>
        </div>
      </div>

    </div>

    <div class="row-align-items-md-stretch">
      
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <h3>The Mystic Wok Experience</h3>
          <p>Dining at [Restaurant Name] is not just about food—it's an experience. The moment you step through our doors, you're transported to a world of aromatic spices, mesmerizing flavors, and the timeless traditions of Asia. Our interiors, inspired by traditional Asian architecture, combined with soulful background melodies, create a serene and intimate atmosphere, perfect for families, couples, and corporate gatherings..</p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img id="img-3" src="https://i.postimg.cc/t4ywmJ1n/download-3.jpg">
        </div>
      </div>
    </div>


  </div>

  <div class="position-relative overflow-hidden text-center" id="hero">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-3">Meet our founders</h1>
    </div>
  </div>

  <div class="row-align-items-md-stretch">
      
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <p class="text-black">The Mystic Wok, a captivating Asian cuisine restaurant, bears the creative marksmanship of its founders, Timothy Barry and Caryn Lodewyk. With a shared ardor for the culinary arts and a profound admiration for the diverse tastes of Asia, Timothy and Caryn embarked on a flavorful journey to bring their vision to life. Drawing inspiration from their individual backgrounds, Timothy's culinary prowess and Caryn's background in hospitality management merged seamlessly, resulting in a dining experience that's a harmonious symphony of flavors and ambiance.</p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img class="img-4" src="https://i.postimg.cc/zGQ2NJRC/C12-C1-Caryn-Lodewyk-1.jpg">
        </div>
      </div>
    </div>
  <div class="row-align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 m-4 rounded-3">
          <img class="img-5" src="https://i.postimg.cc/8z64GRXv/C12_Timothy_Barry_(1).jpg">
        </div>
      </div>

      <div class="col-md-6">
        <div class="h-100 p-5 m-4 text-dark rounded-3">
          <p class="text-black">Timothy Barry, a seasoned chef with a background rooted in the intricacies of Asian cooking techniques, lends his expertise to craft dishes that reflect his reverence for tradition while also incorporating innovative twists. On the other hand, Caryn Lodewyk, armed with a wealth of experience in creating memorable guest experiences, ensures that The Mystic Wok is not just a restaurant, but a welcoming haven where patrons can immerse themselves in the rich culinary heritage of Asia. Together, their shared passion and dedication have birthed a culinary gem where artistry, taste, and culture converge, inviting guests to savor every bite while embracing the mystique of Asian gastronomy.</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
  #hero {
    background-color: black;
    color: white;
  }

  .row-align-items-md-stretch {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #img-1, #img-2, #img-3 {
    height: 320px;
    width: 350px;
  }

  .img-4, .img-5 {
    height: 350px;
    width: 350px;
  }

  /* Responsiveness */

  @media screen and (max-width: 900px) {
    .row-align-items-md-stretch {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #img-1, #img-2, #img-3 {
    height: 320px;
    width: 350px;
  }

  .img-4, .img-5 {
    height: 250px;
    width: 250px;
  }

  }
  @media screen and (max-width: 800px) {
    .row-align-items-md-stretch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #img-1, #img-2, #img-3 {
    height: 270px;
    width: 300px;
  }

  .img-4, .img-5 {
    height: 200px;
    width: 200px;
  }

  }
  @media screen and (max-width: 400px) {
    .row-align-items-md-stretch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #img-1, #img-2, #img-3 {
    height: 120px;
    width: 150px;
  }

  .img-4, .img-5 {
    height: 150px;
    width: 150px;
  }

  }
</style>
