<template>
  <div id="app">
    <List/>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import He from './components/he'
import List from './components/list'

export default {
  name: 'App',
  data(){
    return {
      xxx: 'uuu',
      fromSon: ''
    }
  },
  components: {
    List
  },
  methods: {
    receive(value){
      this.fromSon = value
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
