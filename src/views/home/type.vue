<template>
    <div>
        <van-sticky>
                <van-grid :border="false" :column-num="5">
                    <van-grid-item v-for="item in menu" :key="item.catgId">
                        <van-image :src="item.adPic" />
                        <span class="icon-title">{{item.adTitl}}</span>
                    </van-grid-item>
                </van-grid>
        </van-sticky>
        <van-grid :border="false" :column-num="5">
            <van-grid-item v-for="item in displayMenu" :key="item.catgId">
                <van-image :src="item.adPic" />
                <span class="icon-title">{{item.adTitl}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [],
                displayMenu: [],
            }
        },
        methods: {
            getTypeList() {
                this.$http.menu(res => {
                    this.menu = res.data.CTGICON.advInfos;
                    this.displayMenu = res.data.CTGICON.advInfos.splice(5, res.data.CTGICON.advInfos.length -
                        5);

                    console.log(this.displayMenu);
                })
            },
        },
        created() {
            this.getTypeList()
        }
    }
</script>

<style>
    .noActive {
        display: block;
    }

    .van-grid {
        background: #f7f7f7;
        padding-top:1vw
    }

    .van-grid-item {
        margin-bottom: 4vw;
    }

    .van-grid-item__content {
        padding: 0px;
        background-color: #f7f7f7;
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