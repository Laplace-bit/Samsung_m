<template>
    <van-grid :border="false" :column-num="5">
        <van-grid-item v-for="item in menu" :key="item.catgId">
            <van-image :src="item.adPic" />
            <span class="icon-title">{{item.adTitl}}</span>
        </van-grid-item>
    </van-grid>
</template>

<script>
    export default {
        data() {
            return {
                menu: []
            }
        },
        methods: {
            getTypeList() {
                this.$http.menu(res => {
                    console.log(res);
                    console.log(res.data.CTGICON.advInfos);
                    this.menu = res.data.CTGICON.advInfos
                })
            },
        },
        created() {
            this.getTypeList()
        }
    }
</script>

<style>
    .van-grid-item {
        margin-bottom: 4vw;
    }

    .van-grid-item__content {
        padding: 0px;
    }

    .van-grid-item img {
        width: 8vw;
        height: 8vw;
    }

    .icon-title {
        font-size: 3.2vw;
        margin-top: 1vw;
    }
</style>