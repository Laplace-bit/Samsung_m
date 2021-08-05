import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
    //   机型
        goodsModel: state => {
            if (!state.detailConfiguration.pdpSpuLinkGoodsInfoList) return
            let modelArr = state.detailConfiguration.pdpSpuLinkGoodsInfoList;
            return modelArr;
        }
    },
    actions:{
    },
    mutations: {
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