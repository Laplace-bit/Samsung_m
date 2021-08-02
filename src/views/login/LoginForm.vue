<template>
  <div id="loginForm">
    <h2 class="title">手机号快捷登录</h2>
    <van-row>
      <van-col span="1"><van-icon name="manager" /></van-col>
      <van-col span="22">
        <van-form validate-first @failed="onFailed">
          <van-field
            v-model="username"
            name="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写正确手机号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />

          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      pattern: /\d{6}/,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
}
</style>