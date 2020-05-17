import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld'
import He from '../components/he'

export default new Router({
  routes: [
    {
      name: 'firstPate',
      path: '/',
      components: {
        main: HelloWorld
      }
    },
    {
      name: 'he',
      path: '/he/:msg',
      components: {
        main: He
      }
    }
  ]
})