<template>
  <div id="Cart">
    <CartNavBar></CartNavBar>
    <GoodsCard></GoodsCard>
    <SubmitBar></SubmitBar>
  </div>
</template>

<script>
import CartNavBar from "./CartNavBar.vue";
import GoodsCard from "./goodsCard.vue";
import SubmitBar from "./SubmitBar.vue";

export default {
  components: {
    CartNavBar,
    GoodsCard,
    SubmitBar,
  },
};
</script>