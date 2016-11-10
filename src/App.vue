<template>
  <div id="app">
    <caisse></caisse>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Caisse from './components/Caisse'

export default {
  name: 'app',
  components: {
    Caisse
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
  margin-top: 60px;
}
</style>
