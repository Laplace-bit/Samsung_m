<template>
  <div id="other">
    <van-divider :style="{ color: '#888', borderColor: '#888' }"
      >其他登录方式</van-divider
    >
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://z3.ax1x.com/2021/08/03/fP3g8s.png" />
        <p class="way_text">三星账户登录</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://z3.ax1x.com/2021/08/03/fP3bG9.png" />
        <p class="way_text">支付宝账户登录</p>
      </van-grid-item>
    </van-grid>
    <div class="help_text">
      注：使用三星账号登录商城或将其他账号绑定三星账号，可享受积分福利。还没有三星账号？<a
        href="/terms"
        >立即注册>></a
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/deep/ .van-image__error,
/deep/ .van-image__img,
/deep/ .van-image__loading {
  display: block;
  width: 78%;
  height: 100%;
}
.way_text {
  text-align: center;
  font-size: 12px;
  margin: 0;
}
.help_text {
  font-size: 12px;
  max-width: 350px;
  color: #333;
  margin: 20px auto;
  line-height: 1.8;
}
</style>