import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/main/home.vue')
  },
  {
    path: '/activation',
    name: 'Activation',
    component: () => import('../views/register/activation.vue')
  },
  {
    path: '/fail',
    name: 'Fail',
    component: () => import('../views/register/fail.vue')
  },
  {
    path: '/slide',
    name: 'Slide',
    component: ()=> import('../components/slide/slidev.vue')
  },
  {
    path: '/user',
    name: 'User',
    component :() => import('../views/user/user.vue')
  },
  {
    path: '/modifyPass',
    name: 'ModifyPass',
    component :() => import('../views/user/modifyPass.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
