<template>
    <div>
        <headerbar />
        <div class='main'>
            <banner />
            <type />
            <tuijian />
        </div>
        <footerbar />
    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    import banner from './banner.vue';
    import type from './type.vue';
    import footerbar from '../../components/footer.vue';
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

    .main {
        margin-bottom: 17.2vw;
    }
</style>