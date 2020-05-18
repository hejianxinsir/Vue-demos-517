import Vuex from 'vuex'
import Vue from 'vue'
import {HE} from './variable.js'

Vue.use(Vuex)

const NUM_ADD = 'NUM_ADD'
const LOCATION_CHANGE = 'LOCATION_CHANGE'

export default new Vuex.Store({
  state: {
    num: 100,
    name: 'hejianxin',
    location: '北京',
    sex: 'strong'
  },
  modules: {
    moduleA: {
      namespaced: true,
      state: {
        today: 'today 天气好',
        cloud: true,
        rain: false
      }
    },
    moduleB: {
      namespaced: true,
      state: {
        today: 'today 天气不行啊'
      }
    }
  },
  mutations: {
    [HE](state, payload){
      state.num += payload.count
    },
    [NUM_ADD](state){
      state.num += 1
    },
    [LOCATION_CHANGE](){
      this.state.location = '湖南'
    },
    inc(){
      this.state.num += 1
    },
    dec(){
      this.state.num -= 1
    }
  },
  actions: {
    incAction(context){
      context.commit('inc')
    },
    decAction(context){
      context.commit('dec')
    }
  },
  getters: {
    getNum(state){
      return state.num
    }
  }
})

