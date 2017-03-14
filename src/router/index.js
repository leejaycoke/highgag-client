import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Highgag from '@/components/Highgag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/highgag',
      name: 'highgag',
      component: Highgag
    }
  ]
})
