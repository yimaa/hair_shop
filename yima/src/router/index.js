import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login.vue'
import Home from '@/view/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
