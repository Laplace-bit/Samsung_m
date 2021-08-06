<template>
    <div>
        <div class="MiddLePageHistoty">
            <header>搜索历史</header>
            <van-row>
                <van-col v-for="(item,index) in  this.$store.state.searchList" :key="index">{{item}}</van-col>
            </van-row>
        </div>
        <div class="MiddLePageHistoty">
            <header>搜索发现</header>
            <van-row>
                <van-col>三星先行者计划</van-col>
                <van-col>新品</van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .MiddLePageHistoty {
        padding: 6.66667vw 5.33333vw 0 5.33333vw;
        background: #f7f7f7;
    }

    header {
        height: 4.8vw;
        font-size: 4.8vw;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #000;
        margin-bottom: 6vw;
    }

    .van-col {
        padding: 0 2.66667vw;
        background: #fff;
        border-radius: 6.66667vw;
        margin-right: 1.33333vw;
        margin-bottom: 1.33333vw;
        font-size: 3.46667vw;
        height: 6vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .MiddLePageHistoty:nth-child(2) {
        padding-bottom: 100px;
    }
</style>