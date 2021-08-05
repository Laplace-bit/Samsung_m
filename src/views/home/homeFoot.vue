<template>
    <div>
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
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="产品" name="1">
                <van-cell value="智能手机" />
                <van-cell value="可穿戴设备" />
                <van-cell value="平板/电脑/存储" />
                <van-cell value="智能产品配件" />
                <van-cell value="电视/影音/显示器" />
            </van-collapse-item>
            <van-collapse-item title="我的三星" name="2">
                <van-cell value="我的订单" />
                <van-cell value="我的积分" />
                <van-cell value="优惠券" />
                <van-cell value="个人资料" />
                <van-cell value="收货地址" />
            </van-collapse-item>
            <van-collapse-item title="网上商城指引" name="3">
                <van-cell value="常见问题" />
                <van-cell value="三星网上商城账户" />
                <van-cell value="产品和订单" />
                <van-cell value="商城支付及发票" />
                <van-cell value="三星专属管家服务" />
                <van-cell value="物流" />
                <van-cell value="售后服务" />
            </van-collapse-item>
            <van-collapse-item title="服务支持" name="4">
                <van-cell value="关于商城" />
                <van-cell value="关于三星" />
                <van-cell value="售后网点查询" />
                <van-cell value="联系我们" />
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName: '1',
            }
        }
    }
</script>

<style scoped>
    .van-row {
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    .van-row /deep/.van-icon {
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

    div /deep/.van-cell--clickable {
        height: 15.5556vw;
    }

    div /deep/.van-cell__title {
        font-weight: 700;
        line-height: 11.5556vw;
        font-size: 18px;
        text-indent: 1.5em;
    }

    .van-collapse /deep/.van-icon-arrow {
        line-height: 40px;
        font-size: 25px;
        color: black;
        font-weight: 200;
        margin-right: 1em;
    }

    .van-collapse {
        margin-bottom: 15.5556vw;
    }
</style>