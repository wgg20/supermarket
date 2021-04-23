<template>
  <div class="tab-bar-item" @click="activeClick">
    <div v-if="!isActive"><slot name="icon-item"></slot></div>
    <div v-else><slot name="icon-item-active"></slot></div>
    <div :style="activeStyle"><slot name="text-item"></slot></div>
  </div>
</template>
<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  computed:{
    isActive(){
      return this.$route.path == this.path;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    activeClick(){
      this.$router.push(this.path);
    }
  }
}
</script>
<style scoped>
/* .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    size: 12px;
  }
   .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
   }  */
   .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>