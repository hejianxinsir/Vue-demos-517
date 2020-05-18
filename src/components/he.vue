<template>
  <div class="he">
    <h1>he 组件</h1><br>
    传来的参数：{{$route.params.msg}}<br>
    这是 he 组件获取的 num: {{getNum}}<br>
    <button @click="HE({count: 10})">HE方法</button>
    <button @click="inc">incNum</button>
    <button @click="dec">decNum</button>
    <button @click="incAction">incAction</button>
    <button @click="decAction">decAction</button>
    <button @click="NUM_ADD">NUM_ADD</button>
    <button @click="LOCATION_CHANGE">LOCATION_CHANGE</button>
    <br>
    其他数据是: {{name}}---{{location}}<br>
    今天：{{getToday}}---{{getTodayB}}<br>

    来自爷爷组件的信息是：{{tohe}}
  </div>
</template>


<script>
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'he',
  data(){
    return {
      num: '800'
    }
  },
  props: ['tohe'],
  computed: {
    getNum(){
      return this.$store.getters.getNum
    },
    ...mapState(['name', 'location']),
    getToday(){
      return this.$store.state.moduleA.today
    },
    getTodayB(){
      return this.$store.state.moduleB.today
    }
  },
  methods: {
    // incNum(){
    //   this.$store.commit('inc')
    // },
    // decNum(){
    //   this.$store.commit('dec')
    // },
    // incAction(){
    //   this.$store.dispatch('incAction')
    // },
    ...mapMutations(['inc', 'dec', 'NUM_ADD', 'LOCATION_CHANGE', 'HE']),
    ...mapActions(['incAction', 'decAction'])
  }
}
</script>


<style scoped>
  .he{
    border: 3px solid blue;
  }
</style>