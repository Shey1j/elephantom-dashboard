import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Elephant from '@/components/Elephant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/elephant',
      name: 'elephant-type',
      component: Elephant
    }
  ]
})
