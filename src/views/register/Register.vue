<template>
  <div id="register">
    <div class="top">
      <HeaderLogo></HeaderLogo>
    </div>
    <div class="center">
      <RegisterInfo></RegisterInfo>
    </div>
  </div>
</template>

<script>
import HeaderLogo from "./headerLogo.vue";
import RegisterInfo from "./registerInfo.vue";
export default {
  components: { HeaderLogo, RegisterInfo },
};
</script>

<style>
html,
body,
#app {
  height: 100% !important;
  margin: 0;
  padding: 0;
  background-color: #000;
}

#register {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.top {
  padding: 0 8%;
}
</style>