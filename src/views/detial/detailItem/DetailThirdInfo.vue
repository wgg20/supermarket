<template>
  <div class='detail-third-info' v-if="Object.keys(details).length != 0">
    <div class="text-style clear-fix" >
      <div class="top"></div>
      <div class="text">{{details.desc}}</div>
      <div class="bottom"></div>
    </div>

  <div class="text-key">{{details.detailImage[0].key}}</div>

  <div class="images">
    <img 
    v-for="(item,index) in details.detailImage[0].list" 
    :src="item" 
    :key="index"
    @load="imgLoad">
  </div>
  </div>
</template>

<script>
export default {
  name:'DetailThird',
  props: {
    details:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
  components: {},
  data () {
    return {}
  },
}
</script> 

<style scoped>
.detail-third-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}

.text-style {
  padding: 0 15px;
}

.text-style .top,
.text-style .bottom {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
  background-color: #fff;
}

.text-style .top {
  float: left;
}

.text-style .bottom {
  float: right;
}

.text-style .top::before,
.text-style .bottom::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.text-style .top::after {
  right: 0;
}

.text-style .text {
  padding: 15px 0;
  font-size: 14px;
}

.text-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.images img {
  width: 100%;
}
</style>