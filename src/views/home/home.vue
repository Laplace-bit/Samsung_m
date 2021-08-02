<template>
    <div>
        <headerbar />
        <banner />
        <type />
    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    import banner from './banner.vue';
    import type from './type.vue';
    export default {
        data() {
            return {}
        },
        components: {
            headerbar,
            banner,
            type
        }
    }
</script>

<style>
    .van-row {
        height: 56px;
        padding: 8px 16px;
    }

    .van-col:nth-child(1) {
        background: url(https://www.samsungeshop.com.cn/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/global-samsung-logo1.svg) no-repeat 50% 50%;
    }
</style>