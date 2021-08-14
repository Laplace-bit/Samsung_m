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
                    'https://s3.bmp.ovh/imgs/2021/08/360e97e04365c111.jpg',
                    "https://s3.bmp.ovh/imgs/2021/08/b224643e73af4de4.jpg"
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