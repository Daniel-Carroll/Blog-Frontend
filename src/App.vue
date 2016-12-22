<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Home from './components/Home'
import Navbar from './components/reusable/Navbar'


export default {
  name: 'app',
  components: {
    Hello,
    Home,
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
}
</style>
