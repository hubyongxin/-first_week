import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Main from '../views/Main.vue'
import ProjectApplication from '../views/ProjectApplication.vue'
import ProjectAdd from '../views/ProjectAdd.vue'
import ProjectAudit from '../views/ProjectAudit.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/main',
    component: Main,
    redirect: '/projectapplication',
    children: [
      { path: '/projectapplication', component: ProjectApplication },
      { path: '/projectadd', component: ProjectAdd },
      { path: '/projectaudit', component: ProjectAudit },
      { path: '/projectdetail/:proguid', component: ProjectDetail },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
