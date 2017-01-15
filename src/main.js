// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Home from './components/Home'
import Music from './components/Music'
import Stuff from './components/Stuff'
import Create from './components/Create'
import App from './App.vue'

const app = new Vue({
  router,
  ...App
})

export {app, router}
