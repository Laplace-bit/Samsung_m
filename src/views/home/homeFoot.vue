<template>
    <div style="height:400px">
        <van-row gutter="24">
            <van-col class="footer-column__items" span="22">
                <van-icon name="service-o" /><span>专业客服团队 / 提供当季优惠信息</span>
            </van-col>
            <van-col class="footer-column__items" span="22">
                <van-icon name="gold-coin-o" /><span>7天无理由退货15天换货</span>
            </van-col>
            <van-col class="footer-column__items" span="22">
                <van-icon name="good-job-o" /><span>官方正品请安心购买</span>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
        
            }
        }
    }
</script>

<style scoped>
    .van-row {
        background: #fff;
    }

    .footer-column__items {
        height: 21vw;
        padding: 4.72222222vw 6.66666667vw;
        display: flex;
        align-items: center;
        height: 21vw;
        font-size: 3.2vw;
        border-bottom: 1px solid #ccc;
        background: #fff;
        margin: 0 auto
    }

    div /deep/.van-icon {
        display: inline-block;
        width: 10.4vw;
        height: 10.4vh;
        margin-right: 21px;
        background-size: 100% auto;
        font-size: 30px;
        line-height: 70px;
        margin-left: 10px;
        margin-right: 21px;
    }
</style>