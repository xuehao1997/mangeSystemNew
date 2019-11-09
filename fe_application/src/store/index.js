import Vuex from 'vuex'
import Vue from 'vue'
import shop from './shop'
import user from './user'
Vue.use( Vuex )

const store = new Vuex.Store({
  modules: {
    shop,user
  }
}) 
  


export default store 