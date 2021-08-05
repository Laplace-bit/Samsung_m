<template>
    <div class="New-content">
        <div class="hot-title">新品区</div>
        <div class="new-list">
            <div class="new-left-pic">
                <a href="">
                    <img v-if="newLeftPic" :src="newLeftPic.skuImg" alt="">
                </a>
                <div class="new-item-t1">
                    {{newLeftPic.skuTitl}}
                </div>
                <div class="new-item-t2">{{newLeftPic.skuSubTitl}}</div>
                <div class="new-item-jg">￥{{Number(newLeftPic.price).toFixed(2)}}</div>
            </div>
        </div>
        <ul>
            <li v-for="(item) in newDateList" :key="item.skuId">
                <a href="">
                    <div class="new-item-img"><img :src="item.skuImg" alt=""></div>
                    <div class="new-item-t1">
                        {{item.skuTitl}}
                    </div>
                    <div class="new-item-t2" v-html="item.skuSubTitl"></div>
                    <div class="new-item-jg">￥{{item.price.toFixed(2)}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newDateList: [],
                newLeftPic: [],
            }
        },
        methods: {
            getrecSkuList() {
                this.$http.recSkuList(res => {
                    this.newDateList = res.data.NEW
                    this.newLeftPic = this.newDateList.shift()
                })
            }
        },
        created() {
            this.getrecSkuList()
        }
    }
</script>

<style scoped>
    .New-content {
        padding: 6vw 4vw 0 4vw;
        margin: 0 auto;
        text-align: center;
    }

    .hot-title {
        font-size: 5.3vw;
        line-height: 7.7vw;
        text-align: left
    }

    .new-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
        flex-direction: row;
        text-align: center;

    }

    .new-left-pic {
        width: 100%;
        padding: 5.3vw;
        text-align: center;
        border-radius: 2.7vw;
        background-color: white;
    }

    .new-left-pic a {
        display: inline-block;
        width: 63.3vw;
        height: 63.3vw;
    }

    .new-left-pic .new-item-t1 {
        font-size: 4vw;
        margin: 1.3vw 0 .93vw;
        font-weight: 700
    }

    .new-left-pic .new-item-t2 {
        font-size: 2.9vw;
    }

    .new-left-pic .new-item-jg {
        font-size: 4vw;
        margin-top: 1.73vw;
        color: #2189ff;
        font-weight: 700;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li {
        width: 44.7vw;
        margin-top: 2vw;
        background-color: #fff;
        border-radius: 2.7vw;
        cursor: pointer;
        padding: 2.7vw 0 4.4vw
    }

    ul li .new-item-img {
        width: 26.5vw;
        height: 26.5vw;
        margin: 0 auto;
        margin-bottom: 2.7vw
    }

    ul li .new-item-t1 {
        line-height: 4.6vw;
        height: 9vw;
        font-size: 3.5vw;
        font-weight: 700;
        padding: 0 4vw;
    }

    ul li .new-item-t2 {
        white-space: normal;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 2.9vw;
    }

    ul li .new-item-jg {
        color: #2189ff;
        font-size: 4vw;
        font-weight: 700;
        padding-top: 5px;
    }

    a {
        color: #000
    }
</style>