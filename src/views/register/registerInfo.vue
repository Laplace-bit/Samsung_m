<template>
  <div id="Info">
    <div class="InfoTitle">
      <h2>创建您的三星账户</h2>
      <p>
        在下方输入手机号即可创建账户，<br />或者<span class="useEmail"
          >点击此处使用电子邮箱地址</span
        >来创建
      </p>
    </div>
    <div class="infoForm">
      <form class="formbox" v-model="formdata">
        <div
          :class="{ inputBox: true }"
          v-for="(item, index) in formdata"
          :key="item.label"
        >
          <label
            :for="item.label"
            :class="[activeClass == index ? 'active' : '', item.classname]"
            :ref="'label' + index"
            >{{ item.cn }}</label
          >
          <input
            :index="index"
            :type="item.type"
            :name="item.label"
            @focus="focusHandel(index)"
            @blur="blurHandel"
            v-model="item.value"
          />
        </div>
        <div class="btn">
          <van-button type="default" @click.prevent="backHandel"
            >返回</van-button
          >
          <van-button type="info" @click.prevent="registerHandel"
            >注册</van-button
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeClass: -1,
      formdata: [
        {
          label: "username",
          cn: "手机号码",
          type: "text",
          value: "",
          classname: "",
        },
        {
          label: "password",
          cn: "密码",
          type: "text",
          value: "",
          classname: "",
        },
        {
          label: "password2",
          cn: "确认密码",
          type: "text",
          value: "",
          classname: "",
        },
        {
          label: "firstname",
          cn: "姓氏",
          type: "text",
          value: "",
          classname: "",
        },
        {
          label: "lastname",
          cn: "名字",
          type: "text",
          value: "",
          classname: "",
        },
      ],
    };
  },
  methods: {
    focusHandel(e) {
      this.activeClass = e;
    },
    blurHandel() {
      this.formdata.forEach((item) => {
        if (item.value) {
          item.classname = "active";
        } else {
          item.classname = "";
        }
      });
      this.activeClass = -1;
    },
    backHandel() {
      this.$router.replace("login");
    },
    registerHandel() {
      let regParams = {
        username: this.formdata[0].value,
        password: this.formdata[1].value,
      };
      this.$http.register(regParams, (res) => {
        console.log(res);
        if (!res.code) {
          this.$toast.fail(res.msg);
          return;
        }
        this.$dialog
          .confirm({
            title: "去登录",
            message: "注册成功，是否前往登录",
          })
          .then(() => {
            this.$router.replace("login");
          })
          .catch(() => {});
      });
    },
  },
};
</script>

<style scoped>
#Info {
  padding: 10% 6%;
  border: 1px solid #505050;
  border-radius: 26px;
}
.InfoTitle h2 {
  color: #fff;
  margin: 0;
}
.InfoTitle p {
  color: #fff;
}
.useEmail {
  text-decoration: underline;
}
.formbox {
  width: 100%;
}
.infoForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inputBox {
  position: relative;
  margin: 30px 0 24px 0;
  width: 100%;
}
input {
  outline: none;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  width: 100%;
  height: 36px;
  background-color: #000;
  color: #fff;
  font: 18px/36px "Gigi";
}
.active {
  color: #0072de;
  transform: translateY(-16px) scale(0.7);
  transition: transform 0.3s;
}
label {
  color: #fff;
  font: 14px/18px "Gigi";
  position: absolute;
  transition: transform 0.3s;
  top: -1px;
  left: auto;
  max-width: 100%;
  height: 2.7em;
  line-height: 1.33;
  color: #909090;
  font-size: 18px;
  cursor: text;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn .van-button {
  width: 152px;
  height: 44px;
  border-radius: 22px;
}
</style>