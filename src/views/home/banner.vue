<template>
    <van-swipe :autoplay="3000" indicator-color="black">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    'https://image.samsungeshop.com.cn/act/20210730/cdf7037592694d0084458af22694ec44.jpg',
                    'https://image.samsungeshop.com.cn/act/20210721/6a7d15d0e4844779af1726976bf93575.jpg',
                    "https://image.samsungeshop.com.cn/act/20210730/de51743af935433283a0c1ef80514574.jpg",
                    "https://image.samsungeshop.com.cn/act/20210715/ddb1077dd6d342eb895d8035b1a1215a.jpg",
                    "https://image.samsungeshop.com.cn/act/20210730/bd30f5e612e846a895615bdcff2eddae.jpg",
                    "https://image.samsungeshop.com.cn/act/20210701/f030b8c4416c4d3482a7e0d0e358efe0.jpg"
                ],
            };
        },
    }
</script>

<style>
    .van-swipe {
        height: 53.3vw;
    }

    img {
        height: 83%;
        width: 100%;
    }

    .van-swipe__indicator {
        background: #555;
    }
</style>