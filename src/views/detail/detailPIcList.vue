<template>
  <div id="pic">
    <van-collapse v-model="activeNames" ref="detailPic">
      <van-collapse-item title="商品详情" name="1">
        <div
          class="picItem"
          v-for="item in this.$store.state.detailPicList"
          :key="item.srtIdx"
        >
          <img :src="item.imgUrl" alt="" />
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  created() {
    this.getPicList();
  },
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    getPicList() {
      this.$http.getPicInfo((res) => {
        this.$store.state.detailPicList =
          res.data.pdpspuDetailImagesInfoList.filter((item) => {
            return item.chCd === "2";
          });
      });
    },
  },
};
</script>

<style scoped>
/deep/.van-collapse-item__content {
  padding: 0;
}
.van-collapse-item__content img {
  width: 100%;
}
</style>