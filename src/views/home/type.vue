<template>
    <div>
        <van-sticky>
            <van-grid :border="false" :column-num="5">
                <van-grid-item v-for="(item,index) in menu" :key="item.catgId" @click="scrol(index,1)">
                    <van-image :src="item.adPic" />
                    <span class="icon-title">{{item.adTitl}}</span>
                </van-grid-item>
            </van-grid>
        </van-sticky>
        <van-grid :border="false" :column-num="5">
            <van-grid-item v-for="(item,index) in displayMenu" :key="item.catgId" @click="scrol(index+4,2)">
                <van-image :src="item.adPic" />
                <span class="icon-title">{{item.adTitl}}</span>
            </van-grid-item>
        </van-grid>
        <div v-if="onScroll" class="jump" @click="scrol(100)">
            <img src="https://www.samsungeshop.com.cn/static/img/Group97@2x.3c2ea068.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [],
                displayMenu: [],
                onScroll:false,
            }
        },
        methods: {
            getTypeList() {
                this.$http.menu(res => {
                    this.menu = res.data.CTGICON.advInfos;
                    this.displayMenu = res.data.CTGICON.advInfos.splice(5, res.data.CTGICON.advInfos.length -
                        5);

                    console.log(this.displayMenu);
                })
            },
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop>=1200){
                    this.onScroll=true
                }else{
                      this.onScroll=false
                }
            },
            scrol(index, type) {
                if (type == 1) {
                    if (index == 4) {
                        index = 2
                    }
                } else if (type == 2) {
                    if (index == 5) index = 2
                    else if (index == 6 || 7) index = 4
                }
                let a = 2480 + index * 1012 - 60;
                if (index == 100) a = 0
                var now = document.documentElement.scrollTop; //获取当前滚动条的高度
                var stance = now - a; //当前与要去的楼层的差距
                var i = 0; //初始字段
                if (now > a) { //向上滑动
                    setup();
                } else {
                    setdown();
                }
                //向上
                function setup() {
                    now = document.documentElement.scrollTop; //每次向上都要先获取目前的高度
                    if (now > a && i < 50) { //分为50个小份向上滑动
                        document.documentElement.scrollTop = Number(now - stance / 50);
                        i++;
                        setTimeout(setup, 10); //每10ms滑动一次，然后递归直到最后50次后定位
                    } else {
                        document.documentElement.scrollTop = a;
                    }
                }
                //向下
                function setdown() {
                    now = document.documentElement.scrollTop;
                    if (now < a && i < 50) {
                        document.documentElement.scrollTop = Number(now - stance / 50);
                        i++;
                        setTimeout(setdown, 10);
                    } else {
                        document.documentElement.scrollTop = a;
                    }
                }
            }
        },
        created() {
            this.getTypeList()
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }

    }
</script>

<style>
    .noActive {
        display: block;
    }

    .van-grid {
        background: #f7f7f7;
        padding-top: 1vw
    }

    .van-grid-item {
        margin-bottom: 4vw;
    }

    .van-grid-item__content {
        padding: 0px;
        background-color: #f7f7f7;
    }

    .van-grid-item img {
        width: 8vw;
        height: 8vw;
    }

    .icon-title {
        font-size: 3.2vw;
        margin-top: 1vw;
    }

    .jump {
        width: 40px;
        height: 40px;
        position: fixed;
        right: -3px;
        font-size: 20px;
        bottom: 200px;
        z-index: 10000;
    }

    .jump img {
        width: 100%;
        height: 100%;
    }
</style>