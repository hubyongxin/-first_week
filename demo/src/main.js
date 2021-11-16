import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../src/assets/gaobal.css'
//注册使用ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
