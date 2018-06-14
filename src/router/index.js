import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Destination from '@/pages/destination/Destination'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/destination',
      name: 'Destination',
      component: Destination
    }
  ]
})
