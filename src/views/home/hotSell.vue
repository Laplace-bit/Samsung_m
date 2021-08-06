<template>
    <div class="main-content">
        <div class="hot-title">热销推荐</div>
        <div class="hot-list">
            <div class="hot-item">
                <van-cell :to="`sort`">
                    <img src="https://image.samsungeshop.com.cn/goods/20210730/db114edd796e46e6ab3ff7bc3b879c2e.png"
                        alt="">
                </van-cell>
            </div>
            <div class="hot-item">
                <van-cell :to="`sort`">
                    <img src="https://image.samsungeshop.com.cn/goods/20210619/179c2f630bf84bc78879943fd774c3f9.png"
                        alt="">
                </van-cell>
            </div>
            <div class="hot-item">
                <van-cell :to="`sort`">
                    <img src="https://image.samsungeshop.com.cn/goods/20210619/3693a02282704df196aa5973de2882f0.png"
                        alt="">
                </van-cell>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        }
    }
</script>

<style scoped>
    .main-content{
        padding: 6vw 4vw 0 4vw;
    }
    .hot-title{
        font-size:5.3vw;
        line-height: 7.7vw;
        text-align: left;
    }

    .hot-list{
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between
    }
    .hot-item:nth-child(2),.hot-item:nth-child(3){
        width: 44.67vw;
        margin-top: 22px;
        border: 1px solid #eee;
        border-radius:5vw
    }
    img{
        width: 100%;
        height: 100%;
    }
    .van-cell,.van-cell__value{
        padding: 0px;
    }
</style>