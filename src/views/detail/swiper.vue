<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in this.$store.state.detailSwiper" :key="item"
        ><img :src="item" alt=""
      /></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fff;
}
.my-swipe .van-swipe-item img {
  width: 100%;
}
.van-swipe {
  height: auto !important;
}
</style>