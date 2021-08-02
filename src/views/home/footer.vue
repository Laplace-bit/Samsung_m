<template>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item name="type" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item name="gift" icon="gift-o">活动</van-tabbar-item>
        <van-tabbar-item name="chat" icon="chat-o">客服</van-tabbar-item>
        <van-tabbar-item name="user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                active: 'home',
            };
        },
    }
</script>

<style>

</style>