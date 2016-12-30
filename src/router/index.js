import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import Music from '../components/Music'
import Stuff from '../components/Stuff'




const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/music', component: Music },
    { path: '/stuff', component: Stuff}
  ]
})

export default router