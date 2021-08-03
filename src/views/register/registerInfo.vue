<template>
  <div id="Info">
    <div class="InfoTitle">
      <h2>创建您的三星账户</h2>
      <p>
        在下方输入手机号即可创建账户，<br />或者<sapn class="useEmail"
          >点击此处使用电子邮箱地址</sapn
        >来创建
      </p>
    </div>
    <div class="infoForm">
      <form class="formbox" v-model="formdata">
        <div :class="inputBox" v-for="item in formdata" :key="item.label">
          <label :for="item.label">{{ item.cn }}</label>
          <input
            :type="item.type"
            :name="item.label"
            @focus="focusHandel"
            v-model="item.value"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formdata: [
        {
          label: "username",
          cn: "用户名",
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
  focusHandel() {},
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
label {
  color: #fff;
  font: 14px/18px "Gigi";
  position: absolute;
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
</style>