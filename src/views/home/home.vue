<template>
    <div>
        <headerbar />
        <banner />
        <type />
        <footerbar />
        <tuijian />
    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    import banner from './banner.vue';
    import type from './type.vue';
    import footerbar from './footer.vue';
    import tuijian from './tuijian.vue'
    export default {
        data() {
            return {}
        },
        components: {
            headerbar,
            banner,
            type,
            tuijian,
            footerbar
        }
    }
</script>

<style>
    .van-row {
        height: 56px;
        padding: 8px 16px;
    }


</style>