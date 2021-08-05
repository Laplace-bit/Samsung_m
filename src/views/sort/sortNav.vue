<template>
    <div>
        <van-sticky>
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item :title="item.catgNm" v-for="item in  catData" :key="item.catgId" v-lazy="item" />
            </van-sidebar>
        </van-sticky>
        <!-- 遮罩层 -->
        <div v-if="show">
            <van-overlay :show="show" @click="show = false">
                <div class="wrapper" @click.stop>
                    <van-loading color="#1989fa" />
                </div>
            </van-overlay>
        </div>

        <van-row v-else>
            <van-col span="24">
                <van-grid :border="false" :column-num="2" v-for="item1 in ListData" :key="item1.catgId" v-lazy="item1">
                    <div class="header">{{item1.catgNm}}</div>
                    <van-grid-item v-for="item2 in item1.spuInfoList" :key="item2.index" :to="`/detail/${item2.prodCd}`">
                        <van-image :src="item2.skuImg" />
                        <div class="text">{{item2.prodTitl}}</div>
                    </van-grid-item>
                </van-grid>
            </van-col>

        </van-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeKey: 0,
                activeId: 0,
                catData: [],
                ListData: [],
                PageData: [],
                getPage: {
                    catgId: "",
                    catgLvlOneCd: "SMART_CELLPHONE",
                    catgLvlTwoCd: "",
                    pageNo: 1,
                    pageSize: "",
                    prodTags: "",
                },
                show: false
            }
        },
        components: {},
        methods: {
            getsortList() {
                this.$http.sortList(res => {
                    this.catData = res.data;
                    this.onChange(0)
                })
            },
            onChange(idx) {
                this.show = true;
                this.ListData = this.catData[idx].categoryInfoList;
                this.getPage.catgLvlOneCd = this.catData[idx].catgCd
                console.log(this.ListData);
                this.$http.getPageList(this.getPage, res => {
                    this.pageData = res.data.pageData;
                    this.ListData.forEach(item => {
                        item.spuInfoList.forEach(item1 => {
                            this.pageData.forEach(item2 => {
                                if (item1.spuId == item2.spuId) {
                                    item1.skuImg = item2.plpSkuImagesInfoList[0].imgUrl
                                        .split(',')[0]
                                }
                            })
                        })
                        this.show = false
                    })
                })

            },
        },

        created() {
            this.getsortList();
            this.show = true;
        }
    }
</script>

<style scoped>
    .van-row {
        position: absolute;
        right: 0px;
        top: 58px;
        width: 72.7vw;
        overflow-y: auto;
        min-height: 533px;
        background: #f7f8fa;
        padding-bottom: 50px
    }

    .van-sidebar {
        width: 27.3vw;
        background: #f7f8fa;
        border-radius: 2.7vw;
        margin-right: 1.5vw;
        min-height: 533px;
        position: sticky;
        height: 100%;
        top: 0;
        float: left;
    }

    .van-grid {
        position: relative;
        padding-top: 8vw;
    }

    .header {
        padding-top: 3vw;
        width: 100%;
        position: absolute;
        top: 0px;
        float: left;
        font-size: 5.3vw;
        text-align: center;
        font-weight: 700;
        z-index: 10;
    }

    .van-overlay {
        background: rgba(0, 0, 0, 0.7);
        z-index: 1000;
    }

    .van-loading {
        z-index: 1001;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -15px;
        margin-top: -15px;
    }

    div /deep/.van-grid-item__content {
        padding: 20px 10px;
        background: #fff;

    }

    div /deep/ img {
        width: 22.8vw;
        height: 22.8vw;
    }

    .text {
        font-size: 2.9vw;
        font-weight: 700;
        min-height: 2.4;
        margin-top: 2.7vw
    }

    .van-grid {
        margin: 2.5vw 0;
        background: #fff;
        border-radius: 2.7vw
    }

    .van-sidebar-item--select::before {
        background-color: white;
    }

    .van-sidebar-item--select {
        color: #007aff;
    }
</style>