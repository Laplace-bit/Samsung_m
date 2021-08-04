<template>
    <div>
        <headerbar />
        <van-row>
            <van-col span="1">
                <van-button to="/home">
                    <van-icon name="arrow-left" />
                </van-button>
            </van-col>
            <van-col span="23">
                <van-search shape="round" v-model="value" show-action placeholder="请输入搜索词" left-icon="null"
                    @input="onSearch" @clear="clear">
                    <template #action>
                        <div @click="onSearch">搜索</div>
                    </template>
                </van-search>
                <van-list>
                    <i class="sanxiaojing" v-if="list[0]"></i>
                    <van-cell v-for="item in list" :key="item" :title="item" />
                </van-list>
            </van-col>
        </van-row>

    </div>
</template>

<script>
    import headerbar from '../../components/header.vue';
    export default {
        data() {
            return {
                value: '',
                list: [],
                loading: false,
                finished: false,
            }
        },
        methods: {
            onSearch() {
                if (this.value) {
                    this.$http.search(this.value, res => {
                        this.list = res.data.keywordsStr.split(',')
                    })
                } else {
                    return;
                }
            },
            clear(){
                this.list=[]
            }
        },
        components: {
            headerbar
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

    .sanxiaojing {
        position: absolute;
        left: 40px;
        top: -17px;
        border: 10px solid transparent;
        border-bottom-color: #fff;
    }

    .van-list {
        position: relative;
        width: 74vw;
        margin-left: 6vw;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin-top: -3px;
    }
</style>