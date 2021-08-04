<template>
  <div id="detail">
    <van-row>
      <van-col span="2">
        <van-icon name="arrow-left" size="30px" />
      </van-col>
      <van-col span="22">
        <template>
          <HeaderBar></HeaderBar>
        </template>
      </van-col>
    </van-row>
    <DetailTab></DetailTab>
    <Swiper></Swiper>
    <DetailSku></DetailSku>
  </div>
</template>

<script>
import HeaderBar from "../../components/header.vue";
import DetailTab from "./detailTab.vue";
import Swiper from "./swiper.vue";
import DetailSku from "./detailSku.vue";
export default {
  components: {
    HeaderBar,
    DetailTab,
    Swiper,
    DetailSku,
  },
};
</script>

<style scoped>
.van-row {
  display: flex;
  align-items: center;
}
</style>