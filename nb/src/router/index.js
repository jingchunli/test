import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/Home'
import View from '@/page/View'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      children: [{
        path: '/View',
        name: 'view2',
        component: View
      }]
    }
  ]
})
