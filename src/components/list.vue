<template>
  <div class="list">
    <h1>List 组件</h1>
    <router-link :to="{name: 'he', params: {msg: '100$'}}">he 链接</router-link>
  </div>
</template>


<script>
export default {
  name: 'list',
  data(){
    return {

    }
  }
}
</script>