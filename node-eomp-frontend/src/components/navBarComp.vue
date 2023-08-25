<template>
<nav class="navbar sticky-top navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="https://i.postimg.cc/4xMB1Fpd/Screenshot-2023-08-23-122400-removebg-preview.png" width="100" height="80"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .navbar {
        background-color: #fbc0bd;
        height: 80px;
    }

    .nav-link {
        color: black !important;
        font-size: 25px;
        border-radius: 5px;
    }

    .nav-link:hover {
      background-color: black;
      color: white !important;
      transition: ease-out 0.3s;
    }

    /* .navbar-nav {
        padding-left: 34rem;
    } */

    @media screen and (max-width: 1300px) {
      .navbar-nav {
        padding-left: 2rem;
        height: auto;
      }
  }
    @media screen and (max-width: 990px) {
      .navbar-nav {
        padding-left: 2rem;
      }
      .navbar {
        height: auto;
      }

  }
    
</style>