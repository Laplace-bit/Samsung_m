<template>
  <div id="login">
    <Headerbar></Headerbar>
    <LoginForm></LoginForm>
  </div>
</template>
<script>
import Headerbar from "../../components/header.vue";
import LoginForm from "./LoginForm.vue";

export default {
  data() {
    return {};
  },
  components: {
    Headerbar,
    LoginForm,
  },
};
</script>