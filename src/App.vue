<template class="bgcolor">
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
    model: "history",
    components: {},
  };
</script>

<style>
  .bgcolor {
    background: #f7f7f7;
  }
</style>