import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import Music from '../components/Music'




const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/music', component: Music }
  ]
})

export default router