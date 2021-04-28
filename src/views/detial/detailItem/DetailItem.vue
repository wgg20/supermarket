<template>
  <div id='detail-item'>
    <nav-bar class="detail-navbar">
      <div slot="left" class="left-item" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="content">
        <div class="center-item" 
        v-for="(item,index) in this.titles" 
        :key="index" 
        :class="{active: index === currentIndex}"
        @click="showClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from "../../../components/common/navbar/NavBar"

export default {
  name:'DetailItem',
  props: {},
  components: {
    NavBar,
  },
  data () {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    }  
  },
  methods: {
    showClick(index){
      this.currentIndex = index;
      this.$emit('chooseClick',index)
    },
    backClick(){
      // this.$router.push('/home')
      this.$router.back()
    }
  },
}
</script> 

<style scoped>
  /* #detail-item{
    
  } */
  .detail-navbar{
    font-size:14px;
    /* position: fixed;
    left: 0;
    right: 0;
    bottom: 0; */
    /* z-index: 2000; */
    /* background: #eee; */
  }
  .content{
    display: flex;
  }
  .center-item{
    flex: 1;
  }
  .left-item img{
    display: block;
    margin: 11px ;
  }
  .active{
    /* color: var(--color-tint); */
     color: var(--color-high-text);
  }
</style>