<template>
  <div class='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
import PullUp from '@better-scroll/pull-up'
BScroll.use(ObserveDom)
BScroll.use(PullUp)

export default {
  name:'Scroll',
  data () {
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }

  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      observeDOM:true,
      pullUpLoad:this.pullUpLoad
    });
    //监听滚动事件
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      //将position传给需要的组件
      this.$emit('scrollPosition',position)
    });
    //监听加载更多
    this.scroll.on('pullingUp',()=>{
     this.$emit('pullUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    }
  },
}
</script> 

<style scoped>

</style>