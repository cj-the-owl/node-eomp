<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="#"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products/Menu</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="">Admin</router-link>
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
    }

    .navbar-nav {
        padding-left: 34rem;
    }

    
    
</style>