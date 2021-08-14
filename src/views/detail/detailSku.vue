<template>
  <div id="detailSku">
    <van-row class="firstRow">
      <van-col span="6" offset="1"
        >￥{{ this.$store.state.detailBaseInfo.skuMinPrice }}</van-col
      >
      <van-col span="17"
        ><s>￥{{ this.$store.state.detailBaseInfo.skuMaxPrice }}</s></van-col
      >
    </van-row>
    <van-row>
      <van-col span="5" offset="1">商城优势</van-col>
      <van-col span="18" class="advantage">
        <div data-v-f4320808="" class="pdp-product-yh-v">
          <span data-v-f4320808=""
            ><img data-v-f4320808="" src="" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >以旧换新</span
            ></span
          ><span data-v-f4320808=""
            ><img data-v-f4320808="" :src="iconurl" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >分期0利率</span
            ></span
          ><span data-v-f4320808=""
            ><img data-v-f4320808="" :src="iconurl" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >管家服务</span
            ></span
          ><span data-v-f4320808=""
            ><img data-v-f4320808="" :src="iconurl" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >7天无理由退货</span
            ></span
          ><span data-v-f4320808=""
            ><img data-v-f4320808="" :src="iconurl" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >官方正品</span
            ></span
          ><span data-v-f4320808=""
            ><img data-v-f4320808="" :src="iconurl" class="fw_icon" />
            <span data-v-f4320808="" class="pdp-product-yh-txt samsungColor"
              >免费包邮</span
            ></span
          >
          <span data-v-f4320808="" class="pdp-product-btn"
            >详情&nbsp;<i data-v-f4320808="" class="el-icon-arrow-right"></i
          ></span>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="5" offset="1">配送</van-col>
      <van-col span="18" class="Distribution">
        <div data-v-f4320808="" class="pdp-product-yh-v">
          <span data-v-f4320808="" class="pdp-product-yh-txt"
            >广州市 2021-08-04 18:00:00 &nbsp;前下单<br data-v-f4320808="" />
            预计 2021-08-06 12:00:00&nbsp;前送达(预售等特殊情况除外)</span
          >
        </div>
      </van-col>
    </van-row>
    <van-row class="model">
      <van-col span="5" offset="1">选择机型</van-col>
      <van-col span="18">
        <van-button
          plain
          type="primary"
          v-model="modelActive"
          :color="modelActive == index ? '#0075de' : '#ccc'"
          size="middle"
          v-for="(item, index) in this.$store.getters.goodsModel"
          :key="item.prodCd"
          @click="goto(item.prodCd, index)"
          :to="`/detail/${item.prodCd}`"
          >{{ item.prodNm }}</van-button
        >
      </van-col>
    </van-row>
    <div class="Memory">
      <van-row>
        <van-col span="11" offset="1">
          <h2>选择内存</h2>
        </van-col>
        <van-col span="12"></van-col>
      </van-row>
      <van-row>
        <van-col span="23" offset="1">
          <van-button
            v-model="memoryActive"
            plain
            type="primary"
            :color="memoryActive == index ? '#0075de' : '#ccc'"
            size="middle"
            v-for="(item1, index) in this.$store.getters.storageInfo"
            :key="item1"
            @click="ccc(index)"
            ><span v-html="item1"></span
          ></van-button>
        </van-col>
      </van-row>
    </div>
    <div class="color">
      <van-row>
        <van-col span="11" offset="1">
          <h2>选择颜色</h2>
        </van-col>
        <van-col span="12"></van-col>
      </van-row>
      <van-row class="goodColor">
        <van-col
          span="8"
          v-for="(item, index) in this.$store.state.detailColorList"
          :key="item.attrCd"
        >
          <img
            :src="item.imgUrl | imgUrlfilter"
            alt=""
            :class="colorActive == index ? 'active' : ''"
            @click="changeImg(index)"
          />
          <div
            class="colorShow"
            :style="{ backgroundColor: item.attrVal }"
          ></div>
          <p>{{ item.attrNm }}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import Bus from './Bus';
export default {
  created() {
    this.getColor();
    this.getConfiguration();
  },
  data() {
    return {
      modelActive: 0,
      memoryActive: 0,
      colorActive: 0,
      iconurl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAhFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEFBQUJCQkODg4QEBATExMVFRUeHh46Ojo/Pz9JSUlZWVlaWlpqampra2t3d3d9fX2QkJCRkZGgoKC1tbW3t7fDw8PU1NTY2Njh4eHl5eXn5+f19fX6+vr9/f3+/v7///8rw5LlAAAACnRSTlMAJD1DmZq/1+3yE/35XQAAAJFJREFUGNNtkEcWgzAQQ0UMGP/03nsDfP/7ZWFCyvPfjRYaSZIkmdQ6Z1OjN0lOQ54EpVPQUnQkKflSoEgk5fyQS4Y/jLLPsXnMgEwWGA0AVnU5BawccL9NYFFVSwAnBxz8dTwv6zVBskDv6C9Pvw2ONtj3z97vmidpE2J42nfbEJGosUKR2rFxJJnMOmezMOELZn4MwJNL3HYAAAAASUVORK5CYII=",
    };
  },
  methods: {
    changeImg(i) {
      this.colorActive = i;
    },
    ccc(i) {
      this.memoryActive = i;
    },
    goto(path, i) {
      this.modelActive = i;
      // this.$router.replace(`/detail/${path}`);
      this.$forceUpdate();
    },
    // 颜色展示
    getColor() {
      this.$http.getColorInfo(this.$route.params, (res) => {
        this.$store.state.detailColorList = res.data.pdpSkuImagesInfoList;
      });
    },
    // 获取配置信息
    getConfiguration() {
      this.$http.getConfiguration(this.$route.params, (res) => {
        this.$store.state.detailConfiguration = res.data;
        console.log(res.data);
      });
    },
  },
  // 图片地址过滤
  filters: {
    imgUrlfilter(val) {
      return val.split(",")[0];
    },
  },
};
</script>
<style scoped>
.van-col--5 {
  font-size: 3.6vw;
  line-height: 40px;
  color: #757575;
  font-weight: 700;
}
.van-col--18 .van-button {
  margin-bottom: 10px;
  margin-left: 10px;
  width: 120px;
  height: 44px;
  border-radius: 10px;
}
.advantage {
  padding-right: 5px;
  color: #2189ff;
  font-size: 3vw;
  line-height: 3.4vw;
}
.firstRow {
  margin-top: 10px;
}
.firstRow .van-col--6 {
  padding-left: 5%;
  margin-top: 10px;
  font-size: 6vw;
  font-weight: 700;
  color: #2189ff;
  vertical-align: bottom;
  margin: 0;
}
.firstRow .van-col--17 s {
  font-size: 14px;
  color: rgb(117, 117, 117);
  text-decoration: line-through;
  line-height: 8vw;
}
.van-row {
  padding: 10px 2px;
  border-top: 0.5px solid #ddd;
}

.advantage img {
  width: 14px;
  height: 14px;
}
.Distribution {
  padding-right: 5px;
  color: #000;
  font-size: 3vw;
  line-height: 3.4vw;
}
.Memory {
  margin-top: 10px;
}
.Memory .van-row {
  border: none;
}
.Memory .van-button {
  padding: 18px;
  height: 60px;
  text-align: center;
  border-radius: 10px;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  margin-right: 20px;
}
.model .active {
  border-color: #2189ff !important;
}
.color img {
  width: 78px;
  height: 78px;
  box-sizing: border-box;
}
.color .active {
  border: 1px solid #2189ff;
  border-radius: 10px;
}
.goodColor .van-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.goodColor .colorShow {
  margin-top: 20px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #2189ff;
}
</style>