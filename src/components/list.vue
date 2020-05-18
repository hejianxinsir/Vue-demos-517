<template>
  <div class="list">
    <h1>List 组件</h1>
    <router-link :to="{name: 'he', params: {msg: '100$'}}">he 链接</router-link>
    <HelloWorld :msg="toH"/>
  </div>
</template>


<script>
import HelloWorld from './HelloWorld'
export default {
  name: 'list',
  data(){
    return {
      toH: '给H的100￥'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .list{
    border: 3px solid pink;
  }
</style>