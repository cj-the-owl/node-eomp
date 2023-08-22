<template>
  <nav-bar-comp/>
  <router-view/>
  <footer-comp/>
</template>

<script>
import FooterComp from './components/footerComp.vue';
  import navBarComp from './components/navBarComp.vue';

  export default {
    components: {navBarComp, FooterComp}
  }
</script>

<style>
  body {
    background-color: #fbc0bd !important;
    font-family: 'Nerko One', cursive;
  }
</style>
