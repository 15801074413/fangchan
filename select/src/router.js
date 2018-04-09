import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Tal from './views/Tal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:fenlei',
      name: 'about',
      component: About
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/tal',
      name: 'tal',
      component: Tal
    }
  ]
})
