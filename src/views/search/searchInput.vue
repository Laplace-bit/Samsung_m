<template>
    <van-row>
        <van-col span="1">
            <van-button to="/home">
                <van-icon name="arrow-left" />
            </van-button>
        </van-col>
        <van-col span="23">
            <van-search shape="round" v-model="$store.state.searchValue" show-action placeholder="请输入搜索词"
                left-icon="null" @input="onSearch" @clear="clear" @search="reallySearch"
                @blur="clear">
                <template #action>
                    <div @click="reallySearch">搜索</div>
                </template>
            </van-search>
            <van-list>
                <i class="sanjiaojing" v-if="$store.state.list.length!=0"></i>
                <van-cell v-for="item in $store.state.list" :key="item" :title="item" />
            </van-list>
        </van-col>
    </van-row>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                finished: false,
            }
        },
        methods: {
            onSearch() {
                console.log(this.$store.state.list);
                if (this.$store.state.searchValue) {
                    this.$http.search(this.$store.state.searchValue, res => {
                        this.$store.state.list = res.data.keywordsStr.split(',')
                    })
                } else {
                    this.$store.state.list = []
                }
            },
            clear() {
                this.$store.state.list = []
            },
            reallySearch() {
                this.$store.state.list = []
                this.$store.state.searchList = JSON.parse(localStorage.getItem('middlePageKeyWords'))
                if (!this.$store.state.searchList) {
                    this.$store.state.searchList = [this.$store.state.searchValue];
                    localStorage.setItem('middlePageKeyWords', JSON.stringify(this.$store.state.searchList));
                } else if (this.$store.state.searchList.indexOf(this.$store.state.searchValue) == -1) {
                    console.log(this.$store.state.searchList.length);
                    if (this.$store.state.searchList.length >= 10) {
                        this.$store.state.searchList.pop();
                    }
                    this.$store.state.searchList.unshift(this.$store.state.searchValue);
                    localStorage.setItem('middlePageKeyWords', JSON.stringify(this.$store.state.searchList));
                } else {
                    console.log('該值存在');
                }
            }
        }
    }
</script>
<style scoped>
    .van-row {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f7f7f7;
    }

    .van-search {
        background: #f7f7f7;
        height: 14vw;
    }

    .van-search__content .van-cell {
        background: #fff;
        border-radius: 17px;
    }

    div /deep/.van-field__left-icon {
        margin-right: 15px !important;
    }

    .van-button--default {
        font-size: 24px;
        border: none;
        background: #f7f7f7;
        padding: 10px;
    }

    .van-col--1 {
        position: absolute;
        top: 63px;
        left: -4px;
    }

    .van-search__action {
        padding: 0 16px;
    }

    .van-search__action div {
        color: #228aff;
    }

    .sanjiaojing {
        position: absolute;
        left: 40px;
        top: -17px;
        border: 10px solid transparent;
        border-bottom-color: #fff;
    }

    .van-list {
        position: absolute;
        width: 74vw;
        margin-left: 6vw;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin-top: -3px;
        z-index: 10;
    }
</style>