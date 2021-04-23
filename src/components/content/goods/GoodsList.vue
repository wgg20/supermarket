<template>
  <div class='goods-list'>
    <goods-list-item v-for="(item,index) in goodsInfo" 
    :goods-item="item" 
    :key="index"
    class="goods-list-item"
    ></goods-list-item>
  </div>
</template>

<script>

import GoodsListItem from "./GoodsListItem"

export default {
  name:'GoosdList',
  props: {
    goodsInfo:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components: {
    GoodsListItem
  },
  data () {
    return {}
  },
}
</script> 

<style scoped>
  .goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>