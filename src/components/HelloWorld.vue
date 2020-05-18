<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    来自list组件的信息是: {{msg}}<br>
    <He :tohe="msg"/>
  </div>
</template>

<script>
import He from './he.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '10￥'
    }
  },
  components: {
    He
  }
}
</script>

<style scoped>
  .hello{
    border: 1px solid;
    margin: 20px 0;
  }
</style>
