<template>
    <van-popup closeable v-model="$store.state.showPopupPart1" position="right" :style="{ width: '90%' ,height:'100%'}"
        :lock-scroll="false">
            <van-cell is-link @click="showPopup2(item.catgId)" v-for="(item,index) in headerNavList" :key="index">
                {{item.catgKeywords}}
            </van-cell>
            <van-popup closeable v-model="$store.state.showPopupPart2" position="right"
                :style="{ width: '100%' ,height:'100%'}" @close="closePart2?closePart2:''">
                <h2>智能手机</h2>
                <span class="back" @click="back">
                    <van-icon name="down" /></span>
                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item :title="item1.catgNm" :name="item1.catgId"
                        v-for="(item1,index1) in headerNavList2" :key="index1">
                        <div class="last" v-if="item1.spuInfoList">
                            <a class="last lastItem" href="/sort">全系列产品</a>
                            <van-cell class="last lastItem" v-for='(item2,index2) in item1.spuInfoList' :key="index2"
                                :to="`detail/${item2.prodCd}`" @click="closeHeaderNav">
                                {{item2.prodNm}}
                            </van-cell>
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </van-popup>
    </van-popup>
</template>

<script>
    export default {
        data() {
            return {
                headerNavList: [],
                headerNavList2: [],
                value1: 0,
                styleobj: {
                    fontSize: '30px',
                    color: 'red'
                },
                activeName: ['1'],
            }
        },
        methods: {
            showPopup2(id) {
                this.$store.commit('openHeaderNavPart2')
                // 获取导航列表数据
                if (id) {
                    this.headerNavList2 = this.headerNavList.filter(item => item.catgId == id)[0].categoryInfoList;
                    console.log(this.headerNavList2);
                }
                return
            },
            getHeaderNav() {
                this.$http.getProductList(res => {
                    this.headerNavList = res.data
                })
            },
            closePart2() {
                this.$store.state.showPopupPart1 = false

            },
            back() {
                this.$store.state.showPopupPart2 = false;
                this.closePart2 = null;
            },
            closeHeaderNav() {
                this.$store.state.showPopupPart2 = false;
                this.$store.state.showPopupPart1 = false;
            }
        },
        created() {
            this.getHeaderNav()
        }
    }
</script>

<style scoped>
    .van-popup {
        padding: 56px 24px 0;
        top: 50%;
        box-sizing: border-box;
    }

    .van-cell--clickable {
        height: 56px;
        font-size: 20px;
    }

    div /deep/.van-icon {
        color: black;
    }

    div /deep/.van-cell {
        height: 56px;
        font-size: 18px;
    }

    .last {
        padding: 0;
        font-size: 16px;
        vertical-align: middle;
        color: black;
        padding-left: 1em;
    }

    .lastItem {
        display: flex;
        height: 48px;
        align-items: center;
    }

    div /deep/.van-collapse-item__content {
        padding: 5px 16px 0 0;
    }

    div /deep/.van-collapse-item__wrapper {
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
    }

    a {
        color: black;
    }

    .van-collapse-item {
        height: auto;
    }

    .back {
        position: absolute;
        top: 10px;
        left: 16px;
        font-size: 24px;
        transform: rotate(90deg);
    }
</style>