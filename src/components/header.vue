<template>
    <van-row type="flex" justify="space-between">
        <van-col span="10"></van-col>
        <van-col >
            <van-grid :border="false">
                <van-grid-item icon="search" />
                <van-grid-item icon="shopping-cart-o" />
                <van-grid-item icon="wap-nav" />
            </van-grid>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .van-row {
        box-sizing: border-box;
        height: 56px;
        padding: 8px 16px;
    }

    .van-grid,
    .van-col {
        height: 100%;
    }
    .van-col .van-grid .van-grid-item{
        margin-bottom:0px
    }

    .van-row--justify-space-between 
    .van-col:nth-child(1) {
        background: url(https://www.samsungeshop.com.cn/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/global-samsung-logo1.svg) no-repeat 30% 30%;
    }

    .van-grid-item__content {
        padding: 6px;
        border: none;
    }
</style>