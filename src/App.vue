<template>
  <div id='app'>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from './components/reusable/navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:65px;
}
nav{
    margin-bottom:20px;
}
body{
  background-color:#fafafa
}
</style>
