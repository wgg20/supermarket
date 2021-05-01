<template>
  <div class='bottom-bar'>
    <div class="bottom-left bar-item">
      <div class="phone">
        <i class="left-icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="shop">
        <i class="left-icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="love">
        <i class="left-icon"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom-right bar-item">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  props: {},
  components: {},
  data () {
    return {}
  },
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
}
</script> 

<style scoped>
.bottom-bar{
  background-color:#fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: px;
  /* line-height: 49px; */
  height: 49px;
  display: flex;
  text-align: center;
  z-index: 20;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-item > div{
  flex: 1;
}
.bottom-left .left-icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 7px auto 3px;
  background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bottom-left .service {
  background-position: 0 -54px;
}

.bottom-left .shop {
  background-position: 0 -98px;
}
.text{
  font-size: 14px;
  line-height: 20px;
  /* margin-top: 15px; */
}
.bottom-right {
  font-size: 14px;
  color: #fff;
  line-height: 49px;
}

.bottom-right .add-cart {
  background-color: #ffe817;
  color: #333;
}

.bottom-right .buy {
  background-color: #f69;
}
</style>