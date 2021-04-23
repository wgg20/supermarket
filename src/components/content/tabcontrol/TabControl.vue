<template>
  <div class='tab-control'>
    <div v-for="(item,index) in title" 
    :key="index" 
    class="tab-control-item" 
    :class="{active:index === currentIndex}"
    @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    title:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components: {},
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index;
      //将index传递到父组件Home中
      this.$emit('conClick',index)
    }
  }
}
</script> 

<style scoped>
  .tab-control{
    width:100%;
    height:40px;
    line-height:40px;
    display:flex;
    font-size:14px;
    text-align:center;
    /* z-index:9; */
    background-color: #fff;
    }
    .tab-control-item{
      flex:1;
    }
    .tab-control-item span{
      padding-bottom: 5px; 
    }
    .active {
      color:var(--color-high-text)
    }
    .active span{
      border-bottom: 3px solid var(--color-tint)
      }
</style>