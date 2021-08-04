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

<style scoped>
#register {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.top {
  padding: 0 8%;
}
</style>