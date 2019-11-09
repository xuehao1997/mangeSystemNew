<template>
  <ul>
    <li v-for = "(item,index) in feature" :key = "index">  {{ item }}  </li>
  </ul>
</template>

<script>
export default {
  props: ['text'],
  computed: {
    feature () {
      return JSON.parse( this.text )
    }
  },
}
</script>

<style lang="stylus" scoped>
  ul 
    display flex 
    li 
      padding 0 10px 
</style>
