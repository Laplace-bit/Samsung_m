import Vue from 'vue'
import App from './App.vue'
import router from './routers';
import Vuex from 'vuex'

// 引入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';

import {
  Lazyload
} from 'vant';
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Vuex)

// 引入swiper
import swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';


import HttpUtils from "./network/HttpUtils";
Vue.prototype.$http = HttpUtils;
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')