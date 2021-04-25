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
      scroll:null,
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
      pullUpLoad:this.pullUpLoad,
      keepAlive:true,
      observeImage: {
        debounceTime: 100 // ms
  }
    });
    //监听滚动事件的滚动位置
    if(this.probeType == 2 || this.probeType == 3){
      this.scroll.on('scroll',(position)=>{
      // console.log(position);
      //将position传给需要的组件
      this.$emit('scrollPosition',position)
    });
    }
    //监听加载更多，滚动到底部
    this.scroll.on('pullingUp',()=>{
     this.$emit('pullUp')
    });
    // console.log(this.scroll
    // );
  },
  methods: {
    scrollTo(x,y,time=300){
     this.scroll && this.scroll.scrollTo(x,y,time)
    },
    refresh(){
    // console.log("-----防抖动-------");
      this.scroll && this.scroll.refresh()
    },
    //完成下拉加载更多
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    }
  },
}
</script> 

<style scoped>

</style>