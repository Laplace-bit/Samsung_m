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
    <GoodsActionButton></GoodsActionButton>
    <DetailPicList></DetailPicList>
  </div>
</template>

<script>
import HeaderBar from "../../components/header.vue";
import DetailTab from "./detailTab.vue";
import Swiper from "./swiper.vue";
import DetailSku from "./detailSku.vue";
import GoodsActionButton from "./goodsActionButton.vue";
import DetailPicList from "./detailPIcList.vue";
export default {
  data() {
    return {};
  },
  created() {
    this.getSwiperData();
    this.getDetailBaseInfo();
    // 获取id
    let params = {
      proCd: this.$route.query.proCd,
      id: this.$route.query.proCd.split("/")[0],
    };
    this.$store.commit("getDetailId", params);
  },
  methods: {
    getSwiperData() {
      this.$http.getDetailSw((res) => {
        this.$store.state.detailSwiper = res.data;
      });
    },
    getDetailBaseInfo() {
      this.$http.getBaseInfo((res) => {
        this.$store.state.detailBaseInfo = res.data;
      });
    },
  },
  components: {
    HeaderBar,
    DetailTab,
    Swiper,
    DetailSku,
    GoodsActionButton,
    DetailPicList,
  },
};
</script>

<style scoped>
.van-row {
  display: flex;
  align-items: center;
}
#detail {
  padding-bottom: 108px;
}
</style>