import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '../page/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
