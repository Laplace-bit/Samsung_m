import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
         showPopupPart1: false,
        showPopupPart2: false,
        count:0,
        showSku: false,
        con:"5555"
    },
    getters: {},
    actions:{
        setCityName({commit,state}, name){
            commit("setCity", name);
        }
    },
    mutations:{
        setCity(state, name){
            state.city = name;
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