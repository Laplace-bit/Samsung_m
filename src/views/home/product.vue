<template>
    <div>
        <div class="main-content" v-for="item in ProductList" :key="item.catgCd">
            <div class=" products-t">{{item.catgKeywords}} <span>查看更多</span></div>
            <div class="product-list">
                <div class="products-ad">
                    <a href="">
                        <img :src="item.adInfoH5.top.adPic" alt="">
                    </a>
                </div>
                <div class="products-items">
                    <div class="products-items-1">
                        <div class="products-item" v-for="(item1) in item.recSkuInfoList.slice(0, 4)"
                            :key="item1.skuId">
                            <a href="">
                                <div>
                                    <div class="products-item-img"><img :src="item1.skuImg" alt=""></div>
                                </div>
                                <div class="product-item-t1">{{item1.skuTitl}}</div>
                                <div class="product-item-t2" v-html="item1.skuSubTitl">
                                </div>
                                <div class="product-item-jg">
                                    <span class="miaosha-xj">￥{{item1.price.toFixed(2)}}</span>
                                    <span class="product-yj">￥{{item1.origPr.toFixed(2)}}</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="products-items-2">
                        <div class="swiper-container">
                            <div class="recommendPage">
                                <swiper :options="swiperOption" ref="mySwiper">
                                    <swiper-slide v-for="(item1) in item.recSkuInfoList.slice(4)" :key="item1.skuId">
                                        <div>
                                            <div class="products-item-img"><img :src="item1.skuImg" alt=""></div>
                                        </div>
                                        <div class="product-item-t1">{{item1.skuTitl}}</div>
                                        <div class="product-item-t2" v-html="item1.skuSubTitl">
                                        </div>
                                        <div class="product-item-jg">
                                            <span class="miaosha-xj">￥{{item1.price.toFixed(2)}}</span>
                                            <span class="product-yj">￥{{item1.origPr.toFixed(2)}}</span>
                                        </div>
                                    </swiper-slide>

                                    <div class="swiper-pagination" slot="pagination"></div>
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>
                                </swiper>
                            </div>
                        </div>
                        <!-- <van-swipe class="my-swipe" :loop="false" indicator-color="white" > -->
                        <!-- <van-swipe-item v-for="(item1) in item.recSkuInfoList.slice(4)" :key="item1.skuId"> -->
                        <!-- <a href="">
                                    <div>
                                        <div class="products-item-img"><img :src="item1.skuImg" alt=""></div>
                                    </div>
                                    <div class="product-item-t1">{{item1.skuTitl}}</div>
                                    <div class="product-item-t2" v-html="item1.skuSubTitl">
                                    </div>
                                    <div class="product-item-jg">
                                        <span class="miaosha-xj">￥{{item1.price.toFixed(2)}}</span>
                                        <span class="product-yj">￥{{item1.origPr.toFixed(2)}}</span>
                                    </div>
                                </a> -->
                        <!-- {{index}} -->




                        <!-- </van-swipe-item> -->
                        <!-- </van-swipe> -->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    export default {
        data() {
            return {
                ProductList: [],
                swiperOption: {
                    slidesPerView: 2,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        methods: {
            getProductList() {
                this.$http.getProductList(res => {
                    console.log(res);
                    console.log(res.data);
                    this.ProductList = res.data;
                })
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        created() {
            this.getProductList()
        },
        mouted() {
            const mySwiper = new swiper('.swiper-container', {
            })

        }
    }
</script>

<style scoped>
    .main-content {
        padding: 6vw 4vw 0 4vw;
        margin: 0 auto;
        text-align: center;
    }

    .products-t {
        font-size: 5.3vw;
        line-height: 7.7vw;
        text-align: left
    }

    .product-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 25px;
        flex-direction: row;
        text-align: center;

    }

    .products-ad {
        width: 100%;
        text-align: center;
        border-radius: 2.7vw;
        background-color: white;
        margin-bottom: 2vw
    }

    .products-ad a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .products-ad a img {
        width: 100%;
        height: 100%;
    }

    .products-items-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 92vw;
    }

    .products-item {
        width: 44.8vw;
        background-color: #fff;
        border-radius: 2.7vw;
        cursor: pointer;
        padding: 2.4vw 0;
        margin-bottom: 2.53vw;
    }

    .products-item-img {
        width: 25.33vw;
        height: 25.33vw;
        margin: 1.2vw 9.73vw 2.4vw 9.73vw;
    }

    .products-item-img img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .product-item-t1 {
        font-size: 3.5vw;
        font-weight: 700;
        line-height: 4.6vw;
        margin-bottom: 1vw;
        height: 9vw;
        padding: 0 4vw;

    }

    .product-item-t2 {
        font-size: 2.9vw;
        height: 8.5vw;
        white-space: normal;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 1.9vw 1.4vw;
        background: #fff;
    }

    .product-item-jg {
        color: #2189ff;
        font-size: 3.5vw;
        line-height: 4.3vw;
        font-family: samsung-number;
        padding-top: 5px;
    }

    .miaosha-xj {
        color: #2189ff;
        font-weight: 700;
        font-size: 4vw;
    }

    .product-yj {
        text-decoration: line-through;
        color: #aaa;
    }

    .products-items-2 {
        width: 92vw;
        border-radius: 2.7vw;
        overflow: hidden;
    }

    a {
        color: #000
    }

    .swiper-slide-active {
        background: #fff;
    }

    .swiper-slide {
        background: #fff;
        background-color: #fff;
        cursor: pointer;
        padding: 2.4vw 0;
        margin-bottom: 2.53vw;
    }

    .swiper-button-next,
    .swiper-button-prev {
        background-size: 50%;
        color: black;
        opacity: 1
    }

    .swiper-button-next {
        right: -5px
    }
    .swiper-button-prev {
        left: -5px;
    }
</style>