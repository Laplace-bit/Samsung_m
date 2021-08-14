<template>
    <div>
        <van-row type="flex" justify="space-between">
            <van-col span="10">
                <van-button type="default" to="/home">
                </van-button>
            </van-col>
            <van-col>
                <van-button type="default" to="/search">
                    <van-icon name="search" />
                </van-button>
                <van-button type="default"  to="/cart">
                    <van-icon name="shopping-cart-o" />
                </van-button>
                <van-button type="default" @click="showPopup">
                    <van-icon name="wap-nav" />
                </van-button>
            </van-col>
        </van-row>
        <headerNav />
    </div>


</template>

<script>
    import headerNav from './headerNav.vue'
    export default {
        data() {
            return {
            }
        },
        methods: {
            showPopup() {
                this.$store.commit('openHeaderNavPart1',true)
                
            },
        },
        components: {
            headerNav
        }
    }
</script>

<style scoped>
    .van-row {
        box-sizing: border-box;
        height: 56px;
        padding: 8px 16px;
        background-color: #fff;
    }

    .van-grid,
    .van-col {
        height: 100%;
    }

    .van-col .van-grid .van-grid-item {
        margin-bottom: 0px
    }

    .van-row--justify-space-between .van-col:nth-child(1) .van-button {
        background: url(https://www.samsungeshop.com.cn/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/global-samsung-logo1.svg) no-repeat 30% 30%;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: #fff
    }

    .van-button::before {
        background-color: #fff
    }

    .van-button {
        background: #fff;
        outline: none;
        border: none;
        width: 40px;
        height: 40px;
    }

    button .van-icon {
        font-size: 24px;
    }
</style>