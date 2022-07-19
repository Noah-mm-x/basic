import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/element'
import { post, get } from '@utils/http.js'

Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$get = get

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
