import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import './assets/icon/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueSocketio from 'vue-socket.io'

Vue.use(ElementUI)
// Vue.use(VueSocketio, 'http://socketserver.com:1998') // address
// reference address https://blog.csdn.net/a8725585/article/details/73650613
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
