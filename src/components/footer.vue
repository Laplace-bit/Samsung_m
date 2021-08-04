<template>
    <van-tabbar v-model="active" route>
        <van-tabbar-item name="home" icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item name="type" icon="apps-o" to="/sort">分类</van-tabbar-item>
        <van-tabbar-item name="gift" icon="gift-o">活动</van-tabbar-item>
        <van-tabbar-item name="chat" icon="chat-o">客服</van-tabbar-item>
        <van-tabbar-item name="user" icon="contact" to="/login">我的</van-tabbar-item>
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