<template>
  <div id="terms">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <HeaderLogo></HeaderLogo>
        <main>
          <h2 class="createTitle">创建您的三星账户</h2>
          <template>
            <van-checkbox-group
              v-model="result"
              ref="checkboxGroup"
              @change="changebox"
            >
              <van-checkbox name="a">条件和条款</van-checkbox>
              <p class="termsdetail"><a href="">详细信息</a></p>
              <van-checkbox name="b">特殊条款</van-checkbox>
              <p class="termsdetail"><a href="">详细信息</a></p>
              <van-checkbox name="c">三星账户隐私说明</van-checkbox>
              <p class="termsdetail"><a href="">详细信息</a></p>
              <van-checkbox name="d"
                >个人敏感信息收集使用说明(核心功能)</van-checkbox
              >
              <p class="termsdetail"><a href="">详细信息</a></p>
              <van-checkbox name="e">其他特殊情形</van-checkbox>
              <p class="termsdetail"><a href="">详细信息</a></p>
            </van-checkbox-group>
            <van-divider
              :style="{
                color: '#8c8c8c;',
                borderColor: '#8c8c8c;',
              }"
            />
            <van-checkbox v-model="checked" @click="toggle"
              >我已阅读并同意以上所有条款。</van-checkbox
            >
            <div class="agreebtn">
              <van-button
                type="info"
                :disabled="checked ? false : true"
                @click="agreeTerms"
                >同意</van-button
              >
            </div>
          </template>
        </main>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
import HeaderLogo from "./headerLogo.vue";
export default {
  data() {
    return {
      checked: false,
      result: [],
    };
  },
  components: {
    HeaderLogo,
  },
  methods: {
    toggle() {
      this.$refs.checkboxGroup.toggleAll(this.checked);
    },
    // 复选框状态变化时触发
    changebox() {
      console.log(this.result);
      if (this.result.length == this.$refs.checkboxGroup.children.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    // 点击同意按钮
    agreeTerms() {
      window.sessionStorage.setItem("isAgreeTerms", "true");
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.van-row {
  height: 100%;
}
#terms {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
}
.createTitle {
  text-align: center;
  color: #0072de;
  font-size: 39px;
  line-height: 1.23;
  font-weight: 500;
  margin: 28px 0px 36px 0px;
}
/deep/.van-checkbox .van-checkbox__label {
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5 ;
  color: #fff;
}

.termsdetail {
  margin: 0;
  padding: 0;
}
.termsdetail a {
  padding-left: 25px;
  font-size: 12px;
  line-height: 14px;
  text-decoration: underline;
  color: #fff;
}
.agreebtn {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}
.van-button--info {
  width: 182px;
  height: 42px;
  background-color: #0072de;
  border: 1px solid #0072de;
  color: #fff;
  border-radius: 22px;
}
</style>