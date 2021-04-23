<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll"

export default {
  name:'Scroll',
  props: {},
  components: {},
  data () {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      // probeType:2,
      // pullUpLoad:true
    })
  },
}
</script> 

<style scoped>

</style>