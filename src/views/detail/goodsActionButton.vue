<template>
  <div id="action">
    <div class="actionTop">
      <div class="price">
        <s>￥{{ this.$store.state.detailBaseInfo.skuMaxPrice }}</s>
        <p>￥{{ this.$store.state.detailBaseInfo.skuMinPrice }}</p>
      </div>
      <van-goods-action-button
        color="#ccc"
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button color="#000" type="danger" text="立即购买" />
    </div>
    <div class="desc">
      <h4>{{ this.$store.state.detailBaseInfo.prodNm }}</h4>
      <p>{{ this.$store.state.detailBaseInfo.skuNm }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reqDate: "",
    };
  },
  created() {
    this.reqDate = this.$route.query;
  },
  methods: {
    addCart() {
      let param = {
        username: this.getCookie("login"),
        goods_id: this.reqDate,
        is_select: false,
      };

      this.$http.addCart(param, (res) => {
        if (res.code != 200) {
          this.$toast.fail("添加失败，请重新尝试~");
          return;
        }
        this.$toast.success("添加成功！");
      });
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
};
</script>

<style scoped>
#action {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  z-index: 100;
}
.actionTop {
  display: flex;
  padding: 5%;
  padding-bottom: 0px;
}
.actionTop .price s {
  font: 2.5vw/2.5vw "Gigi";
}
.actionTop .price p {
  font: 700 5vw/5vw "Gigi";
  color: #2189ff;
  margin: 0;
  padding-right: 10px;
}
.desc {
  padding-left: 5%;
  margin: 0;
}
.desc h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  min-height: 30px;
  line-height: 30px;
}
.desc p {
  margin: 0;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  color: #757575;
}
</style>