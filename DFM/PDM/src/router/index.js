/**
 * @Description: 
 * @Author: 2oops
 * @Date: 2018-11-22 20:10:15
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
