<template>
    <div>
        <van-sidebar v-model="activeKey" @change="onChange">
            <van-sidebar-item :title="item.catgNm" v-for="item in  catData" :key="item.catgId" />
        </van-sidebar>
        <van-grid :column-num="2">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeKey: 0,
                activeId: 0,
                catData: [],
                ListData: {},
            }
        },
        components: {},
        methods: {
            getsortList() {
                this.$http.sortList(res => {
                    console.log(res.data);
                    this.catData = res.data
                })
            },
            onChange(idx) {
                console.log(idx);
                this.ListData = this.catData[idx]
                console.log(this.ListData);
            },
        },

        created() {
            this.getsortList()
        }
    }
</script>

<style scoped>
    .van-hairline--top {
        position: absolute;
        right: 0px;
        top: 58px;
        width: 72.7vw;
        overflow-y: auto;
        min-height: 533px;
    }

    .van-sidebar {
        width: 22.8vw;
        background: #fff;
        border-radius: 2.7vw;
        margin-right: 1.5vw;
        min-height: 533px;
        position: sticky;
        top: 0;
        float: left;
    }
</style>