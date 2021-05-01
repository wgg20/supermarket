<template>
  <div id='cart-list-item'>
    <div class="product-button">
      <cart-list-button :is-checked="product.checked" @click.native="checkClick"></cart-list-button>
    </div>
    <div class="product-img">
      <img :src="product.image" alt="">
    </div>
    <div class="product-text">
      <div class="product-title">{{product.title}}</div>
      <div class="product-desc">{{product.desc}}</div>
      <div class="product-bottom">
        <span class="price left">￥{{product.price}}</span>
        <span class="num right">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import CartListButton from '../../../components/content/checkButton/CartListButton'

export default {
  name:'CartListItem',
  props: {
    product:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components: {
    CartListButton,
  },
  data () {
    return {}
  },
  methods: {
    checkClick(){
      this.product.checked=!this.product.checked
    }
  },
}
</script> 

<style scoped>
#cart-list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  /* padding-left: 20px; */
  border-bottom: 1px solid #aaa;
}

.product-button {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-title,
.product-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.product-desc{
  font-size:12px
}
.product-title{
  font-size: 14px;
}

.product-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.product-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.product-text {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.product-text .product-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.product-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.product-bottom .price,
.num {
  color: orangered;
}
</style>