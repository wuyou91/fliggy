import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/pages/home/Home')), 'Home')
const Destination = r => require.ensure([], () => r(require('@/pages/destination/Destination')), 'Destination')

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
