<template>
  <div id="goodCard">
    <van-card
      :num="item.goodsNum"
      :price="item.minPrice"
      :origin-price="item.maxPrice"
      :title="item.skuNm"
      :thumb="imgArr[index] | imgfilter"
      v-for="(item, index) in this.$store.state.userCartData"
    >
      <template #desc>
        <van-button plain type="default" size="mini" @click="openSku">{{
          item.skuNm | Specifications
        }}</van-button>
      </template>
      <template #tag>
        <van-checkbox
          v-model="item.isSelect"
          checked-color="#0075de"
          shape="square"
          icon-size="16px"
          @click="changeChecked(index)"
        ></van-checkbox>
      </template>
      <template #num>
        <div class="btngroul">
          <van-icon name="minus" @click="reduce(item.goods_id)" />
          <span>{{ item.goodsNum }}</span>
          <van-icon name="plus" @click="increase(item.goods_id)" />
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
      imgArr: [],
      CartRes: [],
      user: "",
      cont: this.$store.state.showSku,
      checked: false,
    };
  },
  filters: {
    Specifications(val) {
      if (!val) return;
      let arr = val.split(" ");
      return arr[arr.length - 1];
    },
    imgfilter(val) {
      if (!val) return;
      return val.split(",")[0];
    },
  },
  created() {
    this.user = this.getCookie("login");
    this.$http.getCartId({ username: this.user }, (res) => {
      this.$store.commit("updateUserCart", res);
      this.makeData();
    });
  },
  methods: {
    changeChecked(id) {
      this.$store.commit("changeChecked", id);
    },
    makeData() {
      this.$store.state.userCart.forEach((item, index) => {
        let id = item.goods_id.split("/")[0];
        let longId = item.goods_id.split("/")[1];
        let obj = {};
        this.$http.getBaseInfo({ id: id, longId: longId }, (res) => {
          this.CartRes.push({
            skuNm: res.data.skuNm,
            maxPrice: res.data.skuMaxPrice,
            minPrice: res.data.skuMinPrice,
            goodsNum: item.goods_num * 1,
            goods_id: item.goods_id,
            isSelect: false,
          });
        });
        this.$http.getColorInfo({ id: id, longId: longId }, (res) => {
          let imgUrl = res.data.pdpSkuImagesInfoList[0].imgUrl;
          this.imgArr.push(imgUrl);
        });
      });
      this.$store.commit("updateUserCartData", this.CartRes);
    },
    increase(id) {
      this.$store.commit("updateNumAdd", id);
    },
    reduce(id) {
      this.$store.commit("updateNumReduce", id);
    },
    openSku() {
      this.$store.commit("ShowSku");
    },
    // 获取cookie
    getCookie(key) {
      let c = document.cookie;
      let arr = c.split("; ");
      let obj = {};
      arr.forEach((item) => {
        let a = item.split("=");
        obj[a[0]] = a[1];
      });
      if (key) return obj[key];
      return obj;
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