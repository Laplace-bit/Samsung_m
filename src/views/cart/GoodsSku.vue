<template>
  <van-sku
    :v-model="this.$store.state.show"
    stepper-title="我要买"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    show-add-cart-btn
    reset-stepper-on-hide
    :initial-sku="initialSku"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
  >
    <!-- 自定义 sku-header-price -->
    <template #sku-header-price="props">
      <div class="van-sku__goods-price">
        <span class="van-sku__price-symbol">￥</span
        ><span class="van-sku__price-num">{{ props.price }}</span>
      </div>
    </template>

    <!-- 自定义 sku actions -->
    <template #sku-actions="props">
      <div class="van-sku-actions">
        <van-button square size="large" type="warning" @click="onPointClicked">
          积分兑换
        </van-button>
        <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
        <van-button
          square
          size="large"
          type="danger"
          @click="props.skuEventBus.$emit('sku:buy')"
        >
          买买买
        </van-button>
      </div>
    </template>
  </van-sku>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>