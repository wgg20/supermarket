<template>
  <div class='detail-first-info' v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="all-price">
      <span class="new-price">{{goods.lowNowPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount-price">{{goods.discountDesc}}</span>
    </div>
    <div class="info-columns-item">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-sevices">
      <span 
    class="info-sevices-item"
    v-for="index in goods.services.length - 1"
    :key="index"
    >
      <!-- <span class="icon">{{goods.services[index - 1].icon}}</span> -->
      <img :src="goods.services[index - 1].icon" alt="">
      <span class="text">{{goods.services[index - 1].name}}</span>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailFirstInfo',
  props: {
    goods:{
      type:Object,
      default(){
        return{}
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
.detail-first-info {
  margin-top: 15px;
  padding: 0 8px;
  width: 100%;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.all-price {
  margin-top: 10px;
}

.all-price .new-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.all-price .old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}

.all-price .discount-price {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-columns-item {
  margin-top: 5px;
  line-height: 30px;
  display: flex;
  /* font-size: 13px; */
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
  font-size: 12px;
}

.info-sevices {
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  font-size: 12px;
}

.info-sevices-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 13px;
  color:black;
  font-weight: 1000;
}
</style>