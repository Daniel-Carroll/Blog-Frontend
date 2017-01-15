import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home'
import Music from '../components/Music'
import Stuff from '../components/Stuff'
import Create from '../components/Create'
import BlogPost from '../components/reusable/BlogPost'



const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/music', component: Music },
    { path: '/stuff', component: Stuff},
    { path: '/create-post', component: Create},
    { path: '/garbage-post/:postId', name: 'garbage-post', component: BlogPost}
  ]
})

export default router