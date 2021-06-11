import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import category from '@/components/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    }
  ]
})
