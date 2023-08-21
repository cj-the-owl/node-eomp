<template>
  <nav-bar-comp/>
  <router-view/>
</template>

<script>
  import navBarComp from './components/navBarComp.vue';

  export default {
    components: {navBarComp}
  }
</script>

<style>
  body {
    background-color: #fbc0bd !important;
  }
</style>
