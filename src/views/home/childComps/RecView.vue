<template>
  <div class='rec-view'>
    <div v-for="item,index in recommends" :key="index" class="rec-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components: {},
  data () {
    return {}
  },
}
</script> 

<style scoped>
  .rec-view {
    display: flex;
    padding:10px 0 15px 0;
    text-align: center;
    font-size:14px;
    border-bottom:10px solid #eee;
    margin-left:-10px
  }
  .rec-item {
    flex:1;
  }
  .rec-item img {
    width:55.46px;
    height:55.46px;
    /* padding-bottom:5px */
  }

</style>