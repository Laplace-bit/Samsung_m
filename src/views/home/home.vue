<template>
    <div>
        <headerbar />
        <div class='main'>
            <banner />
            <type />
            <tuijian />
            <hotSell />
            <newContent />
            <product />
        </div>
        <footerbar />
    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    import banner from './banner.vue';
    import type from './type.vue';
    import footerbar from '../../components/footer.vue';
    import tuijian from './tuijian.vue';
    import hotSell from './hotSell.vue';
    import newContent from './newContent.vue';
    import product from './product.vue'
    export default {
        data() {
            return {}
        },
        components: {
            headerbar,
            banner,
            type,
            tuijian,
            hotSell,
            footerbar,
            newContent,
            product,
        }
    }
</script>

<style>
    .main{
        background-color: #f7f7f7;
    }
</style>