import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/checkout'
import login from '../components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
