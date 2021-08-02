import Vue from 'vue'
import App from './App.vue'

import HttpUtils from "./network/HttpUtils";
Vue.prototype.$http = HttpUtils;
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
