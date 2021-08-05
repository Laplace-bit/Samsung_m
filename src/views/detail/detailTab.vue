<template>
  <van-sticky>
    <van-tabs v-model="active" color="#0075de" @click="onClick">
      <van-tab title="商品"></van-tab>
      <van-tab title="详情"></van-tab>
      <van-tab title="参数"></van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="评价"></van-tab>
    </van-tabs>
  </van-sticky>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClick(index) {
      console.log(index);
      if(index==1){
        window.scrollTo()
      }
    },

  },
};
</script>