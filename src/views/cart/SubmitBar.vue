<template>
  <van-submit-bar
    :price="$store.getters.checkedMoney"
    button-text="提交订单"
    @submit="onSubmit"
  >
    <van-checkbox v-model="isAll" @click="changeAll">全选</van-checkbox>
  </van-submit-bar>
</template>
<script>
import { mapState } from "vuex";
export default {
  created() {},
  data() {
    return {
      checked: this.$store.state.Allchecked,
      show: this.$store.state.showSku,
    };
  },
  computed: mapState({
    isAll: (state) => state.allChecked,
  }),
  methods: {
    changeAll() {
      this.$store.commit("changeAllChecked");
    },
    onSubmit() {},
  },
};
</script>