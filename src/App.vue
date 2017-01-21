<template>
  <div id='app'>
    <navbar></navbar>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>

import Navbar from './components/reusable/navbar'
import Bottom from './components/reusable/bottom'
export default {
  name: 'app',
  components: {
    Navbar,
    Bottom
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:65px;
  opacity:0.90;
}
.secondary-text{
  opacity:0.75;
}
.first-color{
  color:#0275d8;
}
.second-color{
  color:#0097a7;
}
nav{
    margin-bottom:20px;
}
body{
  background-color:#fafafa
}
</style>
