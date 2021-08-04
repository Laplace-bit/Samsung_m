<template>
  <div id="loginForm">
    <h2 class="title">手机号快捷登录</h2>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-form validate-first @failed="onFailed" @submit="onSubmit">
          <div class="tel">
            <van-icon name="manager" />
            <van-field
              v-model="username"
              name="username"
              placeholder="手机号"
              :rules="[{ required: true, message: '请填写正确手机号' }]"
            />
          </div>
          <div class="password">
            <van-icon name="lock" />
            <van-field
              v-model="password"
              type="password"
              name="password"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </div>
          <div style="margin: 16px" class="btn">
            <van-button round block type="info" native-type="submit"
              >登录</van-button
            >
          </div>
        </van-form>
        <OtherWay></OtherWay>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>
<script>
import OtherWay from "./OtherLoginWay.vue";
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      // pattern: /^1[3,4,5,6,7,8]\d{9}/,
    };
  },
  components: {
    OtherWay,
  },
  methods: {
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onSubmit(val) {
      console.log(val);
      this.$http.login(val, (res) => {
        if (res.code != 1) {
          this.$toast.fail("用户名或密码错误，请重新尝试~");
          return;
        }
        this.$toast.success("登录成功");
        // 存储cookie
        document.cookie = `login=${val.username}`;
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
  margin-top: 70px;
}
.tel,
.password {
  margin-top: 25px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
}
.van-field--error {
  height: 58px;
}
.van-icon-manager,
.van-icon-lock {
  width: 20px;
  height: 20px;
  margin-left: 20px;
  align-self: center;
  z-index: 10;
  flex-grow: 0;
  flex-shrink: 0;
}
.van-icon-manager::before {
  width: 20px;
  height: 20px;
}
.van-icon-lock ::before {
  height: 20px;
  width: 20px;
}
.van-field__control {
  font-size: 14px;
}
.van-field {
  height: 48px;
}
/deep/.van-field__error-message {
  text-align: right;
  position: absolute;
  top: 0;
  right: 0;
}
.van-button--info {
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
}
.van-cell {
  color: #fff;
}
.btn {
  margin-top: 40px !important;
  display: flex;
  justify-content: center;
}
</style>