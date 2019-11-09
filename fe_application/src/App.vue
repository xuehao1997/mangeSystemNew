<template>
  <div id="app">
    <LayOut/>
  </div>
</template>

<script>
import LayOut from 'layout'
export default {
  name: 'app',
  components: {
    LayOut
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
