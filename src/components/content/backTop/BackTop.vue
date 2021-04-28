<template>
  <div class='back-top'>
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  props: {},
  components: {},
  data () {
    return {}
  },
}
</script> 

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
    /* z-index: 770; */
  }
  .back-top img{
    width: 45px;
    height: 45px;
  }
</style>