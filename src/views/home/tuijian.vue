<template>
    <van-row class="tuijian-content">
        <van-col span="12"><img
                src="https://image.samsungeshop.com.cn/act/20210730/05985fe2410243dbb1d218e72c6f6f14.png" alt="">
        </van-col>
        <van-col span="12">
            <van-col span="24"><img
                    src="https://image.samsungeshop.com.cn/act/20210721/ab2f450723144989879016f59adb487a.png" alt="">
            </van-col>
            <van-col span="24"><img
                    src="https://image.samsungeshop.com.cn/act/20210730/bd4522d0d0774cddbf6ae6da6329240a.png" alt="">
            </van-col>
        </van-col>
        <van-col span="24" class="netshop"><img
                src="https://image.samsungeshop.com.cn/act/20210802/285b4bafb6e24d2e85ecf335fc408ba0.jpg" alt="">
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
    .tuijian-content {
        padding: 0 4vw !important;
    }
    img{
        width: 100%;
        height: 100%;
    }

    .tuijian-content .van-col--12 {
        height: 90vw;
        padding: 0 2px;
        margin-bottom: 1.33vw;
    }

    .van-col--24 {
        height: 50%;
        padding: 0 2px;
    }

    .tuijian-content img {
        border-radius: 2.7vw;
    }

    .netshop{
        height: 90px;
    }
</style>