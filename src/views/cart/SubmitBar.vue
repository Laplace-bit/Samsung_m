<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
  </van-submit-bar>
</template>
<script>
export default {
  data() {
    return {
      show: this.$store.state.showSku,
      checked: false,
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>