import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '../src/assets/gaobal.css'
//可以动态修改浏览器标题的插件
import VueWechatTitle from 'vue-wechat-title'
//注册使用ElementUI
Vue.use(ElementUI)
Vue.use(VueWechatTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
