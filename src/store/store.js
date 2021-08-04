import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
        }
    },
})