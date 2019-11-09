import Vue from 'vue'
Vue.filter('pretty',function ( val ) {
  console.log('pretty',val.split(''))
  return [ 1,  2]
})