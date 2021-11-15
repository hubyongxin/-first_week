import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',component: Login},
  {path: '/main',component: Main},
 
]

const router = new VueRouter({
  routes
})

export default router
