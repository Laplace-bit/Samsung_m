<template>
  <div id="goodCard">
    <van-card
      num="2"
      price="2.00"
      origin-price="10.00"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #desc>
        <van-button plain type="default" size="mini" @click="openSku"
          >规格</van-button
        >
      </template>
      <template #tags>
        <div class="tags">
          <span>领取优惠券</span>
          <van-icon name="arrow" size="16" />
        </div>
      </template>
      <template #tag>
        <van-checkbox
          v-model="checked"
          checked-color="#ee0a24"
          shape="square"
          icon-size="16px"
        ></van-checkbox>
      </template>
      <template #num>
        <div class="btngroul">
          <van-icon name="minus" @click="increase" />
          <span>{{ cont }}</span>
          <van-icon name="plus" @click="reduce" />
        </div>
      </template>
      <GoodsSku></GoodsSku>
    </van-card>
  </div>
</template>
<script>
import GoodsSku from "./GoodsSku.vue";
export default {
  data() {
    return {
      cont: this.$store.state.showSku,
      checked: false,
    };
  },
  created() {
    this.getCartList();
  },
  methods: {
    getCartList() {},
    increase() {},
    reduce() {},
    openSku() {
      this.$store.commit("ShowSku");
    },
  },
  components: {
    GoodsSku,
  },
};
</script>

<style scoped>
.van-card__num {
  width: 100%;
  display: flex;
  align-items: center;
  justify-self: center;
}
.van-card__num .btngroul {
  font: 12px/16px "Gigi";
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 80%;
  width: 20%;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.van-card__tag {
  position: absolute;
  top: 40%;
  left: -10px;
}
.tags {
  display: flex;
  font-size: 14px;
  line-height: 16px;
  position: absolute;
  top: 0;
  right: 10px;
}
.van-card__title {
  font-size: 3.73vw;
}
.van-button {
  width: 100px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 3.46vw;
}
</style>