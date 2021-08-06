import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allChecked:false,
        userCartImg:[],
        userCartData:[],
        userCart:{},
        detailReqID:{},
        detailConfiguration:{},
        detailColorList:[],
        detailPicList:[],
        detailSwiper: {},
        detailBaseInfo:{},
        showPopupPart1: false,
        showPopupPart2: false,
        count:0,
        showSku: false,
    },

    getters: {
        // 内存
        storageInfo: state => {
            if (!state.detailConfiguration.pdpSkuSpecInfoList) return
            let storageArr = [];
            state.detailConfiguration.pdpSkuSpecInfoList.forEach((item,index)=>{
                if (index == 0) {
                    storageArr = item.attrVal.split(',');
                }
            })
            return storageArr
        },
        //机型
        goodsModel: state => {
            if (!state.detailConfiguration.pdpSpuLinkGoodsInfoList) return
            let modelArr = state.detailConfiguration.pdpSpuLinkGoodsInfoList;
            return modelArr;
        },
        // 计价
        checkedMoney: state => {
            let s = state.userCartData.reduce((pre, item) => {
                if (item.isSelect) {
                    pre += item.minPrice*1 * item.goodsNum * 1;
                }
                return pre
            }, 0);
            return s*100;
        }
    },
    actions:{
    },
    mutations: {
        // 更新数量
        updateNumAdd(state, id) {
            state.userCartData.forEach(item => {
                if (item.goods_id == id) {
                    item.goodsNum = item.goodsNum+1
                }
            })
        },
         updateNumReduce(state, id) {
            state.userCartData.forEach(item => {
                if (item.goods_id == id) {
                    item.goodsNum--
                }
            })
        },
        changeChecked(state, id) {
            state.userCartData.forEach((item,index) => {
                if (id == index) {
                    console.log(item.isSelect);
                }
            })
            state.allChecked = state.userCartData.every(item => item.isSelect);
        },
        changeAllChecked(state) {
            state.allChecked = !state.allChecked
                state.userCartData.forEach((item) => {
                    item.isSelect = state.allChecked;
                })
        },
        updateUserCartImg(state, newVal) {
            state.userCartImg = newVal
        },
        updateUserCartData(state, newVal) {
            state.userCartData = newVal;
        },
        updateUserCart(state,newVal) {
            state.userCart = newVal;
        },
        getDetailId(state,id) {
           state.detailReqID =id
        },
        ShowSku(state) {
            state.showSku = true;
        },
        openHeaderNavPart1(state){
            state.showPopupPart1=true
        },
        openHeaderNavPart2(state){
            state.showPopupPart2=true
        },
    },
})