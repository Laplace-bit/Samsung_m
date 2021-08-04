import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showPopupPart1: false,
        showPopupPart2: false,
        count:0
    },
    mutations: {
        openHeaderNavPart1(state){
            state.showPopupPart1=true
        },
        openHeaderNavPart2(state){
            state.showPopupPart2=true
        },
    },
})
