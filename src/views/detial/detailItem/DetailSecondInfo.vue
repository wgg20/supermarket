<template>
  <div class='detail-second-info'>
    <div class="shop-top">
      <img :src="shops.shopLogo" alt="">
      <span class="shop-name">{{shops.name}}</span>
    </div>
    <div class="shop-mid">
      <div class="shop-left shop-middle-item">
        <div class="shop-sell">
          <div class="shop-sell-num">{{sellCountFilter}}</div>
          <div class="shop-sell-text">总销量</div>
        </div>     
        <div class="shop-goods">
          <div class="shop-goods-num">{{shops.cGoods}}</div>
          <div class="shop-goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right shop-middle-item">
        <table>
          <tr v-for="(item,index) in shops.score" :key="index">
            <td>
              {{item.name}}
            </td>
            <td :class="{ 'score-better': item.isBetter }" class="score">
              {{item.score}}
            </td>
            <td :class="{ 'better-more': item.isBetter }" class="better">
              <span>{{item.isBetter ? "高" : "低"}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="comming">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailSecondInfo',
  props: {
    shops:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},
  computed:{
    sellCountFilter() {
      if (this.shops.cSells < 10000) {
        return value;
        }else{
          return (this.shops.cSells / 10000).toFixed(1) + "万";
        }
    },
  }
}
</script> 
<style scoped>
.detail-second-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  line-height: 45px;
  /* 让元素垂直中心对齐 */
  display: flex;
  align-items: center;
}

.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-top .shop-name {
  margin-left: 10px;
  vertical-align: center;
}

.shop-mid {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-middle-item {
  flex: 1;
}

.shop-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.shop-goods{
  margin-top: 3px;
}

.shop-sell-num,
.shop-goods-num {
  font-size: 16px;
}

.shop-sell-text,
.shop-goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-right {
  font-size: 13px;
  color: #333;
  margin-right: 15px;
}

.shop-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-right table td {
  padding: 5px 0;
}

.shop-right .score {
  color: #5ea732;
}

.shop-right .score-better {
  color: #f13e3a;
}

.shop-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.comming {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>