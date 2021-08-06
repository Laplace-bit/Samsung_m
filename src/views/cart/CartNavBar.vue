<template>
  <van-nav-bar
    title="购物车"
    left-text=""
    right-text=""
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>