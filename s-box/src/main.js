import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/styles/reset.css'
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SlideVerify)
Vue.use(axios, VueAxios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
